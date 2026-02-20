/**
 * SQLite schema for SIP (local dev). Aligns with multi-tenant concepts (tenant_id).
 */

export const SCHEMA_SQL = `
-- Tenant context for future RLS parity
CREATE TABLE IF NOT EXISTS tenants (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Organisations: core unit of analysis
CREATE TABLE IF NOT EXISTS organisations (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL DEFAULT 'default',
  name TEXT NOT NULL,
  sector TEXT,
  country_code TEXT,
  sovereignty_score REAL,
  data_maturity_score REAL,
  ai_maturity_score REAL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (tenant_id) REFERENCES tenants(id)
);

CREATE INDEX IF NOT EXISTS idx_organisations_tenant ON organisations(tenant_id);
CREATE INDEX IF NOT EXISTS idx_organisations_sector ON organisations(sector);
CREATE INDEX IF NOT EXISTS idx_organisations_country ON organisations(country_code);

-- Vendors: for dependency and sovereignty analysis
CREATE TABLE IF NOT EXISTS vendors (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL DEFAULT 'default',
  name TEXT NOT NULL,
  country_code TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (tenant_id) REFERENCES tenants(id)
);

CREATE INDEX IF NOT EXISTS idx_vendors_tenant ON vendors(tenant_id);

-- Organisation–vendor relationships (many-to-many)
CREATE TABLE IF NOT EXISTS organisation_vendors (
  organisation_id TEXT NOT NULL,
  vendor_id TEXT NOT NULL,
  role TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (organisation_id, vendor_id),
  FOREIGN KEY (organisation_id) REFERENCES organisations(id),
  FOREIGN KEY (vendor_id) REFERENCES vendors(id)
);
`;
