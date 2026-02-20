/**
 * Left-hand navigation sidebar for Sovereign Intelligence Platform.
 */

import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight, Shield } from "lucide-react";
import { navConfig, type NavItem } from "../config/navConfig";

function NavSection({ item }: { item: NavItem }) {
  const location = useLocation();
  const hasChildren = item.children && item.children.length > 0;
  const isParentActive =
    location.pathname === item.path ||
    (hasChildren && item.children!.some((c) => location.pathname === c.path));
  const [expanded, setExpanded] = useState(isParentActive);

  return (
    <div className="sidebar-section">
      <div className="flex items-center gap-1 min-w-0">
        {hasChildren ? (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="shrink-0 p-0.5 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            aria-expanded={expanded}
          >
            {expanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        ) : (
          <span className="w-5 shrink-0" aria-hidden />
        )}
        <NavLink
          to={item.path}
          end={!hasChildren}
          className={({ isActive }) =>
            `sidebar-link block py-2 pr-3 rounded-r-md text-sm font-medium truncate ${
              isActive ? "sidebar-link-active" : "sidebar-link-inactive"
            }`
          }
        >
          {item.label}
        </NavLink>
      </div>
      {hasChildren && expanded && (
        <ul className="sidebar-children mt-0.5 ml-5 space-y-0.5 border-l border-slate-200 pl-3">
          {item.children!.map((child) => (
            <li key={child.id}>
              <NavLink
                to={child.path}
                className={({ isActive }) =>
                  `block py-1.5 pr-2 rounded-r text-sm truncate ${
                    isActive
                      ? "text-emerald-700 font-medium bg-emerald-50 border-l-2 -ml-[2px] border-emerald-500 pl-[10px]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`
                }
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
            <Shield className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">
            SIP
          </span>
        </div>
      </div>
      <nav className="sidebar-nav" aria-label="Main navigation">
        {navConfig.map((item) => (
          <NavSection key={item.id} item={item} />
        ))}
      </nav>
    </aside>
  );
}
