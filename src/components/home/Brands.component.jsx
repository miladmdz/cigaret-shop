"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SLIDER_BREAK_POINT } from "@/constant/VIEW.contant";

import IconLoader from "../../../public/Icon/Icon-Loader";

export default function BrandSlider() {
  //TODO: mock data
  const brandsMockData = [
    {
      name: "dakota cigaret",
      src: "/images/dakota.webp",
    },
    {
      name: "winston cigaret",
      src: "/images/Winston.webp",
    },
    {
      name: "milano cigaret",
      src: "/images/milano.webp",
    },
    {
      name: "senator cigaret",
      src: "/images/Senator.webp",
    },
    {
      name: "Marlboro cigaret",
      src: "/images/Marlboro.webp",
    },
  ];

  return (
    <div className="px-4 xl:px-40 pb-20">
      <div className="flex items-center my-8">
        <div className="flex-grow h-0.5 bg-gradient-to-r from-primaryOrange-light  rounded-full" />
        <h2 className="mx-4 font-Dana-Medium text-2xl whitespace-nowrap">
          برند های موجود
        </h2>
        <div className="flex-grow h-0.5 bg-gradient-to-l from-primaryOrange-light  rounded-full" />
      </div>

      <div className="relative py-5 px-5  select-none">
        <div className="custom-next absolute left-6 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow cursor-pointer z-10">
          <IconLoader name="chevronleft-solid" />
        </div>

        <div className="custom-prev absolute right-6 top-1/2 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow cursor-pointer z-10">
          <IconLoader name="chevronright-solid" />
        </div>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={SLIDER_BREAK_POINT}
          loop={true}
          className="mySwiper"
        >
          {brandsMockData.map((image) => (
            <SwiperSlide>
              <div className="relative w-[120px] sm:w-[200px] lg:w-[300px] h-[80px]">
                <Image
                  src={image.src}
                  alt={image.name}
                  className="rounded-4xl"
                  fill
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 200px, 120px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
