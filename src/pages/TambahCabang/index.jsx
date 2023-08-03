import React, { useState } from "react";

import logo from "../../assets/sempoa-logo.png";
import { InputText } from "../../components/Inputs";

import { useMutation, useQueryClient } from "react-query"
import { createNewCabang } from "../../utils";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const TambahCabang = () => {
  const navigate = useNavigate()

  const [namaCabang, setNamaCabang] = useState("");
  const [namaPemilik, setNamaPemilik] = useState("");
  const [kode, setKode] = useState("");
  const [alamat, setAlamat] = useState("");
  const [notelp, setNoTelp] = useState("");
  const [email, setEmail] = useState("");

  const mutation = useMutation({
    mutationFn: () =>
      createNewCabang({
        namaCabang: namaCabang,
        namaPemilik: namaPemilik,
        kode: kode,
        alamat: alamat,
        notelp: notelp,
        email: email,
      }),
    onSuccess: () => {
      toast.success("Cabang baru berhasil dibuat", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setTimeout(() => {navigate("/cabang")}, 3000)
    },
    onError: (error) => {
      toast.warn("Gagal untuk membuat cabang baru", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setTimeout(() => {}, 3000)
    },
  })

  const handleClick = (e) => {
    mutation.mutate()
  }

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
        <button onClick={handleClick} type="submit" className="place-self-center col-span-2 bg-orange-sempoa text-white text-lg font-semibold w-fit m-12 py-3 px-12 whitespace-nowrap rounded-full hover:scale-90 ease-in-out duration-200">
          Submit
        </button>
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
  );
};

export default TambahCabang;
