import { useState } from "react"

// prettier-ignore
const dataCabang = [
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
    { kode: "13001", nama: "TABA JEMEKEH", A: 242, kuponTerjual: 29 },
]

export default function RekapitulasiKupon() {
  const [cabang, setCabang] = useState(dataCabang)

  return (
    <div className="flex flex-col flex-auto p-6 h-screen overflow-clip">
      <div className="bg-white w-full h-fit rounded-3xl overflow-auto">
        <table className="w-full table">
          {/* head */}
          <thead className="sticky top-0 bg-white">
            <tr>
              <th></th>
              <th className="normal-case text-lg py-3">No.</th>
              <th className="normal-case text-lg py-3">Kode TC</th>
              <th className="normal-case text-lg py-3">Nama TC</th>
              <th className="normal-case text-lg py-3 text-center">
                Kupon Terjual
              </th>
              <th className="normal-case text-lg py-3 text-center">A</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {cabang.length == 0 ? (
              <tr>
                <th></th>
                <td colSpan="2"></td>
                <td colSpan="1">{"" ? "Loading..." : "No result found"}</td>
                <td colSpan="2"></td>
              </tr>
            ) : (
              cabang.map((data, i) => (
                <tr
                  key={i}
                  className="border-hidden hover text-black text-base"
                >
                  <th />
                  <td className="py-3">{i + 1}</td>
                  <td className="py-3">{data.kode}</td>
                  <td className="py-3">TC {data.nama}</td>
                  <td className="py-3 text-center">{data.kuponTerjual}</td>
                  <td className="py-3 text-center">{data.A}</td>
                  <th />
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
