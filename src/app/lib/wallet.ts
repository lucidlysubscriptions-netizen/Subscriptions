// Demo wallet identity.
//
// A real app would get the address from a wallet provider (MetaMask, etc.)
// and verify ownership with a signature. For this prototype we just generate
// a random address once and remember it in the browser's localStorage so the
// same "user" is recognised across screens and refreshes.

const STORAGE_KEY = "demo_wallet";

function generateAddress(): string {
  const hex = Array.from({ length: 40 }, () =>
    Math.floor(Math.random() * 16).toString(16),
  ).join("");
  return `0x${hex}`;
}

// Returns the connected wallet, creating one on first call. Safe to call
// anywhere — it's idempotent.
export function connectWallet(): string {
  let wallet = localStorage.getItem(STORAGE_KEY);
  if (!wallet) {
    wallet = generateAddress();
    localStorage.setItem(STORAGE_KEY, wallet);
  }
  return wallet;
}

// The connected wallet, or null if none yet.
export function getWallet(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

// Forget the wallet (e.g. a "disconnect" action).
export function disconnectWallet(): void {
  localStorage.removeItem(STORAGE_KEY);
}
