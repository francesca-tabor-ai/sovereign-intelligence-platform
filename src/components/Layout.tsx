/**
 * App layout: left sidebar + main content.
 */

import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
