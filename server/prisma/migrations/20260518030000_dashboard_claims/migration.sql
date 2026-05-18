-- Replace the social claim methods with `dashboard`; the social flow is gone.
-- Safe to recreate the enum directly: the `redemptions` table has no rows.
BEGIN;
CREATE TYPE "ClaimMethod_new" AS ENUM ('email', 'dashboard');
ALTER TABLE "redemptions"
  ALTER COLUMN "method" TYPE "ClaimMethod_new"
  USING ("method"::text::"ClaimMethod_new");
ALTER TYPE "ClaimMethod" RENAME TO "ClaimMethod_old";
ALTER TYPE "ClaimMethod_new" RENAME TO "ClaimMethod";
DROP TYPE "ClaimMethod_old";
COMMIT;

-- Provisioned gift card link for a `dashboard` claim (null = not yet ready).
ALTER TABLE "redemptions" ADD COLUMN "gift_card_link" TEXT;
