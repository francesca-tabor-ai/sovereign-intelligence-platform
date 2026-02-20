/**
 * Express API for SIP (local dev). Serves /api/* for organisations, vendors, and seed.
 * Run: npx tsx server/index.ts (default port 3001). Use Vite proxy in dev.
 */

import express from "express";
import { getDb } from "./db/connection";
import { seed } from "./db/seed";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(express.json());

// Allow Vite dev server
app.use((_req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "sip-api" });
});

app.get("/api/organisations", (req, res) => {
  try {
    const tenant = (req.query.tenant as string) || "default";
    const db = getDb();
    const rows = db.prepare(
      "SELECT id, tenant_id, name, sector, country_code, sovereignty_score, data_maturity_score, ai_maturity_score, created_at, updated_at FROM organisations WHERE tenant_id = ? ORDER BY name"
    ).all(tenant) as Record<string, unknown>[];
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: String((e as Error).message) });
  }
});

app.get("/api/vendors", (req, res) => {
  try {
    const tenant = (req.query.tenant as string) || "default";
    const db = getDb();
    const rows = db.prepare(
      "SELECT id, tenant_id, name, country_code, created_at FROM vendors WHERE tenant_id = ? ORDER BY name"
    ).all(tenant) as Record<string, unknown>[];
    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: String((e as Error).message) });
  }
});

app.post("/api/seed", (_req, res) => {
  try {
    seed();
    res.json({ ok: true, message: "Database seeded." });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: String((e as Error).message) });
  }
});

app.listen(PORT, () => {
  console.log(`SIP API listening on http://localhost:${PORT}`);
});
