// GET /api/dashboard/:wallet — aggregated numbers for the Dashboard screen.
import { Router } from "express";
import { prisma } from "../db";
import { getActiveSubscription, getBalance, getCardUnlockAt } from "../helpers";

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
      cardUnlocksAt: null,
      cardClaimable: false,
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

  // When the next Claude card unlocks — computed server-side so the client
  // never depends on the device clock for eligibility. Only meaningful while
  // the stake is funded; a closed stake earns no further cards.
  let cardUnlocksAt: string | null = null;
  let cardClaimable = false;
  if (subscription && balance > 0) {
    const unlockAt = await getCardUnlockAt(
      subscription.id,
      subscription.plan.lockDays,
    );
    cardUnlocksAt = unlockAt ? unlockAt.toISOString() : null;
    cardClaimable = unlockAt ? Date.now() >= unlockAt.getTime() : false;
  }

  res.json({
    subscription,
    balance,
    totalDeposited: deposited._sum.amount ?? 0,
    totalWithdrawn: withdrawn._sum.amount ?? 0,
    totalRedeemed: redeemed._sum.amount ?? 0,
    cardUnlocksAt,
    cardClaimable,
  });
});
