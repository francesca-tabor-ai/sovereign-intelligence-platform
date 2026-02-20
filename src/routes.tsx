/**
 * App routes: layout with sidebar and placeholder content for all nav paths.
 */

import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PlaceholderPage } from "./pages/PlaceholderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/overview" replace /> },
      { path: "*", element: <PlaceholderPage /> },
    ],
  },
]);
