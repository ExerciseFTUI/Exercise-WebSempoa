import React, { useState, useEffect } from "react"
import axios from "axios"
import { CiSearch } from "react-icons/ci"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"

import { useMutation } from "react-query"
import { updateMuridStatus } from "../../../../utils"

export default function DaftarMurid() {
  const URL = import.meta.env.VITE_API_URL
  const [murid, setMurid] = useState([])
  const [loading, setLoading] = useState(false)

  const cabangId = sessionStorage.getItem("cabangId")
    ? sessionStorage.getItem("cabangId")
    : ""

  const mutation = useMutation({
    mutationFn: (params) => updateMuridStatus(params),
    onSuccess: () => {
      toast.success("Status murid berhasil diupdate", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    },
    onError: (error) => {
      toast.warn("Gagal memperbarui status murid", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    },
  })

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(`${URL}/murid`, {
          params: {
            cabang: `${cabangId}`,
          },
        })
        setMurid(data)
        setLoading(false)
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
    getData()
  }, [cabangId])

  const handleInputChange = async (e) => {
    const { value } = e.target
    try {
      const { data } = await axios.get(`${URL}/murid/filter-by-nama`, {
        params: {
          nama: `${value}`,
          cabang: `${cabangId}`,
        },
      })
      setMurid(data)
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

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      handleInputChange(e)
    }
  }

  return (
    <div className="flex flex-col flex-auto bg-orange-sempoa p-6 h-screen overflow-clip">
      <div className="flex flex-row gap-2 items-center mb-6">
        <input
          type="search"
          className="rounded-3xl px-5 p-2 w-full max-w-xs focus:outline-none"
          placeholder="Search"
          onKeyDown={handleKeyDown}
        />

        <CiSearch className="text-4xl text-white" />
      </div>

      <div className="bg-white w-full h-fit rounded-3xl overflow-auto">
        <table className="w-full table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="normal-case text-lg py-3">ID</th>
              <th className="normal-case text-lg py-3">Kode</th>
              <th className="normal-case text-lg py-3">Nama</th>
              <th className="normal-case text-lg py-3">Jenis Kelamin</th>
              <th className="normal-case text-lg py-3">Level</th>
              <th className="normal-case text-lg py-3 text-center">Status</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {murid.length == 0 ? (
              <tr>
                <th></th>
                <td colSpan="3"></td>
                <td colSpan="2">
                  {loading ? "Loading..." : "No result found"}
                </td>
                <td colSpan="3"></td>
              </tr>
            ) : (
              murid.map((data, i) => {
                return (
                  <tr key={i} className="border-hidden hover text-black">
                    <th></th>
                    <td>{data.id}</td>
                    <td>{data.kode}</td>
                    <td>
                      <Link to="/dashboard/daftar-civitas/guru">
                        {data.nama.toUpperCase()}
                      </Link>
                    </td>
                    <td>{data.jenis_kelamin}</td>
                    <td>{data.level_sekarang}</td>
                    <td>
                      <select
                        className="select select-ghost w-full"
                        defaultValue={data.status}
                        onChange={(e) => {
                          mutation.mutate({
                            id_murid: data.id,
                            status: e.target.value,
                          })
                        }}
                      >
                        <option className="text-black">Keluar</option>
                        <option className="text-black">Cuti</option>
                        <option className="text-black">Lulus</option>
                        <option className="text-black">Aktif</option>
                      </select>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
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
