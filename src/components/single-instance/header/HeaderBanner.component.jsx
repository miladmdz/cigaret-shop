"use client";

import React, { useRef } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import useWindowSize from "@/customHook/useWindowSize.hook";
import { ROUTER_MAP } from "@/constant/ROUTER.constant";

import BaseButton from "@/components/shared/base-button/BaseButton.component";
import AnimatedMenu from "@/components/single-instance/header/AnimatedMenu.component";
import BaseMenu from "@/components/shared/base-menu/BaseMenu.component";

function HeaderBanner() {
  const windowSize = useWindowSize();

  const router = useRouter();

  const buttonsConfig = [
    {
      iconName: "shop-solid",
      iconSize: windowSize.width < 640 ? 20 : 25,
      sideIcon: "left",
      varient: "text",
      color: "text-gray-500",
      size: windowSize.width < 640 ? "small" : "medium",
      handler: () => router.push("/basket"),
    },
    {
      iconName: "heart-solid",
      iconSize: windowSize.width < 640 ? 20 : 25,
      sideIcon: "left",
      varient: "text",
      color: "hidden lg:block text-gray-500",
      size: windowSize.width < 640 ? "small" : "medium",
      handler: () => router.push("/pannel/user/favorite"),
    },
    {
      iconName: "user-outline",
      iconSize: windowSize.width < 640 ? 20 : 25,
      sideIcon: "left",
      varient: "text",
      color: "text-gray-500",
      size: windowSize.width < 640 ? "small" : "medium",
      handler: () => router.push("/auth/login"),
    },
  ];

  const MenuRef = useRef(null);

  const openSideSheet = () => {
    MenuRef.current?.setVisibility(true);
  };

  return (
    <div className="relative">
      <div className="banner-background" />

      <div className="flex px-0 sm:px-4 xl:px-40 items-center justify-between absolute top-0 right-0 left-0 my-0 mx-auto w-full h-[160px]">
        <div className="divide-x flex items-center divide-gray-500 w-fit sm:min-w-[100px] lg:min-w-1/3">
          {buttonsConfig.map((button) => (
            <div className="w-fit" key={button.iconName}>
              <BaseButton
                iconName={button.iconName}
                iconSize={button.iconSize}
                size={button.size}
                sideIcon={button.sideIcon}
                varient={button.varient}
                color={button.color}
                updatedAction={button.handler}
              />
            </div>
          ))}
        </div>

        <div className="relative min-w-24 min-h-24 sm:min-w-28 sm:min-h-28 lg:min-w-52 lg:h-52">
          <Image
            src="/images/logo.webp"
            alt="logo image"
            fill
            sizes="(max-width: 1024px) 7rem, 13rem"
          />
        </div>

        <div className="hidden lg:flex text-white min-w-[214px] lg:min-w-1/3  justify-end">
          <div className="w-fit">
            <BaseButton
              iconName="message-solid"
              sideIcon="right"
              size="small"
              text="پیوستن به باشگاه اسموک سیتی"
              varient="contained"
              iconColor="white"
              textColor="white"
              color="bg-primaryOrange-dark"
            />
          </div>
        </div>

        <div className="block w-fit sm:w-[100px] lg:hidden">
          <BaseButton
            size="small"
            text="منو"
            iconName="menu-outline"
            iconSize={windowSize.width < 640 ? 20 : 25}
            sideIcon="left"
            varient="text"
            color="text-gray-500"
            updatedAction={openSideSheet}
          />
        </div>
      </div>

      <BaseMenu ref={MenuRef} title="منو">
        <AnimatedMenu routeMap={ROUTER_MAP} />
      </BaseMenu>
    </div>
  );
}

export default HeaderBanner;
