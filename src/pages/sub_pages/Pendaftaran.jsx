import React from "react";
import sempoaLogo from "../../assets/sempoa-logo.png";

export default function Pendaftaran() {
  return (
    <div className="flex-auto bg-[#ed7336]">
      <div className="flex flex-row font-Inter p-6 space-y-2">
        <div className="w-fit h-fit bg-[#FAFAFA] p-2 px-12 text-xl rounded-3xl text-[#FB9E23] border-2 border-[#FB9E23]">Registration Form</div>
        <img src={sempoaLogo} className="w-48 absolute -top-5 end-5" alt="logo" />
      </div>
      <div className="m-6 p-6 space-y-6 bg-[#FAFAFA] rounded-2xl">
        <div className="flex flex-row space-x-6">
          <label className="w-fit h-fit bg-[#fb9e23] p-2 px-12 text-xl rounded-3xl border-2 border-[#fb9e23]">Registration Date</label>
          <input type="text" className="w-96 h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-[#fb9e23] text-xl rounded-3xl" name="regis_date" id="regis_date" />
          <div className="flex w-fit h-fit border-2 border-[#fb9e23] rounded-3xl">
            <div class="flex items-center p-2 h-fit text-[#FB9E23]">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" checked className="checkbox" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
