import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { BsArrowLeftShort, BsPencilSquare, BsCardHeading, BsChevronDown, BsWallet2 } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BiPackage } from "react-icons/bi";
import { IoShirtOutline } from "react-icons/io5";

import sempoaLogo from "../assets/sempoa-logo.png";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  let { pathname } = useLocation();

  const page = pathname.split("/")[2];

  const Menus = [
    {
      title: "Daftar Civitas",
      src: <MdOutlinePeopleAlt className={`text-2xl`} />,
    },
    { title: "Pendaftaran", src: <BsPencilSquare className={`text-2xl`} /> },
    { title: "Barang", src: <BiPackage className={`text-2xl`} /> },
    { title: "Kupon", src: <BsCardHeading className={`text-2xl`} /> },
    { title: "Merchandise", src: <IoShirtOutline className={`text-2xl`} /> },
    { title: "Pembayaran", src: <BsWallet2 className={`text-2xl`} /> },
  ];

  const navigate = useNavigate();

  function toggleOpen() {
    setOpen(!open);
  }

  /* prettier-ignore */
  return (
    <div
      id="sidebar"
      className={`bg-white flex flex-col items-center justify-between h-screen fixed top-0 py-16 px-2 ${open ? "lg:px-4" : "lg:px-2"} z-10 border-r-2 border-orange-darker ${open ? "left-0" : "-left-60"} ease-in-out duration-300 lg:relative lg:left-0`}
    >
      <BsArrowLeftShort
        className={
            `text-3xl absolute ${open ? "-right-3" : "-right-[29px]"} top-9 ${open ? "bg-orange-sempoa text-white border-white" : "bg-white text-orange-darker border-orange-darker"} ${open ? "rounded-full" : "rounded-r-none rounded-l-full"} border lg:border-white cursor-pointer ${!open && "rotate-180"} z-10 duration-300 lg:rounded-full lg:top-9 lg:bg-orange-sempoa lg:text-white lg:-right-3`
        }
        onClick={toggleOpen}
      />

      <img
        src={sempoaLogo}
        className={`relative w-56 duration-500 ${open ? "translate-x-0 ease-out" : "-translate-x-[200%] ease-in lg:w-0 overflow-hidden"}`}
        alt="Sempoa logo"
      />

      <ul className="space-y-2 mb-16">
        {Menus.map(({ title, src }, i) => {
          // const Icon = eval(src)
          const id = title.toLowerCase().replace(" ", "-")

        //   const link = id == "barang" ? `/dashboard/barang/pemesanan` : `/dashboard/${id}`
          let link = ""

          if (id == "barang")
            link = "/dashboard/barang/pemesanan"
          else if (id == "daftar-civitas")
            link = "/dashboard/daftar-civitas/murid"
          else
            link = `/dashboard/${id}`

          const handleClick = () =>
            navigate(link, { state: { relative: true } })

          return (
            <li
              key={i}
              className={
                "border-orange-darker border-2 rounded-2xl cursor-pointer hover:text-white hover:bg-orange-darker duration-500 h-12 relative flex items-center gap-4 " + 
                (open ? "px-10 " : "px-4 ") +
                (id === page ? "bg-orange-darker text-white" : "text-orange-darker")
              }
              onClick={handleClick}
            >
              {/* <Icon className={`text-2xl`} /> */}
              <span >{src}</span>

              <span className={`text-base whitespace-nowrap ${!open && "hidden"}`}>{title}</span>
            </li>
          )
        })}
      </ul>

      <div className={`border-orange-darker border-2 cursor-pointer duration-500 px-2 h-16 rounded-2xl flex items-center justify-center gap-5`}>
        <div className="bg-orange-darker bg-opacity-90 text-neutral-content rounded-full w-11 h-11" />

        {open && (
          <div className="text-orange-darker">
            <p className="font-bold">Nama User</p>
            <p className="italic font-medium text-xs">Status User</p>
          </div>
        )}
      </div>
    </div>
  )
}
