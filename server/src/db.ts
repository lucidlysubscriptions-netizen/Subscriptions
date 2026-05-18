// Shared Prisma client. Every route file imports `prisma` from here so the
// whole server uses one database connection pool.
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// Neon's free tier suspends the database compute after ~5 min idle. The first
// query after that can fail with P1001 ("Can't reach database server") while
// the compute is still waking up. We retry such transient errors with a short
// backoff so a cold start surfaces as a brief delay, not a 500.
const COLD_START_RETRIES = 5;

function isColdStartError(err: unknown): boolean {
  if (typeof err !== "object" || err === null) return false;
  const code = (err as { code?: unknown }).code;
  const message = (err as { message?: unknown }).message;
  return (
    code === "P1001" ||
    (typeof message === "string" && /reach database server/i.test(message))
  );
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const prisma = new PrismaClient({ adapter }).$extends({
  query: {
    async $allOperations({ args, query }) {
      for (let attempt = 1; ; attempt++) {
        try {
          return await query(args);
        } catch (err: unknown) {
          if (!isColdStartError(err) || attempt > COLD_START_RETRIES) throw err;
          // 0.5s, 1s, 1.5s, … — enough for a Neon compute to wake up.
          await delay(attempt * 500);
        }
      }
    },
  },
});
