import React, { useState, useEffect, useCallback } from "react"
import axios from "axios"
import { CiSearch } from "react-icons/ci"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"

export default function Pembayaran() {
  const URL = import.meta.env.VITE_API_URL
  const cabangId = sessionStorage.getItem("cabangId")
    ? sessionStorage.getItem("cabangId")
    : ""
  const namaCabang = sessionStorage.getItem("cabangName")
    ? sessionStorage.getItem("cabangName")
    : "Cabang Sempoa"
  const [muridFilter, setMuridFilter] = useState([])
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)
  const [sudah, setSudah] = useState(0)
  const [belum, setBelum] = useState(0)
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const params = new URLSearchParams({
        cabang: `${cabangId}`,
        year: `${currentYear}`,
        month: `${currentMonth}`,
      })
      const { data } = await axios.post(
        `${URL}/murid/filter-by-month-year?${params}`
      )
      setSudah(data.sudah_bayar)
      setBelum(data.belum_bayar)
      setMuridFilter(data.result)
    } catch (error) {
      toast.warn("No Data Found!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  useEffect(() => {
    getData(currentMonth, currentYear)
  }, [])

  const formatDate = (date) => {
    const trimmedDateString = date.substring(0, date.length - 5)
    const finalDateString = trimmedDateString.replace("T", " ")
    return finalDateString
  }

  const handleMonth = (e) => {
    const month = e.target.value
    setCurrentMonth(month)
  }

  const handleYear = (e) => {
    const year = e.target.value
    setCurrentYear(year)
  }

  const handlePayNow = (userId) => {
    sessionStorage.setItem("userId", userId)
    navigate("/dashboard/invoice", { state: { currentMonth, currentYear } })
  }

  return (
    <div className="flex-auto bg-orange-sempoa overflow-x-hidden">
      <div className="flex justify-between items-center bg-orange-darker font-Inter text-white p-6 px-12">
        <div className="space-y-2">
          <h1 className="font-bold text-2xl">{namaCabang}</h1>
          <h2 className="font-extralight text-md">Kota, Provinsi</h2>
        </div>
      </div>

      <div className="px-12 p-6 space-y-6 grid">
        <div className="w-full flex flex-col md:flex-row justify-between gap-6">
          <div className="">
            <h1 className="text-white text-2xl mb-4">Iuran Bulanan</h1>

            <h1 className="text-white font-medium">
              {"Sudah Bayar: " + sudah}
            </h1>

            <h1 className="text-white font-medium">
              {"Belum Bayar: " + belum}
            </h1>

            <h1 className="text-white font-medium">Tampilkan: Semua</h1>
          </div>

          <div className="text-end">
            <div className="flex justify-end gap-2">
              <h1 className="text-white font-medium my-3">Bulan</h1>
              <select
                className="select select-bordered border-2 text-white"
                defaultValue={currentMonth}
                onChange={handleMonth}
              >
                <option className="text-black">1</option>
                <option className="text-black">2</option>
                <option className="text-black">3</option>
                <option className="text-black">4</option>
                <option className="text-black">5</option>
                <option className="text-black">6</option>
                <option className="text-black">7</option>
                <option className="text-black">8</option>
                <option className="text-black">9</option>
                <option className="text-black">10</option>
                <option className="text-black">11</option>
                <option className="text-black">12</option>
              </select>

              <h1 className="text-white font-medium my-3">Tahun</h1>
              <select
                className="select select-bordered border-2 text-white"
                onChange={handleYear}
              >
                <option className="text-black">
                  {new Date().getFullYear()}
                </option>
                <option className="text-black">
                  {new Date().getFullYear() + 1}
                </option>
              </select>

              <button
                className="btn text-white border-2 font-bold"
                onClick={() => getData()}
              >
                submit
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="normal-case text-lg">Nama Murid</th>
                <th className="normal-case text-lg">Level</th>
                <th className="normal-case text-lg">Tanggal</th>
                <th className="normal-case text-lg">Kupon</th>
                <th className="normal-case text-lg">Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {muridFilter.length == 0 ? (
                <tr>
                  <th></th>
                  <td colSpan="2"></td>
                  <td colSpan="3">No results found</td>
                  <td colSpan="2"></td>
                </tr>
              ) : (
                muridFilter.map((data, i) => {
                  return (
                    <tr key={i} className="border-hidden hover text-black">
                      <th></th>
                      <td>{data.nama.toUpperCase()}</td>
                      <td>{data.level_sekarang}</td>
                      {data.status ? (
                        <>
                          <td>{formatDate(data.pembayaran.tanggal)}</td>
                          <td>{data.pembayaran.kupon}</td>
                          <td>{data.pembayaran.status}</td>
                        </>
                      ) : (
                        <>
                          <td></td>
                          <td></td>
                          <td>
                            <button
                              className="btn"
                              onClick={() => handlePayNow(data.id)}
                            >
                              Pay Now
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  )
}
