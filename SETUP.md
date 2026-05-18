# Subscriptions — Setup & Deployment Guide

This app has two parts:

- **`server/`** — Express + Prisma API (Node), talks to PostgreSQL.
- **`/` (root)** — React + Vite frontend.

The database is **hosted Postgres (Neon)** — already provisioned, migrated, and
seeded. You do not need Docker.

---

## 1. Prerequisites

- Node.js 20+ and npm
- The **`DATABASE_URL`** connection string (ask the project owner). It looks like:
  ```
  postgresql://USER:PASSWORD@HOST.neon.tech/neondb?sslmode=require
  ```
  Keep `?sslmode=require` — managed Postgres requires SSL.

---

## 2. Run the backend locally (`server/`)

```bash
cd server

# Create the env file with the connection string you were given.
echo 'DATABASE_URL="<paste-the-connection-string-here>"' > .env

npm install                  # also runs `prisma generate` via postinstall
npm run dev                  # API on http://localhost:4000
```

Verify: open <http://localhost:4000/api/health> — it should return
`{"ok":true,"database":"connected"}`.

> The database is already migrated and seeded. Only run `npx prisma migrate
> deploy` / `npm run seed` if you spin up a **fresh** database (migrations are
> idempotent; the seed upserts, so re-running is harmless).

---

## 3. Run the frontend locally (root)

```bash
# from the project root
npm install
npm run dev                  # app on http://localhost:5173
```

Open <http://localhost:5173>. With no `VITE_API_URL` set, the frontend talks to
`http://localhost:4000/api` automatically.

---

## 4. Environment variables

| Var | Where | Purpose |
|-----|-------|---------|
| `DATABASE_URL` | `server/.env` / backend host | Postgres connection string (Neon) |
| `PORT` | backend host | Port to bind to — injected by the host; defaults to 4000 |
| `CORS_ORIGIN` | backend host | Allowed frontend origin in production (e.g. `https://app.example.com`) |
| `VITE_API_URL` | frontend `.env` / host | Hosted backend API URL incl. `/api` suffix |

- `.env` files are git-ignored — never commit connection strings or secrets.
- `server/generated/` is git-ignored — recreated by `prisma generate`.
- See `.env.example` (root) for the frontend variable.

---

## 5. Deployment

### Database (Neon)
Already hosted. To create a fresh one: create a Neon project, then from
`server/` run `npx prisma migrate deploy` and `npm run seed` against its URL.

### Backend → Render (or Railway / Fly.io)
1. Push the repo to GitHub (`.env` files are git-ignored — confirm before pushing).
2. New **Web Service** → connect the repo.
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
3. Set env vars in the dashboard: `DATABASE_URL`, and `CORS_ORIGIN` (the
   frontend's URL). `PORT` is injected automatically.
4. Verify `https://<your-backend>/api/health`.

### Frontend → Vercel / Netlify
1. New project → connect the repo (root directory).
2. Set env var `VITE_API_URL` = `https://<your-backend>/api`.
3. After the frontend is live, set `CORS_ORIGIN` on the backend to the
   frontend's URL and redeploy the backend.

---

## 6. Common commands

| Command | Run in | Does |
|---------|--------|------|
| `npm run dev` | `server/` | Start the API in watch mode (port 4000) |
| `npm start` | `server/` | Start the API once (used by hosts) |
| `npm run dev` | root | Start the frontend (port 5173) |
| `npm run seed` | `server/` | Insert/refresh the plan catalog |
| `npx prisma migrate deploy` | `server/` | Apply pending DB migrations |
| `npx prisma studio` | `server/` | Browse the database in a GUI |
