"use client";

import React from "react";
import Image from "next/image";

import IconLoader from "../../../../public/Icon/Icon-Loader";
import BaseButton from "@/components/shared/base-button/BaseButton.component";
import Link from "next/link";

function ProductBox({ title, price, rate, image }) {
  return (
    <div className="flex flex-col w-[150px] md:w-[300px] items-center border bg-white border-primaryOrange-dark gap-y-5 p-4 rounded-xl">
      <Link href={`/product/${title}`}>
        <div className="flex flex-col-reverse sm:flex-row w-full items-center gap-x-4">
          <div className="flex mt-2 sm:mt-0 flex-col items-end gap-2">
            <h3 className="max-w-24 min-h-10 md:max-w-32 md:min-h-12 text-sm md:text-base text-center font-Dana-Medium text-gray-600 line-clamp-2 text-wrap">
              {title}
            </h3>

            <div className="flex items-center justify-center">
              {Array.from({ length: 5 - rate }).map((_, i) => (
                <IconLoader
                  iconName="StarSolid"
                  key={i}
                  color="#9ca3af"
                  size={15}
                />
              ))}

              {Array.from({ length: rate }).map((_, i) => (
                <IconLoader
                  iconName="StarSolid"
                  key={i}
                  color="#fa8439"
                  size={15}
                />
              ))}
            </div>
          </div>

          <div className="relative w-[130px] sm:w-[180px] h-[80px] md:w-[150px] md:h-[150px]">
            <Image
              src={image}
              className="rounded"
              alt="product avatar"
              fill
              sizes="(max-width: 640px) 130px, (max-width: 768px) 180px, 150px"
            />
          </div>
        </div>
      </Link>

      <p className="max-w-56 text-center font-Dana-Medium text-base md:text-xl text-wrap text-gray-600">
        {Number(price).toLocaleString("fa-IR")} تومان
      </p>

      <Link href={`/product/${title}`} aria-label="add product to basket">
        <BaseButton
          sideIcon="left"
          text="افزودن به سبد خرید"
          varient="contained"
          textColor="text-white"
          color="bg-primaryOrange-light"
        />
      </Link>
    </div>
  );
}

export default ProductBox;
