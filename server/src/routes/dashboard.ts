// GET /api/dashboard/:wallet — aggregated numbers for the Dashboard screen.
import { Router } from "express";
import { prisma } from "../db";
import { getActiveSubscription, getBalance } from "../helpers";

export const dashboardRouter = Router();

dashboardRouter.get("/:wallet", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { walletAddress: req.params.wallet },
  });
  if (!user) {
    return res.json({
      subscription: null,
      balance: 0,
      totalDeposited: 0,
      totalWithdrawn: 0,
      totalRedeemed: 0,
    });
  }

  const subscription = await getActiveSubscription(user.id);
  const balance = await getBalance(user.id);

  const deposited = await prisma.deposit.aggregate({
    _sum: { amount: true },
    where: { subscription: { userId: user.id }, status: "success" },
  });
  const withdrawn = await prisma.withdrawal.aggregate({
    _sum: { amount: true },
    where: { subscription: { userId: user.id }, status: "success" },
  });
  const redeemed = await prisma.redemption.aggregate({
    _sum: { amount: true },
    where: { subscription: { userId: user.id }, status: "success" },
  });

  res.json({
    subscription,
    balance,
    totalDeposited: deposited._sum.amount ?? 0,
    totalWithdrawn: withdrawn._sum.amount ?? 0,
    totalRedeemed: redeemed._sum.amount ?? 0,
  });
});
