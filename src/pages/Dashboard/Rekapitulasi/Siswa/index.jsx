import { useState } from "react"

// prettier-ignore
const dataCabang = [
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
    {kode: "13001", nama: "TABA JEMEKEH", direktur: "James Michael Muliawan", BL: 12, B: 81, RA: 78, K: 46, C: 5, L: 28, A: 242, KPN: 29, KPNTTL: 36, },
]

export default function RekapitulasiSiswa() {
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
              <th className="normal-case text-lg py-3">Nama Director</th>
              <th className="normal-case text-lg py-3 text-center">BL</th>
              <th className="normal-case text-lg py-3 text-center">B</th>
              <th className="normal-case text-lg py-3 text-center">RA</th>
              <th className="normal-case text-lg py-3 text-center">K</th>
              <th className="normal-case text-lg py-3 text-center">C</th>
              <th className="normal-case text-lg py-3 text-center">L</th>
              <th className="normal-case text-lg py-3 text-center">A</th>
              <th className="normal-case text-lg py-3 text-center">KPN</th>
              <th className="normal-case text-lg py-3 text-center">KPNTTL</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {cabang.length == 0 ? (
              <tr>
                <th></th>
                <td colSpan="4"></td>
                <td colSpan="4">{"" ? "Loading..." : "No result found"}</td>
                <td colSpan="5"></td>
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
                  <td className="py-3">{data.direktur}</td>
                  <td className="py-3 text-center">{data.BL}</td>
                  <td className="py-3 text-center">{data.B}</td>
                  <td className="py-3 text-center">{data.RA}</td>
                  <td className="py-3 text-center">{data.K}</td>
                  <td className="py-3 text-center">{data.C}</td>
                  <td className="py-3 text-center">{data.L}</td>
                  <td className="py-3 text-center">{data.A}</td>
                  <td className="py-3 text-center">{data.KPN}</td>
                  <td className="py-3 text-center">{data.KPNTTL}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
