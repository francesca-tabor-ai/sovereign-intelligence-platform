/**
 * Left-hand navigation sidebar for Sovereign Intelligence Platform.
 */

import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
            className="shrink-0 p-0.5 rounded-lg text-[var(--grey-400)] hover:text-[var(--grey-600)] hover:bg-[var(--grey-100)] transition-colors"
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
            `sidebar-link block py-2 pr-3 text-sm truncate ${
              isActive ? "sidebar-link-active" : "sidebar-link-inactive"
            }`
          }
        >
          {item.label}
        </NavLink>
      </div>
      {hasChildren && expanded && (
        <ul className="sidebar-children mt-0.5 ml-5 space-y-0.5 border-l border-[var(--line)] pl-3">
          {item.children!.map((child) => (
            <li key={child.id}>
              <NavLink
                to={child.path}
                className={({ isActive }) =>
                  `sidebar-child-link truncate ${
                    isActive ? "sidebar-child-link-active" : "sidebar-child-link-inactive"
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
        <Link
          to="/"
          className="flex items-center gap-2.5 shrink-0 rounded-xl hover:opacity-90 transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
          aria-label="Go to landing page"
        >
          <div className="sidebar-logo">
            <Shield className="text-white w-5 h-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-[var(--ink)]">
            SIP
          </span>
        </Link>
      </div>
      <nav className="sidebar-nav" aria-label="Main navigation">
        {navConfig.map((item) => (
          <NavSection key={item.id} item={item} />
        ))}
      </nav>
    </aside>
  );
}
