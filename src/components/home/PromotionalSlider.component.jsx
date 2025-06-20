"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import IconLoader from "../../../public/Icon/Icon-Loader";
import useWindowSize from "@/customHook/useWindowSize.hook";

function PromotionalSlider({ images }) {
  const windowSize = useWindowSize();

  const navigationButtonSize = windowSize.width < 640 ? 18 : 25;

  return (
    <div className="relative py-6 px-1 sm:px-5  select-none">
      <div className="custom-next absolute left-6 top-1/2 -translate-y-1/2 bg-white text-black p-1 sm:p-2 rounded-full shadow cursor-pointer z-10">
        <IconLoader iconName="ChevronLeftSolid" size={navigationButtonSize} />
      </div>

      <div className="custom-prev absolute right-6 top-1/2 -translate-y-1/2 bg-white text-black p-1 sm:p-2 rounded-full shadow cursor-pointer z-10">
        <IconLoader iconName="ChevronRightSolid" size={navigationButtonSize} />
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
        slidesPerView={1}
        loop={true}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide>
            <div className="relative w-full min-h-[200px] sm:min-h-[300px] xl:min-h-[400px]">
              <Image
                src={image.src}
                alt={image.desc}
                fill
                sizes="100vw"
                className="rounded-4xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PromotionalSlider;
