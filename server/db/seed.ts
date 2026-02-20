/**
 * Seed the SIP database with sample organisations, vendors, and relationships.
 * Run: npx tsx server/db/seed.ts
 */

import { getDb } from "./connection";

const TENANT = "default";

const organisations = [
  { id: "org-1", name: "National Energy Corp", sector: "Energy", country_code: "GB", sovereignty_score: 72, data_maturity_score: 65, ai_maturity_score: 45 },
  { id: "org-2", name: "Central Health Authority", sector: "Healthcare", country_code: "GB", sovereignty_score: 85, data_maturity_score: 70, ai_maturity_score: 55 },
  { id: "org-3", name: "Metro Transport Ltd", sector: "Transport", country_code: "GB", sovereignty_score: 58, data_maturity_score: 50, ai_maturity_score: 38 },
  { id: "org-4", name: "Finance Regulator", sector: "Finance", country_code: "GB", sovereignty_score: 92, data_maturity_score: 88, ai_maturity_score: 62 },
  { id: "org-5", name: "City Council Digital", sector: "Government", country_code: "GB", sovereignty_score: 68, data_maturity_score: 55, ai_maturity_score: 42 },
];

const vendors = [
  { id: "vendor-1", name: "CloudCorp US", country_code: "US" },
  { id: "vendor-2", name: "DataHost EU", country_code: "DE" },
  { id: "vendor-3", name: "IdentityProvider UK", country_code: "GB" },
  { id: "vendor-4", name: "Analytics Global", country_code: "US" },
  { id: "vendor-5", name: "SecureStack UK", country_code: "GB" },
];

const organisationVendors = [
  { organisation_id: "org-1", vendor_id: "vendor-1", role: "cloud" },
  { organisation_id: "org-1", vendor_id: "vendor-4", role: "analytics" },
  { organisation_id: "org-2", vendor_id: "vendor-2", role: "cloud" },
  { organisation_id: "org-2", vendor_id: "vendor-3", role: "identity" },
  { organisation_id: "org-3", vendor_id: "vendor-1", role: "cloud" },
  { organisation_id: "org-4", vendor_id: "vendor-5", role: "infrastructure" },
  { organisation_id: "org-4", vendor_id: "vendor-3", role: "identity" },
  { organisation_id: "org-5", vendor_id: "vendor-2", role: "cloud" },
  { organisation_id: "org-5", vendor_id: "vendor-3", role: "identity" },
];

export function seed() {
  const db = getDb();

  db.exec("BEGIN");

  try {
    // Ensure default tenant
    db.prepare(
      "INSERT OR IGNORE INTO tenants (id, name) VALUES (?, ?)"
    ).run(TENANT, "Default tenant");

    const insertOrg = db.prepare(`
      INSERT OR REPLACE INTO organisations (id, tenant_id, name, sector, country_code, sovereignty_score, data_maturity_score, ai_maturity_score, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
    `);
    for (const o of organisations) {
      insertOrg.run(o.id, TENANT, o.name, o.sector, o.country_code, o.sovereignty_score, o.data_maturity_score, o.ai_maturity_score);
    }

    const insertVendor = db.prepare(`
      INSERT OR REPLACE INTO vendors (id, tenant_id, name, country_code) VALUES (?, ?, ?, ?)
    `);
    for (const v of vendors) {
      insertVendor.run(v.id, TENANT, v.name, v.country_code);
    }

    db.prepare("DELETE FROM organisation_vendors").run();
    const link = db.prepare(`
      INSERT INTO organisation_vendors (organisation_id, vendor_id, role) VALUES (?, ?, ?)
    `);
    for (const ov of organisationVendors) {
      link.run(ov.organisation_id, ov.vendor_id, ov.role);
    }

    db.exec("COMMIT");
    console.log("Seed complete: %d organisations, %d vendors, %d links",
      organisations.length, vendors.length, organisationVendors.length);
  } catch (e) {
    db.exec("ROLLBACK");
    throw e;
  }
}

const isRunDirect = process.argv[1]?.includes("seed");
if (isRunDirect) seed();
