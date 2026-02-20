/**
 * Placeholder page: shows section and optional child title.
 */

import { useLocation } from "react-router-dom";
import { navConfig } from "../config/navConfig";

function findTitle(pathname: string): { section: string; child?: string } {
  for (const section of navConfig) {
    if (pathname === section.path) {
      return { section: section.label };
    }
    if (section.children) {
      const child = section.children.find((c) => c.path === pathname);
      if (child) {
        return { section: section.label, child: child.label };
      }
    }
  }
  return { section: "Sovereign Intelligence Platform" };
}

export function PlaceholderPage() {
  const location = useLocation();
  const { section, child } = findTitle(location.pathname);
  const title = child ?? section;

  return (
    <div className="page-placeholder">
      <div className="mb-2 text-sm font-medium text-slate-500 uppercase tracking-wider">
        {section}
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
      <p className="text-slate-600 max-w-2xl">
        This view is reserved for the {title} experience. Content and features
        will be implemented here.
      </p>
    </div>
  );
}
