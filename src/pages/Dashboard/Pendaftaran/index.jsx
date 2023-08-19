import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Pendaftaran() {
  const URL = import.meta.env.VITE_API_URL;
  const currentDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const cabangId = sessionStorage.getItem("cabangId") ? sessionStorage.getItem("cabangId") : "";
  const namaCabang = sessionStorage.getItem("cabangName") ? sessionStorage.getItem("cabangName") : "Cabang Sempoa";

  const handleMaleCheckboxChange = (event) => {
    setMaleChecked(event.target.checked);
    if (event.target.checked) {
      setFemaleChecked(false);
    }
  };

  const handleFemaleCheckboxChange = (event) => {
    setFemaleChecked(event.target.checked);
    if (event.target.checked) {
      setMaleChecked(false);
    }
  };

  let id = Math.floor(Math.random() * 1000);
  const [muridObj, setMuridObj] = useState({
    id: id++,
    kode: id++ * 100,
    registration_date: currentDate,
    nama: "",
    nickname: "",
    jenis_kelamin: "",
    level_sekarang: "Graduate 1",
    pembayaran: [],
    status: "Aktif",
    tanggal_lahir: "",
    tempat_lahir: "",
    parent_name: "",
    relation: "",
    address: "",
    city: "",
    province: "",
    postal_code: "",
    cabang: cabangId,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMuridObj((prevObject) => ({
      ...prevObject,
      [name]: value,
    }));
  };

  useEffect(() => {
    const handleGenderChange = () => {
      const gender = maleChecked ? "Male" : femaleChecked ? "Female" : "";
      setMuridObj((prevObject) => ({
        ...prevObject,
        jenis_kelamin: gender,
      }));
    };
    handleGenderChange();
  }, [maleChecked, femaleChecked]);

  const timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  const createMurid = async () => {
    try {
      const response = await axios.post(`${URL}/murid/create`, muridObj);
      toast.success("Response: Success", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      await timeout(3000);
      navigate("/dashboard/daftar-civitas/murid");
    } catch (error) {
      toast.warn("Error: Please fill out all the fields!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="flex flex-col bg-orange-sempoa overflow-clip h-screen">
      <div className="flex justify-between items-center bg-orange-darker font-Inter text-white p-6 px-12">
        <div className="space-y-2">
          <h1 className="font-bold text-2xl">{namaCabang}</h1>
          <h2 className="font-extralight text-md">Kota, Provinsi</h2>
        </div>
        <span className="text-3xl font-bold">Pendaftaran</span>
      </div>

      <div className="grid grid-cols-7 gap-y-6 m-6 p-6 bg-white rounded-2xl text-lg items-center h-full overflow-auto">
        <span>Registration Date</span>
        <input value={currentDate} type="date" name="regis_date" id="regis_date" className="col-span-2 p-2 px-6 bg-white border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
        <div className="col-span-4 flex items-center justify-end">
          <div className="border-2 border-orange-sempoa rounded-3xl">
            <div className="flex items-center p-2 px-3 space-x-16">
              <label htmlFor="male-checkbox" className="cursor-pointer relative text-orange-sempoa">
                <input id="male-checkbox" type="checkbox" value="" className="appearance-none h-5 w-5 border-2 rounded border-orange-sempoa" checked={maleChecked} onChange={handleMaleCheckboxChange} />
                <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-orange-sempoa absolute left-0 top-0 text-opacity-0 check-1 transition" />
                <span className="ml-2">Male</span>
              </label>
              <label htmlFor="female-checkbox" className="cursor-pointer relative text-orange-sempoa">
                <input id="female-checkbox" type="checkbox" value="" className="appearance-none h-5 w-5 border-2 rounded border-orange-sempoa" checked={femaleChecked} onChange={handleFemaleCheckboxChange} />
                <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-orange-sempoa absolute left-0 top-0 text-opacity-0 check-1 transition" />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 col-span-3 gap-y-6 items-center">
          <span>Name</span>
          <input name="nama" value={muridObj.nama} onChange={handleInputChange} type="text" id="name" className="col-span-2 p-2 px-6 bg-white border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          <span>Date of Birth</span>
          <input name="tanggal_lahir" value={muridObj.tanggal_lahir} onChange={handleInputChange} type="date" id="date_of_birth" className="col-span-2 p-2 px-6 bg-white border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          <span>Parent/Guardian Name</span>
          <input name="parent_name" value={muridObj.parent_name} onChange={handleInputChange} type="text" id="parent_name" className="col-span-2 p-2 px-6 bg-white border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          <span>Address</span>
          <textarea
            name="address"
            value={muridObj.address}
            onChange={handleInputChange}
            id="address"
            className="row-span-5 col-span-2 h-full p-2 px-6 bg-white border-2 border-orange-sempoa rounded-3xl focus:outline-none"
            style={{ resize: "none" }}
          />
        </div>
        <div className="h-full w-[1px] bg-slate-200 justify-self-center"></div>
        <div className="grid grid-cols-3 col-span-3 gap-y-6 items-center">
          <span>Nickname</span>
          <input name="nickname" value={muridObj.nickname} onChange={handleInputChange} type="text" id="nickname" className="col-span-2 p-2 px-6 bg-white border-2 border-orange-sempoa rounded-3xl focus:outline-none" />

          <span>Place of Birth</span>
          <input name="tempat_lahir" value={muridObj.tempat_lahir} onChange={handleInputChange} type="text" id="place_of_birth" className="col-span-2 p-2 px-6 bg-white border-2 border-orange-sempoa rounded-3xl focus:outline-none" />

          <span>Relationship to Student</span>
          <input name="relation" value={muridObj.relation} onChange={handleInputChange} type="text" id="relation" className="col-span-2 p-2 px-6 bg-white border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          <span>City</span>
          <input name="city" value={muridObj.city} onChange={handleInputChange} type="text" id="city" className="col-span-2 p-2 px-6 bg-white border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          <span>Province</span>
          <input name="province" value={muridObj.province} onChange={handleInputChange} type="text" id="province" className="col-span-2 p-2 px-6 bg-white border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
        </div>
        <span>Postal Code</span>
        <input name="postal_code" value={muridObj.postal_code} onChange={handleInputChange} type="number" id="postal_code" className="col-span-2 p-2 px-6 bg-white border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
        <button onClick={createMurid} className="col-span-7 m-6 btn bg-orange-sempoa text-white hover:bg-orange-darker w-32 justify-self-center">
          Submit
        </button>
      </div>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme="dark" />
    </div>
  );
}
