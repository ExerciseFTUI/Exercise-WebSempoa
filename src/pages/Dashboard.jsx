import React from "react"
import { useParams } from "react-router-dom"

import DaftarMurid from "./sub_pages/DaftarMurid.jsx"
import Pendaftaran from "./sub_pages/Pendaftaran"
import Voucher from "./sub_pages/Voucher.jsx"
import Merchandise from "./sub_pages/Merchandise.jsx"
import Barang from "./sub_pages/Barang.jsx"
import Sidebar from "../components/Sidebar"

const components = {
  DaftarMurid: DaftarMurid,
  Pendaftaran: Pendaftaran,
  Barang: Barang,
  Voucher: Voucher,
  Merchandise: Merchandise,
}

const Dashboard = () => {
  let { page } = useParams()
  const SubPages = components[page] || DaftarMurid

  return (
    <div className="flex font-Inter">
      <Sidebar />
      <SubPages />
    </div>
  )
}
export default Dashboard
