import React, { useState, useEffect } from "react"
import axios from "axios"
import { CiSearch } from "react-icons/ci"

import URL from "../../../utils/link"

export default function DaftarMurid() {
  const [murid, setMurid] = useState([])

  useEffect(() => {
    getData()
    // axios
    //   .get("https://randomuser.me/api/?results=24")
    //   .then(({ data }) => {
    //     setMurid(data.results)
    //     console.log(data.results)
    //   })
    //   .catch((error) => console.error(error))
  }, [])

  const getData = async () => {
    const { data } = await axios.get(`${URL}murid`)

    setMurid(data)
    // console.log(data)
  }

  return (
    <div className="flex-auto bg-orange-sempoa overflow-x-hidden">
      <div className="bg-orange-darker font-Inter text-white p-6 px-12 space-y-2">
        <h1 className="font-bold text-2xl">Cabang A</h1>
        <h2 className="font-extralight text-md">Kota, Provinsi</h2>
      </div>

      <div className="px-12 p-6 space-y-6">
        <div className="flex flex-row items-center space-x-2">
          <input
            type="search"
            className="rounded-3xl px-5 p-2 focus:outline-none"
            placeholder="Search"
          />
          <CiSearch className="text-4xl text-white" />
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="normal-case text-lg">Nomor</th>
                <th className="normal-case text-lg">Nama</th>
                <th className="normal-case text-lg">Tanggal Lahir</th>
                <th className="normal-case text-lg">Terdaftar</th>
                <th className="normal-case text-lg">Kontak</th>
              </tr>
            </thead>

            <tbody>
              {/* row */}
              {murid.map((data, i) => (
                <tr className="border-hidden hover text-black" key={i}>
                  <th></th>
                  <td>{data.id}</td>
                  <td>{data.nama}</td>
                  <td>{data.level_sekarang}</td>
                  <td>{data.pembayaran[0].tanggal.substring(0, 10)}</td>
                  <td>{data.jenis_kelamin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
