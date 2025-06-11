"use client";

import React from "react";
import Link from "next/link";

import BaseButton from "@/components/shared/base-button/BaseButton.component";

const HeaderNav = () => {
  return (
    <>
      <div className="bg-primaryOrange-dark flex justify-center sm:justify-between items-center py-1 px-0 sm:px-4 xl:px-40">
        <div className="hidden sm:block">
          <BaseButton
            iconName="MessageSolid"
            sideIcon="left"
            text="ارتباط باما"
            varient="text"
            size="small"
            color="text-white"
          />
        </div>

        <div className="text-white font-Dana-Medium text-sm">
          ارسال در سراسر ایران
        </div>
        <div className="hidden sm:flex w-28  items-center">
          <Link className="w-fit block" href="/" aria-label="instagram link">
            <BaseButton
              iconName="InstagramSolid"
              sideIcon="left"
              color="text-white"
              varient="text"
            />
          </Link>

          <Link className="w-fit block" href="/" aria-label="phone number">
            <BaseButton
              iconName="PhoneOutline"
              sideIcon="left"
              color="text-white"
              varient="text"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
