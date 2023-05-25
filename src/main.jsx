import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import PilihCabang from "./pages/PilihCabang";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="cabang" element={<PilihCabang />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/:page" element={<Dashboard />} />
        </Route>
        {/* Add a route for the default URL */}
        <Route path="/*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
