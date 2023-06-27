import React from "react"
import { CiSearch } from "react-icons/ci"

import CollapsableTable from "../../../../components/CollapsableTable"

export default function Barang() {
  const barang = [
    {
      nopo: 12345,
      tanggal: "12 Desember 2012",
      pengirim: "Dani",
      penerima: "Dina",
      status: "Ditolak",
      totalHarga: 1000000,
      barang: [
        {
          qty: 10,
          nama: "Buku Magis",
          harga: 100000,
        },
        {
          qty: 5,
          nama: "Buku Science",
          harga: 5000,
        },
      ],
    },
    {
      nopo: 54321,
      tanggal: "31 Mei 2018",
      pengirim: "Aaron",
      penerima: "Jason",
      status: "Ditolak",
      totalHarga: 2000000,
      barang: [
        {
          qty: 10,
          nama: "Vandal",
          harga: 100000,
        },
        {
          qty: 5,
          nama: "Phantom",
          harga: 5000,
        },
      ],
    },
    {
      nopo: 12345,
      tanggal: "12 Desember 2012",
      pengirim: "Dani",
      penerima: "Dina",
      status: "Ditolak",
      totalHarga: 1000000,
      barang: [
        {
          qty: 10,
          nama: "Buku Magis",
          harga: 100000,
        },
        {
          qty: 5,
          nama: "Buku Science",
          harga: 5000,
        },
      ],
    },
    {
      nopo: 54321,
      tanggal: "31 Mei 2018",
      pengirim: "Aaron",
      penerima: "Jason",
      status: "Ditolak",
      totalHarga: 2000000,
      barang: [
        {
          qty: 10,
          nama: "Buku Magis",
          harga: 100000,
        },
        {
          qty: 5,
          nama: "Buku Science",
          harga: 5000,
        },
      ],
    },
  ]

  return (
    <div className="">
      <div className="px-12 p-6 space-y-6">
        <div className="flex items-center space-x-2">
          <input
            type="search"
            className="rounded-3xl px-5 p-2 focus:outline-none"
            placeholder="Search"
          />

          <CiSearch className="text-4xl text-white" />
        </div>

        <div className="bg-white rounded-3xl p-4">
          <div className="w-full flex justify-around text-center border-b-2 border-black mb-4">
            <h1 className="w-44 py-2">No PO</h1>
            <h1 className="w-44 py-2">Tanggal</h1>
            <h1 className="w-44 py-2">Pengirim</h1>
            <h1 className="w-44 py-2">Penerima</h1>
            <h1 className="w-44 py-2">Status</h1>
            <h1 className="w-44 py-2">Total Harga</h1>
          </div>

          <div className="space-y-4">
            {barang.map((b, i) => (
              <CollapsableTable key={i} PO={b} barang={b.barang} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
