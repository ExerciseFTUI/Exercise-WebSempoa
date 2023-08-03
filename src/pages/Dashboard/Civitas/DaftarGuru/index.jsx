import { useState, useEffect, useMemo } from "react"
import axios from "axios"

import { CiSearch } from "react-icons/ci"

import URL from "../../../../utils/link"
import { Link } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

export default function DaftarMurid() {
  const [guru, setGuru] = useState([])
  const [loading, setLoading] = useState(false)

  const cabangId = sessionStorage.getItem("cabangId")
    ? sessionStorage.getItem("cabangId")
    : "";

  const getData = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`${URL}/guru`)
      setGuru(data)
      setLoading(false)
      // console.log(data)
    } catch (error) {
      alert(error)
    }
  }

  const handleInputChange = async (e) => {
    const { value } = e.target
    try {
      const { data } = await axios.get(`${URL}/guru/filter-by-nama`, {
        params: {
          nama: `${value}`,
          cabang: `${cabangId}`,
        },
      })
      setGuru(data)
    } catch (error) {
      toast.warn("Something went wrong", {
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
    getData()
  }, [cabangId])

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      handleInputChange(e)
    }
  }

  return (
    <div className="flex-auto bg-orange-sempoa overflow-x-hidden">
      <div className="px-12 p-6 space-y-6">
        <div className="flex flex-col gap-2 md:flex-row justify-between md:items-center">
          <div className="flex flex-row items-center gap-2">
            <input
              type="search"
              className="rounded-3xl px-5 p-2 w-full max-w-sm focus:outline-none"
              placeholder="Search"
              onKeyDown={handleKeyDown}
            />

            <CiSearch className="text-4xl text-white" />
          </div>

          <Link
            to="/dashboard/daftar-civitas/tambah-guru"
            className="font-semibold text-white border-2 border-white rounded-md w-fit h-fit px-2 py-1 hover:bg-white hover:text-orange-sempoa ease-in-out duration-200 tracking-wider"
          >
            Tambah Guru
          </Link>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="normal-case text-lg">Nama</th>
                <th className="normal-case text-lg">Nickname</th>
                <th className="normal-case text-lg">Gender</th>
                <th className="normal-case text-lg">Alamat</th>
                <th className="normal-case text-lg">No. Telp</th>
                <th className="normal-case text-lg">Pendidikan</th>
                <th className="normal-case text-lg">Email</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {guru.length == 0 ? (
                <tr>
                  <th></th>
                  <td colSpan="3"></td>
                  <td colSpan="2">{loading ? ("Loading...") : ("No result found")}</td>
                  <td colSpan="3"></td>
                </tr>
              ) : (
                guru.map((data, i) => {
                  // console.log(data);
                  return (
                    <tr className="border-hidden hover text-black" key={i}>
                      <th></th>
                      <td>{data.namaGuru}</td>
                      <td>{data.namaPanggilan}</td>
                      <td>{data.gender}</td>
                      <td>{data.alamatGuru}</td>
                      <td>{data.notelp}</td>
                      <td>{data.pendidikanTerakhir}</td>
                      <td>{data.emailGuru}</td>
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
