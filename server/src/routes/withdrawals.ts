// Withdrawal endpoints.
//   POST /api/withdrawals          — withdraw the full balance  { wallet }
//   GET  /api/withdrawals/:wallet  — withdrawal history
import { Router } from "express";
import { prisma } from "../db";
import { getOrCreateUser, getActiveSubscription, getBalance } from "../helpers";

export const withdrawalsRouter = Router();

// A withdrawal always returns the entire staked balance ("withdraw all")
// and then closes the subscription — the stake cannot be partially drained
// or reused. To stake again the user creates a fresh subscription.
withdrawalsRouter.post("/", async (req, res) => {
  const { wallet } = req.body ?? {};
  if (!wallet) {
    return res.status(400).json({ error: "wallet is required" });
  }

  const user = await getOrCreateUser(wallet);
  const subscription = await getActiveSubscription(user.id);
  if (!subscription) {
    return res.status(400).json({ error: "No active subscription." });
  }

  const balance = await getBalance(user.id);
  if (balance <= 0) {
    return res.status(400).json({ error: "Nothing to withdraw." });
  }

  // Atomically close the subscription and record the withdrawal.
  // Cancelling with `status: "active"` in the WHERE clause acts as a lock:
  // a concurrent second request finds count === 0 and is rejected, so the
  // balance can never be withdrawn twice.
  const withdrawal = await prisma.$transaction(async (tx) => {
    const closed = await tx.subscription.updateMany({
      where: { id: subscription.id, status: "active" },
      data: { status: "cancelled" },
    });
    if (closed.count === 0) return null;
    return tx.withdrawal.create({
      data: {
        subscriptionId: subscription.id,
        amount: balance,
        status: "success",
      },
    });
  });

  if (!withdrawal) {
    return res.status(409).json({ error: "Withdrawal already processed." });
  }

  res
    .status(201)
    .json({ ...withdrawal, balanceAfter: 0, subscriptionClosed: true });
});

withdrawalsRouter.get("/:wallet", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { walletAddress: req.params.wallet },
  });
  if (!user) return res.json([]);

  const withdrawals = await prisma.withdrawal.findMany({
    where: { subscription: { userId: user.id } },
    orderBy: { createdAt: "desc" },
  });
  res.json(withdrawals);
});
