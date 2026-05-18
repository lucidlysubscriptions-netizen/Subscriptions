// Deposit endpoints.
//   POST /api/deposits          — record a deposit  { wallet, amount }
//   GET  /api/deposits/:wallet  — deposit history
import { Router } from "express";
import { prisma } from "../db";
import {
  getOrCreateUser,
  getActiveSubscription,
  ABSOLUTE_MIN_DEPOSIT,
} from "../helpers";

export const depositsRouter = Router();

depositsRouter.post("/", async (req, res) => {
  const { wallet, amount } = req.body ?? {};
  if (!wallet || typeof amount !== "number" || amount <= 0) {
    return res
      .status(400)
      .json({ error: "wallet and a positive amount are required" });
  }

  const user = await getOrCreateUser(wallet);
  const subscription = await getActiveSubscription(user.id);
  if (!subscription) {
    return res
      .status(400)
      .json({ error: "No active subscription — choose a plan first." });
  }

  // A deposit succeeds only if it meets the minimum: the plan's own
  // minimum, but never below the absolute $3,000 floor.
  const minimum = Math.max(ABSOLUTE_MIN_DEPOSIT, subscription.plan.minDeposit);
  if (amount < minimum) {
    return res.status(400).json({
      error: `Minimum deposit for this plan is $${minimum.toLocaleString()}.`,
    });
  }
  const status = "success";
  // Funds unlock after the plan's lock period.
  const unlocksAt = new Date(
    Date.now() + subscription.plan.lockDays * 24 * 60 * 60 * 1000,
  );

  const deposit = await prisma.deposit.create({
    data: { subscriptionId: subscription.id, amount, status, unlocksAt },
  });
  res.status(201).json(deposit);
});

depositsRouter.get("/:wallet", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { walletAddress: req.params.wallet },
  });
  if (!user) return res.json([]);

  const deposits = await prisma.deposit.findMany({
    where: { subscription: { userId: user.id } },
    orderBy: { createdAt: "desc" },
  });
  res.json(deposits);
});
