// Seed script: inserts the 3 subscription plans into the `plans` table.
// Run with:  npm run seed
// Safe to run multiple times — it upserts by `slug`.

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const plans = [
  {
    slug: "pro",
    name: "Pro",
    description: "For the curious",
    minDeposit: 3000,
    multiplier: 1,
    lockDays: 30,
  },
  {
    slug: "max5",
    name: "Max 5x",
    description: "For the enthusiast",
    minDeposit: 12500,
    multiplier: 5,
    lockDays: 30,
  },
  {
    slug: "max20",
    name: "Max 20x",
    description: "For the power user",
    minDeposit: 24000,
    multiplier: 20,
    lockDays: 30,
  },
];

async function main() {
  for (const plan of plans) {
    await prisma.plan.upsert({
      where: { slug: plan.slug },
      update: plan,
      create: plan,
    });
  }
  console.log(`Seeded ${plans.length} plans.`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
