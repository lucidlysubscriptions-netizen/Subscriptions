// Shared database helpers used across route files.
import { prisma } from "./db";

// Hard floor for every deposit, regardless of plan. No deposit below this
// amount is ever accepted — even if a plan's own minimum were lower.
export const ABSOLUTE_MIN_DEPOSIT = 3000;

const DAY_MS = 24 * 60 * 60 * 1000;

// When the next Claude card unlocks for a subscription. The lock window is
// anchored to the most recent successful claim, or — before any claim — the
// first successful deposit. Returns null when there is no deposit to anchor
// to (so nothing has been earned yet). This is the single source of truth:
// both the redemption endpoint (enforcement) and the dashboard (display)
// call it, so what the user sees always matches what the server allows.
export async function getCardUnlockAt(
  subscriptionId: string,
  lockDays: number,
): Promise<Date | null> {
  const [latestClaim, firstDeposit] = await Promise.all([
    prisma.redemption.findFirst({
      where: { subscriptionId, status: "success" },
      orderBy: { createdAt: "desc" },
    }),
    prisma.deposit.findFirst({
      where: { subscriptionId, status: "success" },
      orderBy: { createdAt: "asc" },
    }),
  ]);
  const anchor = latestClaim?.createdAt ?? firstDeposit?.createdAt;
  if (!anchor) return null;
  return new Date(anchor.getTime() + lockDays * DAY_MS);
}

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
// The two sums are independent, so they run as one parallel round-trip.
export async function getBalance(userId: string) {
  const [deposits, withdrawals] = await Promise.all([
    prisma.deposit.aggregate({
      _sum: { amount: true },
      where: { subscription: { userId }, status: "success" },
    }),
    prisma.withdrawal.aggregate({
      _sum: { amount: true },
      where: { subscription: { userId }, status: "success" },
    }),
  ]);
  return (deposits._sum.amount ?? 0) - (withdrawals._sum.amount ?? 0);
}
