-- Where an email claim's card is delivered (null for dashboard claims).
ALTER TABLE "redemptions" ADD COLUMN "destination" TEXT;
