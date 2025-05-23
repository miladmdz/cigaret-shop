"use client";

import React from "react";
import BaseButton from "@/components/shared/BaseButton/BaseButton.component";

const HeaderNav = () => {
  return (
    <>
      <div className="bg-primaryOrange-dark flex justify-center sm:justify-between items-center py-1 px-0 sm:px-4 xl:px-40">
        <div className="hidden sm:block">
          <BaseButton
            iconName="message-solid"
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
        <div className="hidden sm:block">
          <BaseButton
            iconName="instagram-solid"
            sideIcon="left"
            color="text-white"
            varient="text"
          />
          <BaseButton
            iconName="phone-outline"
            sideIcon="left"
            color="text-white"
            varient="text"
          />
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
