import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import {
  BsArrowLeftShort,
  BsPeople,
  BsPencilSquare,
  BsCardHeading,
  BsChevronDown,
} from "react-icons/bs";
import { BiPackage } from "react-icons/bi";
import { IoShirtOutline } from "react-icons/io5";
import sempoaLogo from "../assets/sempoa-logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../components/UserContext";

export default function Sidebar() {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  let { page } = useParams();
  const [open, setOpen] = useState(true);
  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const Menus = [
    {
      id: "DaftarMurid",
      title: "Daftar Murid",
      src: "BsPeople",
      link: "/DaftarMurid",
    },
    {
      id: "Pendaftaran",
      title: "Pendaftaran",
      src: "BsPencilSquare",
      link: "/Pendaftaran",
    },
    { id: "Barang", title: "Barang", src: "BiPackage", link: "/Barang" },
    { id: "Voucher", title: "Voucher", src: "BsCardHeading", link: "/Voucher" },
    {
      id: "Merchandise",
      title: "Merchandise",
      src: "IoShirtOutline",
      link: "/Merchandise",
    },
  ];
  return (
    <div
      className={`flex flex-col justify-center space-y-6 relative bg-[#FAFAFA] h-screen mt-0 p-5 pt-0 ${
        open
          ? "w-[60%] sm:w-[45%] md:w-[30%] lg:w-[20%]"
          : "w-[25%] sm:w-[20%] md:w-[15%] lg:w-[10%]"
      }  duration-300 sticky top-0`}
    >
      <BsArrowLeftShort
        className={`text-3xl absolute -right-3 top-9 text-white bg-[#FB9E23] rounded-full border border-white cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="h-80 flex justify-center pt-12 items-center">
        <img
          src={sempoaLogo}
          className={`absolute w-[90%] duration-500 ${
            open ? "translate-x-0 ease-out" : "-translate-x-[200%] ease-in"
          }`}
          alt="Sempoa logo"
        />
      </div>
      <div className="pt-14">
        <ul>
          {Menus.map((menu, index) => {
            const Icon = eval(menu.src);
            const handleClick = () => {
              navigate(`/Dashboard${menu.link}`, { state: { relative: true } });
              !open && setOpen(!open);
            };
            return (
              <div className="h-16">
                <li
                  key={index}
                  className={`peer flex flex-auto mx-auto pr-5 items-center justify-between ${
                    open ? "w-[90%]" : "w-16"
                  } duration-500 h-14 rounded-2xl border-solid text-[#ED7336] border-[#ED7336] hover:text-[#FAFAFA] hover:bg-[#ED7336] border-2 cursor-pointer ${
                    menu.id === page && "bg-[#ED7336] text-[#FAFAFA]"
                  }`}
                  onClick={handleClick}
                >
                  <div className="flex items-center">
                    <Icon
                      className={`text-2xl ${open ? "m-2 ml-10" : "m-auto"} `}
                    />
                    <span className={`text-base ${!open && "hidden"}`}>
                      {menu.title}
                    </span>
                  </div>
                  {menu.id === "Barang" && (
                    <BsChevronDown className="text-2xl" />
                  )}
                </li>
                {menu.id === page && (
                  <div className="peer-visible h-8 w-8 bg-[#ED7336] rounded-lg relative -left-11 -top-11" />
                )}
              </div>
            );
          })}
        </ul>
      </div>
      <div className="h-screen pt-11">
        <div
          className={`flex mx-auto items-center ${
            open ? "w-[90%]" : "w-16"
          } duration-500 h-16 rounded-2xl border-solid border-black border-2 cursor-pointer`}
        >
          <div className={`avatar placeholder ${open ? "m-3" : "m-auto"}`}>
            <div className="bg-[#ED7336] text-neutral-content rounded-full w-11" />
          </div>
          {open && (
            <div>
              <p className="font-bold">username</p>
              <p className="text-xs">role</p>
            </div>
          )}
          {/* <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={logout}
          >
            Logout
          </button> */}
        </div>
      </div>
    </div>
  );
}
