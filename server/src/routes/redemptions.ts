// Redemption endpoints (claiming earned yield/rewards).
//   POST  /api/redemptions          — claim a $20 reward  { wallet, method, destination? }
//   GET   /api/redemptions/:wallet  — redemption history
//   PATCH /api/redemptions/:id/link — attach a provisioned gift card link
import { Router } from "express";
import { prisma } from "../db";
import {
  getOrCreateUser,
  getActiveSubscription,
  getBalance,
  getCardUnlockAt,
} from "../helpers";

export const redemptionsRouter = Router();

// Fixed reward amount per claim — matches the Figma mockup ($20).
const CLAIM_AMOUNT = 20;
const CLAIM_METHODS = ["email", "dashboard"] as const;

// At most twelve cards in any rolling 12-month window.
const CARDS_PER_YEAR = 12;
const DAY_MS = 24 * 60 * 60 * 1000;
const YEAR_MS = 365 * DAY_MS;

// Prototype: a `dashboard` claim has its gift card link auto-provisioned
// after a short delay, simulating the team purchasing the card and feeding
// the link into the database. In production this is a manual ops action.
const DELIVERY_DELAY_MS = 5_000;

function deliveryLink(redemptionId: string): string {
  return `https://claude.ai/redeem/${redemptionId.slice(0, 8).toUpperCase()}`;
}

function scheduleGiftCardDelivery(
  redemptionId: string,
  delayMs: number = DELIVERY_DELAY_MS,
): void {
  setTimeout(async () => {
    try {
      await prisma.redemption.update({
        where: { id: redemptionId },
        data: { giftCardLink: deliveryLink(redemptionId) },
      });
    } catch {
      // Redemption may have been removed; nothing to deliver.
    }
  }, Math.max(0, delayMs));
}

// On startup, re-arm delivery for any `dashboard` claim whose link never
// landed — otherwise a server restart mid-delay would strand the request.
export async function recoverPendingDeliveries(): Promise<void> {
  try {
    const pending = await prisma.redemption.findMany({
      where: { method: "dashboard", giftCardLink: null },
    });
    for (const r of pending) {
      const elapsed = Date.now() - r.createdAt.getTime();
      scheduleGiftCardDelivery(r.id, DELIVERY_DELAY_MS - elapsed);
    }
    if (pending.length > 0) {
      console.log(`Re-armed ${pending.length} pending gift card deliveries.`);
    }
  } catch {
    // Database not reachable yet — skip; nothing to recover.
  }
}

redemptionsRouter.post("/", async (req, res) => {
  const { wallet, method, destination } = req.body ?? {};
  if (!wallet || !CLAIM_METHODS.includes(method)) {
    return res.status(400).json({
      error: `wallet and a valid method (${CLAIM_METHODS.join(", ")}) are required`,
    });
  }

  // Email delivery needs a valid address to send the card to.
  const isEmail = method === "email";
  if (isEmail && (typeof destination !== "string" || !destination.includes("@"))) {
    return res
      .status(400)
      .json({ error: "A valid email address is required for email delivery." });
  }

  const user = await getOrCreateUser(wallet);
  const subscription = await getActiveSubscription(user.id);
  if (!subscription) {
    return res.status(400).json({ error: "No active subscription." });
  }

  // Cards are only earned while funds are staked. Once the balance has been
  // withdrawn there is no stake backing the reward, so claiming is blocked.
  const balance = await getBalance(user.id);
  if (balance <= 0) {
    return res
      .status(400)
      .json({ error: "Your stake is closed — there are no cards to claim." });
  }

  // Claim limits — without these a client could POST repeatedly to mint
  // unlimited cards.
  const existing = await prisma.redemption.findMany({
    where: { subscriptionId: subscription.id, status: "success" },
    orderBy: { createdAt: "desc" },
  });

  // Cap: twelve cards in any rolling 12-month window.
  const claimedLast12Months = existing.filter(
    (r) => Date.now() - r.createdAt.getTime() < YEAR_MS,
  ).length;
  if (claimedLast12Months >= CARDS_PER_YEAR) {
    return res.status(409).json({
      error: `You've claimed all ${CARDS_PER_YEAR} cards available in a 12-month period.`,
    });
  }

  // 30-day lock: the next card unlocks `plan.lockDays` after the most recent
  // claim, or — before any claim — after the first deposit. Same helper the
  // dashboard uses to render the countdown, so the two never disagree.
  const unlockAt = await getCardUnlockAt(
    subscription.id,
    subscription.plan.lockDays,
  );
  if (unlockAt && Date.now() < unlockAt.getTime()) {
    return res.status(409).json({
      error: `Your next card unlocks on ${unlockAt.toLocaleDateString(
        "en-US",
      )}.`,
    });
  }

  const redemption = await prisma.redemption.create({
    data: {
      subscriptionId: subscription.id,
      amount: CLAIM_AMOUNT,
      method,
      destination: isEmail ? destination.trim() : null,
    },
  });

  // Keep the user's email on file for email claims.
  if (isEmail) {
    await prisma.user.update({
      where: { id: user.id },
      data: { email: destination.trim() },
    });
  }

  // Dashboard claims get their link delivered to the dashboard after a delay.
  if (method === "dashboard") {
    scheduleGiftCardDelivery(redemption.id);
  }

  res.status(201).json(redemption);
});

// Ops action: attach a provisioned gift card link to a redemption. Once set,
// the dashboard surfaces the link in place of the claim banner.
redemptionsRouter.patch("/:id/link", async (req, res) => {
  const { giftCardLink } = req.body ?? {};
  if (typeof giftCardLink !== "string" || giftCardLink.trim() === "") {
    return res.status(400).json({ error: "giftCardLink is required" });
  }

  const existing = await prisma.redemption.findUnique({
    where: { id: req.params.id },
  });
  if (!existing) {
    return res.status(404).json({ error: "Redemption not found." });
  }

  const redemption = await prisma.redemption.update({
    where: { id: req.params.id },
    data: { giftCardLink: giftCardLink.trim() },
  });
  res.json(redemption);
});

redemptionsRouter.get("/:wallet", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { walletAddress: req.params.wallet },
  });
  if (!user) return res.json([]);

  const redemptions = await prisma.redemption.findMany({
    where: { subscription: { userId: user.id } },
    orderBy: { createdAt: "desc" },
  });
  res.json(redemptions);
});
