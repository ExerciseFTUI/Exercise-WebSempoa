import React, { useState } from "react";

import { InputText } from "../../../../components/Inputs/";

const TambahKupon = ({ isVisible, onClose }) => {
  const cabangId = sessionStorage.getItem("cabangId") ? sessionStorage.getItem("cabangId") : "";
  const [bundle, setBundle] = useState("");
  const [kuponId, setKuponId] = useState("");
  const handleButtonClick = () => {};
  if (!isVisible) return null;

  function handleSubmit(e) {}
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="md:w-1/3 flex flex-col">
        <div className="flex flex-col bg-white rounded-3xl items-center p-8 space-y-4">
          <h1 className="font-Montserrat text-3xl font-bold">Tambah Kupon</h1>
          <span className="w-full text-xl text-white font-semibold p-4 bg-orange-400 rounded-full">ID Cabang : {cabangId}</span>
          <div className="w-full md:w-4/5 flex flex-col gap-5">
            <InputText value={bundle} setValue={setBundle} name="Bundle" required={true} flexDirection="flex-col xl:flex-row gap-2 lg:justify-between" className="w-full" />
            <InputText value={kuponId} setValue={setKuponId} name="ID Kupon" required={true} flexDirection="flex-col xl:flex-row gap-2 lg:justify-between" className="w-full" />
          </div>
          <div className="flex flex-row justify-center items-center gap-8 pt-4">
            <button className="bg-red-500 text-white text-xl self-end py-2 px-7 w-fit whitespace-nowrap rounded-full hover:scale-90 ease-in-out duration-200" onClick={() => onClose()}>
              Batal
            </button>
            <button className="bg-green-500 text-white text-xl self-end py-2 px-4 w-fit whitespace-nowrap rounded-full hover:scale-90 ease-in-out duration-200" onClick={handleButtonClick}>
              Tambah
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahKupon;
