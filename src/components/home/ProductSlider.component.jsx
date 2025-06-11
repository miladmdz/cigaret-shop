"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SLIDER_BREAK_POINT } from "@/constant/VIEW.contant";

import IconLoader from "../../../public/Icon/Icon-Loader";
import ProductBox from "@/components/shared/product-box/ProductBox.component";
import HomeSectionTitle from "@/components/home/HomeSectionTitle.component";
import BaseButton from "@/components/shared/base-button/BaseButton.component";

function ProductSlider({ products, sectionTitle }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative flex justify-center items-center border border-primaryOrange-light rounded-2xl h-[360px] sm:h-[380px] mt-20 px-5 select-none">
      <div className="flex flex-row sm:flex-col items-center">
        <span className="w-full absolute -top-24 right-0 left-0 mx-auto">
          <HomeSectionTitle text={sectionTitle} />
        </span>

        <Link
          href={"/"}
          className="w-fit absolute -top-4 left-8 bg-primaryBg px-3 rounded-2xl"
        >
          <BaseButton
            iconName="ArrowLeftSolid"
            sideIcon="left"
            text="مشاهده همه"
            varient="outline"
            color="border-primaryOrange-light"
            textColor="text-black"
            size="small"
          />
        </Link>
      </div>

      <div className="w-full max-w-6xl">
        <div
          ref={prevRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        >
          <div className="bg-white text-black p-2 rounded-full shadow cursor-pointer">
            <IconLoader iconName="ChevronRightSolid" />
          </div>
        </div>

        <div
          ref={nextRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        >
          <div className="bg-white text-black p-2 rounded-full shadow cursor-pointer">
            <IconLoader iconName="ChevronLeftSolid" />
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={SLIDER_BREAK_POINT}
          loop={true}
          className="mySwiper h-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductBox
                title={product.title}
                rate={product.rate}
                price={product.price}
                image={product.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
