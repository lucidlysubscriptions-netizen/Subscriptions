// Shared database helpers used across route files.
import { prisma } from "./db";

// Hard floor for every deposit, regardless of plan. No deposit below this
// amount is ever accepted — even if a plan's own minimum were lower.
export const ABSOLUTE_MIN_DEPOSIT = 3000;

// Find a user by wallet address, creating the row on first sight.
export async function getOrCreateUser(wallet: string) {
  return prisma.user.upsert({
    where: { walletAddress: wallet },
    update: {},
    create: { walletAddress: wallet },
  });
}

// The user's current active subscription (with its plan), or null.
export async function getActiveSubscription(userId: string) {
  return prisma.subscription.findFirst({
    where: { userId, status: "active" },
    include: { plan: true },
  });
}

// Current balance = successful deposits minus successful withdrawals.
export async function getBalance(userId: string) {
  const deposits = await prisma.deposit.aggregate({
    _sum: { amount: true },
    where: { subscription: { userId }, status: "success" },
  });
  const withdrawals = await prisma.withdrawal.aggregate({
    _sum: { amount: true },
    where: { subscription: { userId }, status: "success" },
  });
  return (deposits._sum.amount ?? 0) - (withdrawals._sum.amount ?? 0);
}
