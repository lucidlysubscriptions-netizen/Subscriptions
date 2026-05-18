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

  const plan = await prisma.plan.findUnique({ where: { slug: planSlug } });
  if (!plan) return res.status(404).json({ error: "Plan not found" });

  const user = await getOrCreateUser(wallet);

  // A funded stake cannot be abandoned by switching plans — its deposit
  // would be stranded under a cancelled subscription. The user must
  // withdraw first. (A subscription with no deposit can be freely changed.)
  const activeSubscription = await getActiveSubscription(user.id);
  if (activeSubscription) {
    const balance = await getBalance(user.id);
    if (balance > 0) {
      return res.status(409).json({
        error:
          "You have a funded stake. Withdraw it before switching plans.",
      });
    }
  }

  // Business rule: one active subscription per user.
  // Cancel any existing (unfunded) active subscription before the new one.
  await prisma.subscription.updateMany({
    where: { userId: user.id, status: "active" },
    data: { status: "cancelled" },
  });

  const subscription = await prisma.subscription.create({
    data: { userId: user.id, planId: plan.id },
    include: { plan: true },
  });
  res.status(201).json(subscription);
});
