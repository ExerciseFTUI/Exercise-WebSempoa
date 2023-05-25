import React from "react"

import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { Navigation, Pagination, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import prevButton from "../assets/Subtract.png"
import sempoaLogo from "../assets/sempoa-logo.png"

export default function PilihCabang() {
  const cabang = [
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
    {
      kota: "Kota",
      nama: "Nama Cabang",
      status: "Status Cabang",
    },
  ]

  // prettier-ignore
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 4,
    el: ".cabang-container-pagination",
    renderBullet: (i, className) => `<div class="${className}">${i + 1}</div>`,
  }

  return (
    <div id="cabang-page" className="h-screen flex flex-col items-center">
      <img src={sempoaLogo} alt="Sempoa Logo" className="h-52 mb-16" />

      <Swiper
        className="w-[66rem]"
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        slidesPerGroup={4}
        navigation={{
          prevEl: ".cabang-prev",
          nextEl: ".cabang-next",
        }}
        pagination={pagination}
      >
        {cabang.map((c, i) => (
          <SwiperSlide key={i}>
            <div className="flex-col relative h-60 w-60 rounded-[3rem] bg-[#FAFAFA] hover:bg-orange-sempoa font-inter text-orange-sempoa hover:text-[#FAFAFA] border-[3px] border-orange-sempoa cursor-pointer p-8 space-y-1.5">
              <h2 className="text-xl font-bold">{c.kota + " " + (i + 1)}</h2>
              <h2 className="text-xl font-bold">{c.nama}</h2>
              <p className="text-md absolute bottom-8">{c.status}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center justify-between w-60 h-16 text-orange-sempoa text-lg">
        <div className="cabang-prev select-none">prev</div>

        <div className="cabang-container-pagination" />

        <div className="cabang-next select-none">next</div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="bg-orange-sempoa h-0.5 w-72" />

        <div className="flex gap-4">
          <button className="px-4 py-1 border-2 border-orange-sempoa rounded-lg text-orange-sempoa font-medium hover:text-white hover:bg-orange-sempoa ease-in-out duration-200 cursor-pointer">
            + Tambah Akun
          </button>
          <button className="px-4 py-1 border-2 border-orange-sempoa rounded-lg text-orange-sempoa font-medium hover:text-white hover:bg-orange-sempoa ease-in-out duration-200 cursor-pointer">
            + Tambah Cabang
          </button>
        </div>
      </div>
    </div>
  )
}
