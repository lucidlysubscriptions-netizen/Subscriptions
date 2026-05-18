// GET /api/plans — the plan catalog (Pro / Max 5x / Max 20x).
import { Router } from "express";
import { prisma } from "../db";

export const plansRouter = Router();

plansRouter.get("/", async (_req, res) => {
  const plans = await prisma.plan.findMany({ orderBy: { multiplier: "asc" } });
  res.json(plans);
});
