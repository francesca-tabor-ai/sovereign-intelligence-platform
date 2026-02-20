/**
 * App layout: left sidebar + main content + floating chat.
 */

import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { ChatBot } from "./ChatBot";

export function Layout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="app-main">
        <Outlet />
      </main>
      <ChatBot />
    </div>
  );
}
