"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import IconLoader from "../../../../public/Icon/Icon-Loader";
import {
  CATEGORY_FOOTER,
  FAST_ACCESSE_FOOTER,
  POPULAR_BRANDS_FOOTER,
} from "@/constant/VIEW.contant";
import LinkList from "./LinkList.component";

function FooterLayout() {
  return (
    <footer className=" bg-primaryBlack  ">
      <div className="grid grid-cols-1 xl:grid-cols-3 py-5 px-10">
        <div className="w-full flex flex-col sm:flex-row xl:flex-col items-center justify-between gap-8">
          <LinkList title="دسترسی سریع" linkList={FAST_ACCESSE_FOOTER} />

          <LinkList title="دسته بندی محصولات" linkList={CATEGORY_FOOTER} />
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full flex justify-center ">
            <Image
              width={200}
              height={200}
              alt="logo website"
              src="/images/logo-white.webp"
            />
          </div>

          <div className="flex flex-col items-center justify-start gap-5">
            <p className="text-white text-center text-sm max-w-[450px]">
              فروشگاه اینترنتی کاج شاپ به عنوان بزرگترین آنلاین شاپ خرید لوازم
              آرایشی اصل در انواع محصولات مراقبت از پوست، مراقبتی مو و انواع عطر
              ها از برندهای مختلف در کشور شناخته می شود. این فروشگاه با هدف
              دسترسی آسان تر هموطنان به محصولات اصل و اورجینال ایرانی و خارجی
              بدون واسطه و با قیمت مناسب افتتاح شده است.
            </p>

            <span className="flex items-center justify-center gap-5">
              <Link href="/" aria-label="instagram link">
                <IconLoader
                  iconName="InstagramSolid"
                  color="#fa8439"
                  size={30}
                />
              </Link>

              <Link href="/" aria-label="telegram id">
                <IconLoader
                  iconName="TelegramOutline"
                  color="#fa8439"
                  size={30}
                />
              </Link>
            </span>

            <div className="flex flex-col items-center justify-center gap-3">
              <h3 className="font-Dana-Medium text-white font-bold">
                برندهای پرطرفدار
              </h3>

              <div className="flex items-center justify-center flex-wrap gap-3 max-w-[336px]">
                {POPULAR_BRANDS_FOOTER.map((brand) => (
                  <Link
                    aria-label={brand.name}
                    key={brand.name}
                    className="border border-white text-white px-3 py-1 rounded"
                    href={brand.href}
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col sm:flex-row mt-5 sm:mt-0 xl:flex-col items-center justify-between">
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-Dana-Medium text-primaryOrange-light">
              تماس با پشتیبانی :
            </h2>

            <span className="flex flex-col items-center justify-start">
              <Link
                aria-label="phone number"
                className="text-white text-sm cursor-pointer"
                href="/"
              >
                09123456789
              </Link>
              <p className="text-white text-sm cursor-pointer">
                (از 10 الی 14 روز غیرتعطیل)
              </p>
            </span>
          </div>

          <div className="flex flex-col items-center mt-5 xl:mt-0 gap-2">
            <h2 className="font-Dana-Medium text-primaryOrange-light">
              آدرس دفتر مرکزی :
            </h2>

            <p className="text-white text-sm text-center cursor-pointer max-w-[293px]">
              اردبیل، شهرک آزادی، ابتدای خیابان آذربایجان، نبش بلوک یکم، پلاک 5
            </p>
          </div>

          <div className="min-w-[100px] flex items-center justify-center">
            <IconLoader iconName="VerifySolid" color="#fa8439" size={30} />
          </div>
        </div>
      </div>

      <div className="border-t text-center text-white text-sm py-4 border-gray-300">
        <p>
          کلیه حقوق مادی و معنوی این سایت برای{" "}
          <span className="text-primaryOrange-light">smook city</span> محفوظ می
          باشد و هرگونه کپی برداری پیگرد قانونی دارد
        </p>
        <p className="pt-3">
          توسعه و طراحی :{" "}
          <span className="text-primaryOrange-light">milad.mahmoudzadeh</span>
        </p>
      </div>
    </footer>
  );
}

export default FooterLayout;
