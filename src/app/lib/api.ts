// Tiny API client for the backend server.
//
// Every screen talks to the backend through this file, so the base URL and
// error handling live in one place.

// Base URL for the backend API. Set VITE_API_URL in production (e.g. the
// hosted backend's "/api" URL); falls back to the local server in dev.
const API_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api";

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const message =
      (data && (data as { error?: string }).error) ||
      `Request failed (${res.status})`;
    throw new Error(message);
  }
  return data as T;
}

// ─────────────── Types ───────────────

export interface Plan {
  id: string;
  slug: string;
  name: string;
  description: string;
  minDeposit: number;
  multiplier: number;
  lockDays: number;
}

export interface Subscription {
  id: string;
  status: string;
  createdAt: string;
  plan: Plan;
}

export interface Deposit {
  id: string;
  subscriptionId: string;
  amount: number;
  token: string;
  status: string;
  unlocksAt: string;
  createdAt: string;
}

export interface Withdrawal {
  id: string;
  amount: number;
  status: string;
  createdAt: string;
}

// Returned by POST /api/withdrawals — a withdrawal always drains the full
// balance and closes the subscription.
export interface WithdrawalResult extends Withdrawal {
  balanceAfter: number;
  subscriptionClosed: boolean;
}

export interface Redemption {
  id: string;
  subscriptionId: string;
  amount: number;
  token: string;
  status: string;
  method: string;
  // Where an email claim is delivered; null for dashboard claims.
  destination: string | null;
  // The provisioned gift card link. Null until the team feeds it in for a
  // "dashboard" claim; always null for "email" claims (delivered by email).
  giftCardLink: string | null;
  createdAt: string;
}

export interface Dashboard {
  subscription: Subscription | null;
  balance: number;
  totalDeposited: number;
  totalWithdrawn: number;
  totalRedeemed: number;
  // When the next Claude card unlocks (ISO 8601), computed server-side.
  // Null when the stake is closed or no card has been earned yet.
  cardUnlocksAt: string | null;
  // Server's snapshot of whether the lock has elapsed. The client re-derives
  // this live from `cardUnlocksAt` so the banner flips without a reload.
  cardClaimable: boolean;
}

// How a claimed gift card is delivered:
//   email     — link emailed to the address the user entered
//   dashboard — link posted on the dashboard, tied to the wallet address
export type ClaimMethod = "email" | "dashboard";

// ─────────────── Endpoints ───────────────

export const api = {
  getPlans: () => request<Plan[]>("/plans"),

  getUser: (wallet: string) =>
    request<{ user: unknown; subscription: Subscription | null }>(
      `/users/${wallet}`,
    ),

  createSubscription: (wallet: string, planSlug: string) =>
    request<Subscription>("/subscriptions", {
      method: "POST",
      body: JSON.stringify({ wallet, planSlug }),
    }),

  createDeposit: (wallet: string, amount: number) =>
    request<Deposit>("/deposits", {
      method: "POST",
      body: JSON.stringify({ wallet, amount }),
    }),

  getDeposits: (wallet: string) => request<Deposit[]>(`/deposits/${wallet}`),

  // Withdraws the entire staked balance and closes the subscription.
  createWithdrawal: (wallet: string) =>
    request<WithdrawalResult>("/withdrawals", {
      method: "POST",
      body: JSON.stringify({ wallet }),
    }),

  getWithdrawals: (wallet: string) =>
    request<Withdrawal[]>(`/withdrawals/${wallet}`),

  // `destination` is the delivery email — required for the "email" method.
  createRedemption: (
    wallet: string,
    method: ClaimMethod,
    destination?: string,
  ) =>
    request<Redemption>("/redemptions", {
      method: "POST",
      body: JSON.stringify({ wallet, method, destination }),
    }),

  getRedemptions: (wallet: string) =>
    request<Redemption[]>(`/redemptions/${wallet}`),

  // Ops action: attach a provisioned gift card link to a redemption.
  fulfillRedemption: (id: string, giftCardLink: string) =>
    request<Redemption>(`/redemptions/${id}/link`, {
      method: "PATCH",
      body: JSON.stringify({ giftCardLink }),
    }),

  getDashboard: (wallet: string) => request<Dashboard>(`/dashboard/${wallet}`),

  // Dev/testing only — fast-forwards the current stake's 30-day card lock so
  // it unlocks ~10s from now. The backend route exists only when DEV_TOOLS=1.
  devFastForward: (wallet: string) =>
    request<{ ok: boolean; unlocksAt: string }>("/dev/fast-forward", {
      method: "POST",
      body: JSON.stringify({ wallet }),
    }),
};
