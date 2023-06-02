import React from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

export default function Barang() {
  const page = useLocation().pathname.split("/")[3]

  return (
    <div className="bg-orange-sempoa flex-auto">
      <div className="bg-orange-darker font-Inter text-white py-6 px-12 flex justify-between">
        <div className="space-y-2">
          <h1 className="font-bold text-2xl">Cabang A</h1>
          <h2 className="font-extralight text-md">Kota, Provinsi</h2>
        </div>

        <div className="flex items-end gap-4">
          <Link
            to="/dashboard/barang/pemesanan"
            className="bg-white text-black border-white border-2 rounded-xl px-4 py-1 ease-in-out duration-200"
            style={
              page == "pemesanan"
                ? { background: "#FAFAFA", color: "#000000" }
                : { background: "transparent", color: "#FAFAFA" }
            }
          >
            Data Pemesanan
          </Link>
          <Link
            to="/dashboard/barang/buku"
            className="text-white border-white border-2 rounded-xl px-4 py-1 ease-in-out duration-200"
            style={
              page == "buku"
                ? { background: "#FAFAFA", color: "#000000" }
                : { background: "none", color: "#FAFAFA" }
            }
          >
            Data Buku
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  )
}
