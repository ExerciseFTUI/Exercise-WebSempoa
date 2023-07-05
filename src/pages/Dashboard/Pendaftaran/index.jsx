import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import URL from "../../../utils/link";

export default function Pendaftaran() {
  const currentDate = new Date().toISOString().split("T")[0];
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);

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

  return (
    <div className="flex-auto bg-orange-sempoa">
      <div className="flex justify-between items-center bg-orange-darker font-Inter text-white p-6 px-12">
        <div className="space-y-2">
          <h1 className="font-bold text-2xl">Cabang A</h1>
          <h2 className="font-extralight text-md">Kota, Provinsi</h2>
        </div>
        <span className="text-3xl font-bold">Pendaftaran</span>
      </div>
      <div className="grid grid-cols-7 gap-y-6 m-6 p-6 bg-[#FAFAFA] rounded-2xl text-lg items-center">
        <span>Registration Date</span>
        <input
          type="date"
          name="regis_date"
          id="regis_date"
          className="col-span-2 p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none"
        />
        <div className="col-span-4 flex items-center justify-end">
          <div className="border-2 border-orange-sempoa rounded-3xl">
            <div className="flex items-center p-2 px-3 space-x-16">
              <label
                htmlFor="male-checkbox"
                className="cursor-pointer relative text-orange-sempoa"
              >
                <input
                  id="male-checkbox"
                  type="checkbox"
                  value=""
                  className="appearance-none h-5 w-5 border-2 rounded border-orange-sempoa"
                  checked={maleChecked}
                  onChange={handleMaleCheckboxChange}
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-5 w-5 text-orange-sempoa absolute left-0 top-0 text-opacity-0 check-1 transition"
                />
                <span className="ml-2">Male</span>
              </label>
              <label
                htmlFor="female-checkbox"
                className="cursor-pointer relative text-orange-sempoa"
              >
                <input
                  id="female-checkbox"
                  type="checkbox"
                  value=""
                  className="appearance-none h-5 w-5 border-2 rounded border-orange-sempoa"
                  checked={femaleChecked}
                  onChange={handleFemaleCheckboxChange}
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-5 w-5 text-orange-sempoa absolute left-0 top-0 text-opacity-0 check-1 transition"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 col-span-3 gap-y-6 items-center">
          <span>Name</span>
          <input
            type="text"
            name="name"
            id="name"
            className="col-span-2 p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none"
          />
          <span>Date of Birth</span>
          <input
            type="date"
            name="date_of_birth"
            id="date_of_birth"
            className="col-span-2 p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none"
          />
          <span>Parent/Guradian Name</span>
          <input
            type="text"
            name="parent_name"
            id="parent_name"
            className="col-span-2 p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none"
          />
          <span>Address</span>
          <textarea
            name="address"
            id="address"
            className="row-span-5 col-span-2 h-full p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none"
            style={{ resize: "none" }}
          />
        </div>
        <div className="h-full w-[1px] bg-slate-200 justify-self-center"></div>
        <div className="grid grid-cols-3 col-span-3 gap-y-6 items-center">
          <span>Nickname</span>
          <input
            type="text"
            name="nickname"
            id="nickname"
            className="col-span-2 p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none"
          />

          <span>Place of Birth</span>
          <input
            type="text"
            name="place_of_birth"
            id="place_of_birth"
            className="col-span-2 p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none"
          />

          <span>Relationship to Student</span>
          <input
            type="text"
            name="relation"
            id="relation"
            className="col-span-2 p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none"
          />
          <span>City</span>
          <input
            type="text"
            name="city"
            id="city"
            className="col-span-2 p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none"
          />
          <span>Province</span>
          <input
            type="text"
            name="province"
            id="province"
            className="col-span-2 p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none"
          />
        </div>
        <span>Postal Code</span>
        <input
          type="number"
          name="postal_code"
          id="postal_code"
          className="col-span-2 p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none"
        />
        <button className="col-span-7 m-6 btn bg-orange-sempoa text-white hover:bg-orange-darker w-32 justify-self-center">
          Submit
        </button>
      </div>
    </div>
  );
}
