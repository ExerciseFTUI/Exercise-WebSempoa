import React from "react"
import { CiSearch } from "react-icons/ci"

export default function DataBuku() {
  const buku = [
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
    {
      id: 123546,
      no: "0812Ab-80",
      level: "Sulit",
      tanggal: "9 November 2003",
      pembeli: "-",
      status: "Tersedia",
    },
  ]

  return (
    <div className="flex flex-col bg-orange-sempoa p-6 h-screen overflow-clip">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
        <div className="flex gap-2">
          <input
            type="search"
            className="rounded-3xl px-5 p-2 focus:outline-none w-full max-w-xs"
            placeholder="Search"
          />

          <button>
            <CiSearch className="text-4xl text-white" />
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button className="bg-white text-black rounded-2xl px-6 py-1 border-2 border-white active:bg-orange-darker active:text-white">
            Tersedia
          </button>

          <button className="bg-white text-black rounded-2xl px-6 py-1 border-2 border-white active:bg-orange-darker active:text-white">
            Terjual
          </button>

          <button className="bg-white text-black rounded-2xl px-6 py-1 border-2 border-white active:bg-orange-darker active:text-white">
            Rusak
          </button>
        </div>
      </div>

      <div className="bg-white w-full h-fit rounded-3xl overflow-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="normal-case text-lg">ID</th>
              <th className="normal-case text-lg">No. Buku</th>
              <th className="normal-case text-lg">Level</th>
              <th className="normal-case text-lg">Tanggal Keluar</th>
              <th className="normal-case text-lg">Pembeli</th>
              <th className="normal-case text-lg">Status</th>
            </tr>
          </thead>

          <tbody>
            {/* row */}
            {buku.map((data, i) => (
              <tr key={i} className="border-hidden hover text-black">
                <td></td>
                <td className="">{data.id}</td>
                <td>{data.no}</td>
                <td>{data.level}</td>
                <td>{data.tanggal}</td>
                <td>{data.pembeli}</td>
                <td>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
