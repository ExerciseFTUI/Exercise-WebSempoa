import React, { useState } from "react";

import logo from "../../assets/sempoa-logo.png";
import { InputText } from "../../components/Inputs";

const TambahCabang = () => {
  const [namaCabang, setNamaCabang] = useState("");
  const [namaPemilik, setNamaPemilik] = useState("");
  const [kode, setKode] = useState("");
  const [alamat, setAlamat] = useState("");
  const [notelp, setNoTelp] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row bg-orange-sempoa text-center items-center justify-between w-full md:px-28 mb-6 md:m-0 shadow-lg py-2">
        <img alt="Sempoa's Logo" title="Logo Sempoa" src={logo} className="w-72 object-cover" />
        <h1 className="text-white text-3xl">Tambah Cabang</h1>
      </div>
      <div className="grid grid-cols-2 w-full px-32 py-14 gap-10 xl:gap-x-64">
        <InputText value={namaCabang} setValue={setNamaCabang} name="Nama Cabang" required={true} flexDirection="flex-col xl:flex-row gap-2 lg:justify-between" className="w-full lg:w-3/5 rounded-lg" />
        <InputText value={namaPemilik} setValue={setNamaPemilik} name="Nama Pemilik" required={true} flexDirection="flex-col xl:flex-row gap-2 lg:justify-between" className="w-full lg:w-3/5 rounded-lg place-self-end" />
        <InputText value={notelp} setValue={setNoTelp} name="No Telepon" required={true} flexDirection="flex-col xl:flex-row gap-2 lg:justify-between" className="w-full lg:w-3/5 rounded-lg place-self-end" />
        <InputText value={email} setValue={setEmail} name="Email" required={true} flexDirection="flex-col xl:flex-row gap-2 lg:justify-between" className="w-full lg:w-3/5 rounded-lg place-self-end" />
        <InputText value={kode} setValue={setKode} name="Kode" required={true} flexDirection="flex-col xl:flex-row gap-2 lg:justify-between" className="w-full lg:w-3/5 rounded-lg place-self-end" />
        <InputText value={alamat} setValue={setAlamat} name="Alamat" required={true} flexDirection="flex-col xl:flex-row gap-2 lg:justify-between" className="w-full lg:w-3/5 rounded-lg place-self-end" />
        <button type="submit" className="place-self-center col-span-2 bg-orange-sempoa text-white text-lg font-semibold w-fit m-12 py-3 px-12 whitespace-nowrap rounded-full hover:scale-90 ease-in-out duration-200">
          Submit
        </button>
      </div>
    </div>
  );
};

export default TambahCabang;
