/**
 * All Organisations: lists organisations from the API (seeded DB).
 * Seed the DB first: npm run seed. Start API: npm run dev:server.
 */

import { useEffect, useState } from "react";

interface Organisation {
  id: string;
  tenant_id: string;
  name: string;
  sector: string | null;
  country_code: string | null;
  sovereignty_score: number | null;
  data_maturity_score: number | null;
  ai_maturity_score: number | null;
  created_at: string;
  updated_at: string;
}

export function AllOrganisationsPage() {
  const [orgs, setOrgs] = useState<Organisation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/organisations")
      .then((r) => {
        if (!r.ok) throw new Error(r.statusText);
        return r.json();
      })
      .then(setOrgs)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const handleSeed = () => {
    setError(null);
    fetch("/api/seed", { method: "POST" })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        return fetch("/api/organisations");
      })
      .then((r) => r.json())
      .then(setOrgs)
      .catch((e) => setError(e.message));
  };

  if (loading) {
    return (
      <div className="page-placeholder">
        <div className="page-section-label">Organisations</div>
        <h1 className="page-title">All Organisations</h1>
        <p className="page-body">Loading…</p>
      </div>
    );
  }

  return (
    <div className="page-placeholder">
      <div className="page-section-label">Organisations</div>
      <h1 className="page-title">All Organisations</h1>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-[var(--grey-100)] border border-[var(--line)]">
          <p className="text-[var(--grey-700)] font-medium mb-2">API error</p>
          <p className="text-sm text-[var(--grey-600)] mb-3">{error}</p>
          <p className="text-sm text-[var(--grey-500)]">
            Run <code className="px-1.5 py-0.5 rounded bg-white border border-[var(--line)]">npm run dev:server</code> in one terminal and <code className="px-1.5 py-0.5 rounded bg-white border border-[var(--line)]">npm run seed</code> once, then refresh.
          </p>
          <button
            type="button"
            onClick={handleSeed}
            className="mt-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90"
          >
            Try seed via API
          </button>
        </div>
      )}

      {!error && orgs.length === 0 && (
        <div className="mb-6 p-4 rounded-xl bg-[var(--grey-100)] border border-[var(--line)]">
          <p className="text-[var(--grey-700)] mb-2">No organisations yet.</p>
          <p className="text-sm text-[var(--grey-500)] mb-3">
            Run <code className="px-1.5 py-0.5 rounded bg-white border border-[var(--line)]">npm run seed</code> or click below to seed the database.
          </p>
          <button
            type="button"
            onClick={handleSeed}
            className="px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90"
          >
            Seed database
          </button>
        </div>
      )}

      {!error && orgs.length > 0 && (
        <div className="mt-6 overflow-x-auto rounded-xl border border-[var(--line)]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--line)] bg-[var(--grey-50)]">
                <th className="px-4 py-3 font-semibold text-[var(--ink)]">Name</th>
                <th className="px-4 py-3 font-semibold text-[var(--ink)]">Sector</th>
                <th className="px-4 py-3 font-semibold text-[var(--ink)]">Country</th>
                <th className="px-4 py-3 font-semibold text-[var(--ink)] data-value">Sovereignty</th>
                <th className="px-4 py-3 font-semibold text-[var(--ink)] data-value">Data maturity</th>
                <th className="px-4 py-3 font-semibold text-[var(--ink)] data-value">AI maturity</th>
              </tr>
            </thead>
            <tbody>
              {orgs.map((o) => (
                <tr key={o.id} className="border-b border-[var(--line)] last:border-0 hover:bg-[var(--grey-50)]">
                  <td className="px-4 py-3 font-medium text-[var(--ink)]">{o.name}</td>
                  <td className="px-4 py-3 text-[var(--grey-600)]">{o.sector ?? "—"}</td>
                  <td className="px-4 py-3 text-[var(--grey-600)]">{o.country_code ?? "—"}</td>
                  <td className="px-4 py-3 data-value">{o.sovereignty_score != null ? `${o.sovereignty_score}` : "—"}</td>
                  <td className="px-4 py-3 data-value">{o.data_maturity_score != null ? `${o.data_maturity_score}` : "—"}</td>
                  <td className="px-4 py-3 data-value">{o.ai_maturity_score != null ? `${o.ai_maturity_score}` : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
