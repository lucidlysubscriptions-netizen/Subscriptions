// Express API server for the Subscriptions app.
// Start with:  npm run dev
import "dotenv/config";
import express from "express";
import cors from "cors";
import { prisma } from "./db";
import { plansRouter } from "./routes/plans";
import { usersRouter } from "./routes/users";
import { subscriptionsRouter } from "./routes/subscriptions";
import { depositsRouter } from "./routes/deposits";
import { withdrawalsRouter } from "./routes/withdrawals";
import {
  redemptionsRouter,
  recoverPendingDeliveries,
} from "./routes/redemptions";
import { dashboardRouter } from "./routes/dashboard";

const app = express();

// Allow the React frontend to call this API. In production set CORS_ORIGIN to
// the frontend's URL; left unset, all origins are allowed (fine for local dev).
app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
// Parse JSON request bodies.
app.use(express.json());

// Health check — confirms the server and database are reachable.
app.get("/api/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true, database: "connected" });
  } catch {
    res.status(500).json({ ok: false, database: "unreachable" });
  }
});

// Feature routes.
app.use("/api/plans", plansRouter);
app.use("/api/users", usersRouter);
app.use("/api/subscriptions", subscriptionsRouter);
app.use("/api/deposits", depositsRouter);
app.use("/api/withdrawals", withdrawalsRouter);
app.use("/api/redemptions", redemptionsRouter);
app.use("/api/dashboard", dashboardRouter);

// 404 for any unknown route.
app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Catch-all error handler — returns clean JSON instead of crashing.
app.use(
  (
    err: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  },
);

// Hosting platforms (Render, Railway, etc.) inject the port to bind to.
const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
  // Re-arm any gift card deliveries left pending by a previous run.
  void recoverPendingDeliveries();
});
