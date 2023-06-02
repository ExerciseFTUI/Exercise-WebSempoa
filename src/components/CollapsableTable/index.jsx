import React, { useRef, useState } from "react"

/* UNTUK DATA PEMESANAN */

const barangModel = {
  qty: 0,
  nama: "",
  harga: 0,
}

const POModel = {
  nopo: 0,
  tanggal: "",
  pengirim: "",
  penerima: "",
  status: "",
  totalHarga: 0,
}

/* prettier-ignore */
export default function CollapsableTable({ PO = POModel, barang = [barangModel] }) {
  const [expanded, setExpanded] = useState(false)

  const eRef = useRef(null)

  const toggleExpanded = () => setExpanded(!expanded)

  const rupiah = c => new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(c)

  return (
    <div className="border-black border-2 border-t-0 rounded-xl">
      <div
        className="border-black border-y-2 rounded-xl cursor-pointer flex justify-around font-medium text-center ease-out duration-100"
        onClick={toggleExpanded}
        style={expanded ? { borderBottomWidth: "2px", background: "rgb(251 158 35)", color: "#FAFAFA" } : { borderBottomWidth: 0, background: "none" }}
      >
        <p className="w-44 py-2">{PO.nopo}</p>
        <p className="w-44 py-2">{PO.tanggal}</p>
        <p className="w-44 py-2">{PO.pengirim}</p>
        <p className="w-44 py-2">{PO.penerima}</p>
        <p className="w-44 py-2">{PO.status}</p>
        <p className="w-44 py-2">{rupiah(PO.totalHarga)}</p>
      </div>

      <div
        ref={eRef}
        className="cursor-auto overflow-hidden ease-in-out duration-200"
        style={
          expanded
            ? {
                height: `calc(${eRef.current.scrollHeight}px)`,
                paddingLeft: "12px",
                paddingRight: "12px",
              }
            : { height: "0px", padding: "0px", borderWidth: "0px" }
        }
      >
        <div className="flex justify-around py-2 text-start border-b-2 border-orange-sempoa">
          <h1 className="w-44">Quantity</h1>
          <h1 className="w-44">Barang</h1>
          <h1 className="w-44">Harga</h1>
          <h1 className="w-44">Total Harga</h1>
        </div>

        <div>
          {barang.map((t, i) => (
            <div key={i} className="flex justify-around py-2 text-start">
              <p className="w-44">{t.qty}</p>
              <p className="w-44">{t.nama}</p>
              <p className="w-44">{rupiah(t.harga)}</p>
              <p className="w-44">{rupiah(t.qty * t.harga)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
