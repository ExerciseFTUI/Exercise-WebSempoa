import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserContextProvider } from "./components/Contexts/UserContext";

import App from "./App";

import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/Login";

import PilihCabang from "./pages/PilihCabang";

import Kupon from "./pages/Dashboard/Kupon";
import TambahKupon from "./pages/Dashboard/Kupon/TambahKupon";

import Merchandise from "./pages/Dashboard/Merchandise";
import Pendaftaran from "./pages/Dashboard/Pendaftaran";

import Civitas from "./pages/Dashboard/Civitas";
import DaftarMurid from "./pages/Dashboard/Civitas/DaftarMurid";
import DaftarGuru from "./pages/Dashboard/Civitas/DaftarGuru";
import TambahGuru from "./pages/Dashboard/Civitas/TambahGuru";

import Barang from "./pages/Dashboard/Barang";
import DataBuku from "./pages/Dashboard/Barang/DataBuku";
import DataPemesanan from "./pages/Dashboard/Barang/DataPemesanan";
import Pembayaran from "./pages/Dashboard/Pembayaran";
import Invoice from "./pages/Dashboard/Pembayaran/Invoice";

import TambahAdmin from "./pages/TambahAdmin";

import TambahCabang from "./pages/TambahCabang";

import "./index.css";
import StokKuponTc from "./pages/Dashboard/Kupon/StokKuponTc";
import RiwayatPemesanan from "./pages/Dashboard/Kupon/RiwayatPemesanan";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="cabang" element={<PilihCabang />} />

          <Route path="tambah-cabang" element={<TambahCabang />} />

          <Route path="tambah-admin" element={<TambahAdmin />} />

          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="dashboard/" element={<Dashboard />}>
            <Route path="daftar-civitas/" element={<Civitas />}>
              <Route path="murid" element={<DaftarMurid />} />
              <Route path="guru" element={<DaftarGuru />} />
              <Route path="tambah-guru" element={<TambahGuru />} />
            </Route>

            <Route path="pendaftaran" element={<Pendaftaran />} />

            <Route path="barang/" element={<Barang />}>
              <Route path="pemesanan" element={<DataPemesanan />} />
              <Route path="buku" element={<DataBuku />} />
            </Route>

            <Route path="kupon/" element={<Kupon />}>
              <Route path="stok-kupon-tc" element={<StokKuponTc />} />
              <Route path="riwayat-pemesanan" element={<RiwayatPemesanan />} />
            </Route>

            <Route path="pembayaran" element={<Pembayaran />} />
            <Route path="invoice" element={<Invoice />} />
            <Route path="merchandise" element={<Merchandise />} />
          </Route>

          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
