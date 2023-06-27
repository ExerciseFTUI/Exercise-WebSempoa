import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/Login";
import PilihCabang from "./pages/PilihCabang";
import Barang from "./pages/Dashboard/Barang";

import Voucher from "./pages/Dashboard/Voucher";
import Merchandise from "./pages/Dashboard/Merchandise";
import DaftarMurid from "./pages/Dashboard/DaftarMurid";
import Pendaftaran from "./pages/Dashboard/Pendaftaran";
import DataBuku from "./pages/Dashboard/Barang/DataBuku";
import DataPemesanan from "./pages/Dashboard/Barang/DataPemesanan";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="cabang" element={<PilihCabang />} />

        <Route path="/" element={<App />}>
          <Route path="dashboard/" element={<Dashboard />}>
            <Route path="daftar-murid" element={<DaftarMurid />} />
            <Route path="pendaftaran" element={<Pendaftaran />} />

            <Route path="barang/" element={<Barang />}>
              <Route path="pemesanan" element={<DataPemesanan />} />
              <Route path="buku" element={<DataBuku />} />
            </Route>

            <Route path="voucher" element={<Voucher />} />
            <Route path="merchandise" element={<Merchandise />} />
          </Route>
        </Route>

        {/* Wildcard route outside the nested routes */}
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
