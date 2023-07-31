import React, { useState, Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import TambahKupon from "./TambahKupon";
import { getKupon } from "../../../utils";
import { useQuery } from "react-query";

const Kupon = () => {
  const namaCabang = sessionStorage.getItem("cabangName")
    ? sessionStorage.getItem("cabangName")
    : "Cabang Sempoa";
  const [showTambahKupon, setShowTambahKupon] = useState(false);
  const cabangId = sessionStorage.getItem("cabangId")
    ? sessionStorage.getItem("cabangId")
    : "";

  const kuponQuery = useQuery({
    queryKey: ["getKupon", cabangId],
    queryFn: () => getKupon(cabangId),
  });

  const handleClickAdd = () => {
    setShowTambahKupon((prevState) => !prevState);
  };

  if (kuponQuery.isSuccess) {
    console.log(kuponQuery.data); //Data seluruh kupon
  }

  //:TODO Display all kupon in the table

  return (
    <Fragment>
      <div className="flex-auto bg-orange-sempoa overflow-x-hidden">
        <div className="flex justify-between items-center bg-orange-darker font-Inter text-white p-6 px-12">
          <div className="space-y-2">
            <h1 className="font-bold text-2xl">{namaCabang}</h1>
            <h2 className="font-extralight text-md">Kota, Provinsi</h2>
          </div>

          <div
            className="font-semibold text-white border-2 border-white rounded-md w-fit h-fit px-2 py-1 hover:bg-white hover:text-orange-sempoa ease-in-out duration-200 tracking-wider cursor-pointer"
            onClick={() => handleClickAdd()}
          >
            Tambah Kupon
          </div>
        </div>
        <Outlet />
      </div>
      <TambahKupon
        isVisible={showTambahKupon}
        onClose={() => setShowTambahKupon(false)}
      />
    </Fragment>
  );
};

export default Kupon;
