import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import sempoaLogo from "../../assets/sempoa-logo.png";
import axios from "axios";
import URL from "../../utils/link";
import { UserContext } from "../../components/Contexts/UserContext";

export default function PilihCabang() {
  const URL = import.meta.env.VITE_API_URL;
  //Global State
  const { cabangId, setCabangId } = useContext(UserContext);

  const cabangs = [
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
  ];

  const [cabang, setCabang] = useState([]);

  const navigate = useNavigate();

  const getData = async () => {
    const { data } = await axios.get(`${URL}/cabang/getAllCabang`);

    setCabang(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (id) => {
    setCabangId(id);
    navigate("/dashboard/daftar-murid");
  };

  return (
    <div id="cabang-page" className="h-screen overflow-x-hidden">
      <div className="flex justify-between px-16">
        <img src={sempoaLogo} alt="Sempoa Logo" className="h-52" />

        <div className="flex items-center justify-center gap-4">
          <button className="px-4 py-1 border-2 border-orange-sempoa rounded-lg text-orange-sempoa font-medium hover:text-white hover:bg-orange-sempoa ease-in-out duration-200 cursor-pointer">
            + Tambah Akun
          </button>

          <button className="px-4 py-1 border-2 border-orange-sempoa rounded-lg text-orange-sempoa font-medium hover:text-white hover:bg-orange-sempoa ease-in-out duration-200 cursor-pointer">
            + Tambah Cabang
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-start gap-6 w-screen p-24">
        {cabang.map((c, i) => (
          <div
            key={c._id}
            className="flex-col relative h-60 w-60 rounded-[3rem] bg-white hover:bg-orange-sempoa font-inter text-orange-sempoa hover:text-white border-[3px] border-orange-sempoa cursor-pointer p-8 space-y-1.5"
            onClick={() => handleClick(c._id)}
          >
            <h2 className="text-xl font-bold">{"Kota " + " " + (i + 1)}</h2>
            <h2 className="text-xl font-bold">{c.namaCabang}</h2>
            <p className="text-md absolute bottom-8">{"Status"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
