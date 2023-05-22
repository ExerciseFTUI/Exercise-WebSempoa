import React from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import PilihCabang from "./pages/PilihCabang";

// const router = createBrowserRouter([
//   {
//     element: <App />,
//     children: [
//       {
//         path: "/login",
//         element: <LoginPage />,
//       },
//       {
//         path: "/cabang",
//         element: <PilihCabang />,
//       },
//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//         routes: [
//           {
//             path: "/dashboard/:page",
//             element: <Dashboard />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "/*",
//     element: <Navigate to="/dashboard" />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="cabang" element={<PilihCabang />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/:page" element={<Dashboard />} />
        </Route>
        <Route path="/*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
