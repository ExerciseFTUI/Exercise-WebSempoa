import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const Barang = () => {
  const [barang, setBarang] = useState([]);
  const [selectedOption, setSelectedOption] = useState("tersedia");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let endpoint = "";

    if (selectedOption === "tersedia") {
      endpoint = "link1";
    } else if (selectedOption === "terjual") {
      endpoint = "link2";
    } else if (selectedOption === "rusak") {
      endpoint = "link3";
    }

    try {
      const { data } = await axios.get(endpoint);
      setBarang(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="flex-auto bg-[#fb9e23]">
      <div className="bg-[#ed7336] font-Inter text-white p-6 px-12 space-y-2">
        <h1 className="font-bold text-2xl">Cabang A</h1>
        <h2 className="font-extralight text-md">Kota, Provinsi</h2>
      </div>
      <div className="px-12 p-6 space-y-6">
        <div className="flex flex-row space-x-16">
          <div className="flex flex-row items-center space-x-2">
            <input type="search" className="rounded-3xl px-5 p-2 focus:outline-none" placeholder="Search" />
            <CiSearch className="text-4xl text-white" />
          </div>
          <div className="flex flex-row space-x-10">
            <div
              className={`bg-white text-xl p-[6px] px-10 my-auto rounded-3xl hover:text-orange-sempoa cursor-pointer border-2 border-white ${selectedOption === "tersedia" ? "bg-orange-sempoa-dark text-white hover:text-white" : ""}`}
              onClick={() => handleClick("tersedia")}>
              Tersedia
            </div>
            <div
              className={`bg-white text-xl p-[6px] px-10 my-auto rounded-3xl hover:text-orange-sempoa cursor-pointer border-2 border-white ${selectedOption === "terjual" ? "bg-orange-sempoa-dark text-white hover:text-white" : ""}`}
              onClick={() => handleClick("terjual")}>
              Terjual
            </div>
            <div
              className={`bg-white text-xl p-[6px] px-10 my-auto rounded-3xl hover:text-orange-sempoa cursor-pointer border-2 border-white ${selectedOption === "rusak" ? "bg-orange-sempoa-dark text-white hover:text-white" : ""}`}
              onClick={() => handleClick("rusak")}>
              Rusak
            </div>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="normal-case text-lg">ID</th>
                <th className="normal-case text-lg">Nama Buku</th>
                <th className="normal-case text-lg">Level</th>
                <th className="normal-case text-lg">Tanggal Keluar</th>
                <th className="normal-case text-lg">Pembeli</th>
                <th className="normal-case text-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {barang.map((data) => {
                return (
                  <tr className="border-hidden hover text-black" key={data.id}>
                    <th></th>
                    <td>{data._id}</td>
                    <td>{data.nama}</td>
                    <td>{data.level_sekarang}</td>
                    <td>{data.email}</td>
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
};

export default Barang;
