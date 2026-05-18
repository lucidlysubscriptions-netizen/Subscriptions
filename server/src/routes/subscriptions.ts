// POST /api/subscriptions — create a subscription for the chosen plan.
// Body: { wallet, planSlug }
import { Router } from "express";
import { prisma } from "../db";
import { getOrCreateUser, getActiveSubscription, getBalance } from "../helpers";

export const subscriptionsRouter = Router();

subscriptionsRouter.post("/", async (req, res) => {
  const { wallet, planSlug } = req.body ?? {};
  if (!wallet || !planSlug) {
    return res.status(400).json({ error: "wallet and planSlug are required" });
  }

  // The plan lookup and the user lookup are independent — run them together.
  const [plan, user] = await Promise.all([
    prisma.plan.findUnique({ where: { slug: planSlug } }),
    getOrCreateUser(wallet),
  ]);
  if (!plan) return res.status(404).json({ error: "Plan not found" });

  // A funded stake cannot be abandoned by switching plans — its deposit
  // would be stranded under a cancelled subscription. The user must
  // withdraw first. (A subscription with no deposit can be freely changed.)
  // Both reads only need user.id, so they run in one parallel round-trip.
  const [activeSubscription, balance] = await Promise.all([
    getActiveSubscription(user.id),
    getBalance(user.id),
  ]);
  if (activeSubscription && balance > 0) {
    return res.status(409).json({
      error: "You have a funded stake. Withdraw it before switching plans.",
    });
  }

  // Business rule: one active subscription per user. Cancel any existing
  // (unfunded) active subscription, then create the new one — as a single
  // transaction so the user is never left without a subscription if the
  // create fails, and so both writes share one round-trip.
  const [, subscription] = await prisma.$transaction([
    prisma.subscription.updateMany({
      where: { userId: user.id, status: "active" },
      data: { status: "cancelled" },
    }),
    prisma.subscription.create({
      data: { userId: user.id, planId: plan.id },
      include: { plan: true },
    }),
  ]);
  res.status(201).json(subscription);
});
