import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

import { useMutation } from "react-query";

// prettier-ignore
const dataCabang = [
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
  { nama: "DITO", level: "BEGINNER", mulai: "KMRN", akhir: "BSK" },
];

export default function RekapitulasiStatus() {
  const [cabang, setCabang] = useState(dataCabang);
  return (
    <div className="flex flex-col flex-auto p-6 h-screen overflow-clip">
      <div className="bg-white w-full h-fit rounded-3xl overflow-auto">
        <table className="w-full table">
          {/* head */}
          <thead className="sticky top-0 bg-white">
            <tr>
              <th></th>
              <th className="normal-case text-lg py-3">No.</th>
              <th className="normal-case text-lg py-3">Nama Murid</th>
              <th className="normal-case text-lg py-3">Level</th>
              <th className="normal-case text-lg py-3 text-center">Tanggal Mulai Status</th>
              <th className="normal-case text-lg py-3 text-center">Tanggal Akhir Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {cabang.length == 0 ? (
              <tr>
                <th></th>
                <td colSpan="2"></td>
                <td colSpan="2" className="text-center">
                  {"" ? "Loading..." : "No result found"}
                </td>
                <td colSpan="2"></td>
              </tr>
            ) : (
              cabang.map((data, i) => (
                <tr key={i} className="border-hidden hover text-black text-base">
                  <th />
                  <td className="py-3">{i + 1}</td>
                  <td className="py-3">{data.nama}</td>
                  <td className="py-3">TC {data.level}</td>
                  <td className="py-3 text-center">{data.mulai}</td>
                  <td className="py-3 text-center">{data.akhir}</td>
                  <th />
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme="dark" />
    </div>
  );
}
