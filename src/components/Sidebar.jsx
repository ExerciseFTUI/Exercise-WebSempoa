import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

import {
  BsArrowLeftShort,
  BsPeople,
  BsPencilSquare,
  BsCardHeading,
  BsChevronDown,
  BsWallet2,
} from "react-icons/bs"
import { BiPackage } from "react-icons/bi"
import { IoShirtOutline } from "react-icons/io5"

import sempoaLogo from "../assets/sempoa-logo.png"

export default function Sidebar() {
  const [open, setOpen] = useState(true)

  let { pathname } = useLocation()

  const page = pathname.split("/")[2]

  const Menus = [
    { title: "Daftar Civitas", src: "BsPeople" },
    { title: "Pendaftaran", src: "BsPencilSquare" },
    { title: "Barang", src: "BiPackage" },
    { title: "Voucher", src: "BsCardHeading" },
    { title: "Merchandise", src: "IoShirtOutline" },
    { title: "Pembayaran", src: "BsWallet2" },
  ]

  const navigate = useNavigate()

  /* prettier-ignore */
  return (
    <div
      id="sidebar"
      className={`bg-white duration-300 flex flex-col items-center justify-between sticky top-0 h-screen py-5 ${open ? "w-[60%] sm:w-[45%] md:w-[30%] lg:w-[20%]" : "w-[25%] sm:w-[20%] md:w-[15%] lg:w-[10%]"} `}
    >
      <BsArrowLeftShort
        className={`text-3xl absolute -right-3 top-9 text-white bg-orange-sempoa rounded-full border border-white cursor-pointer ${!open && "rotate-180"} z-10 duration-300`}
        onClick={() => setOpen(!open)}
      />

      <img
        src={sempoaLogo}
        className={`relative w-80 duration-500 ${open ? "translate-x-0 ease-out" : "-translate-x-[200%] ease-in"}`}
        alt="Sempoa logo"
      />

      <ul className="space-y-2 mb-16">
        {Menus.map(({ title, src }, i) => {
          const Icon = eval(src)
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
              className={`border-orange-darker border-2 rounded-2xl cursor-pointer hover:text-white hover:bg-orange-darker duration-500 ${
                id === page
                  ? "bg-orange-darker text-white"
                  : "text-orange-darker"
              } ${
                open ? "w-60" : "w-12"
              } h-12 relative flex items-center gap-2`}
              onClick={handleClick}
            >
              <Icon className={`text-2xl ${open ? "m-2 ml-10" : "m-auto"} `} />

              <span className={`text-base ${!open && "hidden"}`}>{title}</span>

              {/* {id === "barang" && open && <BsChevronDown className="text-xl ml-8" />} */}

              {/* {id === page && (
                <div className="h-8 w-8 bg-orange-darker rounded-lg absolute top-1 -left-11" />
              )} */}
            </li>
          )
        })}
      </ul>

      <div className={`border-black border-2 cursor-pointer duration-500 px-5 h-16 rounded-2xl flex items-center justify-center gap-5`}>
        <div className="bg-orange-darker bg-opacity-90 text-neutral-content rounded-full w-11 h-11" />

        {open && (
          <div>
            <p className="font-bold">Nama User</p>
            <p className="text-xs">Status User</p>
          </div>
        )}
      </div>
    </div>
  )
}
