import React from "react";
import sempoaLogo from "../../assets/sempoa-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Pendaftaran() {
  var maleCheckbox = document.getElementById("male-checkbox");
  var femaleCheckbox = document.getElementById("female-checkbox");

  maleCheckbox.addEventListener("change", function () {
    if (this.checked) {
      femaleCheckbox.checked = false;
    }
  });

  femaleCheckbox.addEventListener("change", function () {
    if (this.checked) {
      maleCheckbox.checked = false;
    }
  });

  return (
    <div className="flex-auto bg-[#ed7336]">
      <div className="flex flex-row font-Inter p-6 space-y-2">
        <div className="w-fit h-fit bg-[#FAFAFA] p-2 px-h-12 text-xl rounded-3xl text-orange-sempoa border-2 border-orange-sempoa">Registration Form</div>
        <img src={sempoaLogo} className="w-48 absolute -top-5 end-5" alt="logo" />
      </div>
      <div className="flex flex-col m-6 p-6 space-y-5 bg-[#FAFAFA] rounded-2xl">
        <div className="flex flex-row text-xl relative h-16">
          <label id="regis_date" className="flex flex-row space-x-8">
            <span className="w-[264px] h-12 p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Registration Date</span>
            <input type="date" name="regis_date" id="regis_date" className="w-[480px] h-12 p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
          <div className="w-[264px] h-12 border-2 border-orange-sempoa rounded-3xl absolute right-0">
            <div class="flex items-center p-2 px-3 space-x-16">
              <label for="male-checkbox" className="cursor-pointer relative text-orange-sempoa">
                <input id="male-checkbox" type="checkbox" value="" className="appearance-none h-5 w-5 border-2 rounded border-orange-sempoa" />
                <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-orange-sempoa absolute left-0 top-0 text-opacity-0 check-1 transition" />
                <span className="ml-2">Male</span>
              </label>
              <label for="female-checkbox" className="cursor-pointer relative text-orange-sempoa">
                <input id="female-checkbox" type="checkbox" value="" className="appearance-none h-5 w-5 border-2 rounded border-orange-sempoa" />
                <FontAwesomeIcon icon={faCheck} className="h-5 w-5 text-orange-sempoa absolute left-0 top-0 text-opacity-0 check-1 transition" />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-8 text-xl relative">
          <label id="name" className="flex flex-col space-y-3">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Name</span>
            <input type="text" name="name" id="name" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
          <label id="nickname" className="flex flex-col space-y-3 absolute right-0" dir="rtl">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Nickname</span>
            <input type="text" name="nickname" id="nickname" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
        </div>
        <div className="flex flex-row space-x-8 text-xl relative">
          <label id="date_of_birth" className="flex flex-col space-y-3">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Date of Birth</span>
            <input type="date" name="date_of_birth" id="date_of_birth" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
          <label id="place_of_birth" className="flex flex-col space-y-3 absolute right-0" dir="rtl">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Place of Birth</span>
            <input type="text" name="place_of_birth" id="place_of_birth" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
        </div>
        <div className="flex flex-row space-x-8 text-xl relative">
          <label id="parent_name" className="flex flex-col space-y-3">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Parent/Guardian Name</span>
            <input type="text" name="parent_name" id="parent_name" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
          <label id="relation" className="flex flex-col space-y-3 absolute right-0" dir="rtl">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Relationship to Student</span>
            <input type="text" name="relation" id="relation" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
        </div>
        <div className="flex flex-row space-x-8 text-xl relative">
          <label id="address" className="flex flex-col space-y-3">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Address</span>
            <input type="text" name="address" id="address" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
          <label id="city" className="flex flex-col space-y-3 absolute right-0" dir="rtl">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">City</span>
            <input type="text" name="city" id="city" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
        </div>
        <div className="flex flex-row space-x-8 text-xl relative">
          <label id="primary_phone" className="flex flex-col space-y-3">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Primary Phone</span>
            <input type="text" name="primary_phone" id="primary_phone" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
          <label id="secondary_phone" className="flex flex-col space-y-3 absolute right-0" dir="rtl">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Secondary Phone</span>
            <input type="text" name="secondary_phone" id="secondary_phone" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
        </div>
        <div className="flex flex-row space-x-8 text-xl relative">
          <label id="person_enrolling_student" className="flex flex-col space-y-3">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Person Enrolling Student</span>
            <input type="text" name="person_enrolling_student" id="person_enrolling_student" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
          <label id="registered_by" className="flex flex-col space-y-3 absolute right-0" dir="rtl">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Registered By</span>
            <input type="text" name="registered_by" id="registered_by" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
        </div>
        <div className="w-full h-12 bg-orange-sempoa rounded-3xl" />
        <div className="flex flex-row space-x-8 text-xl relative">
          <label id="id_number" className="flex flex-col space-y-3">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Student ID Number</span>
            <input type="text" name="id_number" id="id_number" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
          <label id="grade_placement" className="flex flex-col space-y-3 absolute right-0" dir="rtl">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Initial Grade Placement</span>
            <input type="text" name="grade_placement" id="grade_placement" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
        </div>
        <div className="flex flex-row space-x-8 text-xl relative">
          <label id="date_of_entrance" className="flex flex-col space-y-3">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Date of Entrance</span>
            <input type="text" name="date_of_entrance" id="date_of_entrance" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
          <label id="class_schedule" className="flex flex-col space-y-3 absolute right-0" dir="rtl">
            <span className="w-[264px] h-fit p-2 flex items-center justify-center bg-orange-sempoa rounded-3xl border-2 border-orange-sempoa">Class Schedule</span>
            <input type="text" name="class_schedule" id="class_schedule" className="w-[548px] h-fit p-2 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none" />
          </label>
        </div>
      </div>
    </div>
  );
}
