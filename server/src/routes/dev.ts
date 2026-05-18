// Dev/testing-only routes. Mounted by index.ts ONLY when DEV_TOOLS=1, so
// these endpoints do not exist in a production deployment.
//
//   POST /api/dev/fast-forward  — shrink the current stake's card lock so the
//                                 next card unlocks ~10s from now.
import { Router } from "express";
import { prisma } from "../db";
import { getOrCreateUser, getActiveSubscription } from "../helpers";

export const devRouter = Router();

const DAY_MS = 24 * 60 * 60 * 1000;

// How far in the future the unlock lands after a fast-forward — long enough
// to watch the banner countdown sit "locked" briefly, then flip to claimable.
const FAST_FORWARD_LEEWAY_MS = 10_000;

devRouter.post("/fast-forward", async (req, res) => {
  const { wallet } = req.body ?? {};
  if (!wallet) {
    return res.status(400).json({ error: "wallet is required" });
  }

  const user = await getOrCreateUser(wallet);
  const subscription = await getActiveSubscription(user.id);
  if (!subscription) {
    return res.status(400).json({ error: "No active subscription." });
  }

  // The lock anchor is the most recent successful claim, or — before any
  // claim — the first successful deposit. Backdating that row's createdAt so
  // that `anchor + lockDays` lands ~10s from now fast-forwards the lock
  // without touching any other logic (display + enforcement both re-derive
  // from this anchor via getCardUnlockAt).
  const lockMs = subscription.plan.lockDays * DAY_MS;
  const newAnchor = new Date(Date.now() + FAST_FORWARD_LEEWAY_MS - lockMs);

  const latestClaim = await prisma.redemption.findFirst({
    where: { subscriptionId: subscription.id, status: "success" },
    orderBy: { createdAt: "desc" },
  });

  if (latestClaim) {
    await prisma.redemption.update({
      where: { id: latestClaim.id },
      data: { createdAt: newAnchor },
    });
  } else {
    const firstDeposit = await prisma.deposit.findFirst({
      where: { subscriptionId: subscription.id, status: "success" },
      orderBy: { createdAt: "asc" },
    });
    if (!firstDeposit) {
      return res
        .status(400)
        .json({ error: "No deposit to fast-forward." });
    }
    await prisma.deposit.update({
      where: { id: firstDeposit.id },
      data: { createdAt: newAnchor },
    });
  }

  res.json({
    ok: true,
    unlocksAt: new Date(Date.now() + FAST_FORWARD_LEEWAY_MS).toISOString(),
  });
});
