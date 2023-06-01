import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import URL from "../../utils/link";
import { useNavigate } from "react-router-dom";

export default function DaftarMurid() {
  const [murid, setMurid] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get(`${URL}/murid`);
      setMurid(data);
      console.log(data);
    } catch (error) {
      // navigate("/login");
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="flex-auto bg-[#fb9e23]">
      <div className="bg-[#ed7336] font-Inter text-[#FAFAFA] p-6 px-12 space-y-2">
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
