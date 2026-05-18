// GET /api/users/:wallet — the user plus their active subscription.
// Auto-creates the user on first connect.
import { Router } from "express";
import { getOrCreateUser, getActiveSubscription } from "../helpers";

export const usersRouter = Router();

usersRouter.get("/:wallet", async (req, res) => {
  const wallet = req.params.wallet;
  if (!wallet) return res.status(400).json({ error: "wallet is required" });

  const user = await getOrCreateUser(wallet);
  const subscription = await getActiveSubscription(user.id);
  res.json({ user, subscription });
});
