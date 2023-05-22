import React, { Component, useState } from "react";
import prevButton from "../assets/Subtract.png";
import sempoaLogo from "../assets/sempoa-logo.png";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const renderCustomPagination = (swiper, current, total) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(total / swiper.params.slidesPerView); i++) {
    pages.push(i);
  }

  return (
    <div className="btn-group">
      {pages.map((page) => (
        <button key={page} className={`btn ${page === current ? "btn-active" : ""}`} onClick={() => swiper.slideTo((page - 1) * swiper.params.slidesPerView)}>
          {page}
        </button>
      ))}
    </div>
  );
};
export default function PilihCabang() {
  return (
    <div className="h-screen flex flex-col items-center justify-center m-auto">
      <div>
        <img src={sempoaLogo} className="h-52" alt="Sempoa Logo" />
      </div>
      <div className="max-w-7xl flex items-center justify-center space-x-10">
        <div className="h-60 w-12 rounded-xl bg-orange-sempoa flex items-center prev-button">
          <img src={prevButton} className="mx-auto h-52" />
        </div>
        <Swiper
          className="w-[66rem]"
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          slidesPerGroup={4}
          navigation={{
            prevEl: ".prev-button",
            nextEl: ".next-button",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return `<span class="${className} inline-block h-12 w-12 rounded-lg hover:bg-[#FAFAFA] bg-orange-sempoa font-inter hover:text-orange-sempoa text-[#FAFAFA] text-lg border-[2px] pt-2 border-orange-sempoa ">${index + 1}</span>`;
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((i, el) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex-col relative h-60 w-60 rounded-[3rem] bg-[#FAFAFA] hover:bg-orange-sempoa font-inter text-orange-sempoa hover:text-[#FAFAFA] border-[3px] border-orange-sempoa cursor-pointer p-8 space-y-1.5">
                  <h2 className="text-xl font-bold">Kota {el}</h2>
                  <h2 className="text-xl font-bold">Nama Cabang</h2>
                  <p className="text-md absolute bottom-8">Status Cabang</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="h-60 w-12 rounded-xl bg-orange-sempoa flex items-center next-button">
          <img src={prevButton} className="mx-auto h-52 rotate-180" draggable="false" />
        </div>
      </div>
      <div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
