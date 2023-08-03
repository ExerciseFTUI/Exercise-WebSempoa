import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Outlet, useLocation } from "react-router-dom"

export default function DaftarMurid() {
  const URL = import.meta.env.VITE_API_URL
  const [murid, setMurid] = useState([])

  const cabangId = sessionStorage.getItem("cabangId")
    ? sessionStorage.getItem("cabangId")
    : ""

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${URL}/murid`, {
          params: {
            cabang: `${cabangId}`,
          },
        })
        setMurid(data)
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
    <div className="flex-auto bg-orange-sempoa overflow-x-hidden">
      <div className="px-12 p-6 space-y-6">
        <div className="flex flex-row items-center space-x-2">
          <input
            type="search"
            className="rounded-3xl px-5 p-2 w-full max-w-xs focus:outline-none"
            placeholder="Search"
            onKeyDown={handleKeyDown}
          />

          <CiSearch className="text-4xl text-white" />
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="normal-case text-lg">ID</th>
                <th className="normal-case text-lg">Kode</th>
                <th className="normal-case text-lg">Nama</th>
                <th className="normal-case text-lg">Jenis Kelamin</th>
                <th className="normal-case text-lg">Level</th>
                <th className="normal-case text-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {murid.length == 0 ? (
                <tr>
                  <th></th>
                  <td colSpan="3"></td>
                  <td colSpan="2">No results found</td>
                  <td colSpan="3"></td>
                </tr>
              ) : (
                murid.map((data, i) => {
                  return (
                    <tr key={i} className="border-hidden hover text-black">
                      <th></th>
                      <td>{data.id}</td>
                      <td>{data.kode}</td>
                      <td><Link to="/dashboard/daftar-civitas/guru">{data.nama.toUpperCase()}</Link></td>
                      <td>{data.jenis_kelamin}</td>
                      <td>{data.level_sekarang}</td>
                      <td>
                        <select className="select select-ghost w-full max-w-xs" defaultValue={data.status} onChange="">
                          <option className="text-black">Keluar</option>
                          <option className="text-black">Cuti</option>
                          <option className="text-black">Lulus</option>
                          <option className="text-black">Aktif</option>
                        </select></td>
                    </tr>
                    
                  );
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
