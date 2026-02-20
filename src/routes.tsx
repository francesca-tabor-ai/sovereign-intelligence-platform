/**
 * App routes: landing at /, app with sidebar for /overview, /organisations, etc.
 */

import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { AllOrganisationsPage } from "./pages/AllOrganisationsPage";
import App from "./App";

function Root() {
  const { pathname } = useLocation();
  if (pathname === "/") return <App />;
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "overview", element: <PlaceholderPage /> },
      { path: "overview/*", element: <PlaceholderPage /> },
      { path: "organisations/all", element: <AllOrganisationsPage /> },
      { path: "organisations/*", element: <PlaceholderPage /> },
      { path: "*", element: <PlaceholderPage /> },
    ],
  },
]);
