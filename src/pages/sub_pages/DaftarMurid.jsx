import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";

export default function DaftarMurid() {
  const [murid, setMurid] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get("https://nice-teal-peacock-fez.cyclic.app/murid");
    setMurid(data);
    console.log(data);
  };

  return (
    <div className="flex-auto bg-[#fb9e23]">
      <div className="bg-[#ed7336] font-Inter text-[#FAFAFA] p-6 px-12 space-y-2">
        <h1 className="font-bold text-2xl">Cabang A</h1>
        <h2 className="font-extralight text-md">Kota, Provinsi</h2>
      </div>
      <div className="px-12 p-6 space-y-6">
        <div className="flex flex-row items-center space-x-2">
          <input type="search" className="rounded-3xl px-5 p-2" placeholder="Search" />
          <CiSearch className="text-4xl text-[#FAFAFA]" />
        </div>
        <div className="overflow-x-auto bg-[#FAFAFA] rounded-3xl">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="normal-case text-lg">ID</th>
                <th className="normal-case text-lg">Nama</th>
                <th className="normal-case text-lg">Level</th>
                <th className="normal-case text-lg">Terdaftar</th>
                <th className="normal-case text-lg">Kontak</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {murid.map((data) => {
                return (
                  <tr className="border-hidden hover text-black" key={data.id}>
                    <th></th>
                    <td>{data._id}</td>
                    <td>{data.nama}</td>
                    <td>{data.level_sekarang}</td>
                    <td>{data.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
