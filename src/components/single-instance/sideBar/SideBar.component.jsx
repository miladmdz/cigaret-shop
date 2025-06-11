"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import IconLoader from "../../../../public/Icon/Icon-Loader";
import BaseButton from "@/components/shared/base-button/BaseButton.component";
import { usePathname } from "next/navigation";

function SideBar() {
  //TODO:mockData

  const name = "میلاد محمودزاده";
  const phoneNumber = "09333521189";

  const sideBarItems = [
    {
      label: "داشبورد",
      value: "dashboard",
      route: "/pannel/user/dashboard",
      iconName: "squars-outline",
      disable: true,
    },
    {
      label: "مقالات",
      value: "articles",
      route: "/pannel/admin/articles",
      iconName: "document-outline",
    },
    {
      label: "علاقه مندی ها",
      value: "favorite",
      route: "/pannel/user/favorite",
      iconName: "heart-outline",
    },
    {
      label: "تاریخچه سفارشات",
      value: "historyOrders",
      route: "/pannel/user/history-orders",
      iconName: "shop-outline",
      disable: true,
    },
    {
      label: "باشگاه مشتریان",
      value: "customerClub",
      route: "/pannel/user/customer-club",
      iconName: "sparkles-outline",
      disable: true,
    },
    {
      label: "تیکت ها",
      value: "tickets",
      route: "/pannel/user/tickets",
      iconName: "ticket-outline",
      disable: true,
    },
  ];

  const [hydrated, setHydrated] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <div className="bg-gray-300/50 min-w-1/4 min-h-[700px] rounded py-2 px-4 select-none">
      <div className="flex items-center gap-5">
        <div className="relative w-10 h-10">
          <Image src="/images/userAvatar.webp" alt="userImage" fill />
        </div>

        <div className="flex flex-col items-center justify-start">
          <h2 className="font-bold text-primaryOrange-light">{name}</h2>
          <p>{phoneNumber}</p>
        </div>
      </div>
      <div>
        <ul className="my-5 divide-y divide-gray-500/50 rounded">
          {sideBarItems.map((item) => {
            const isActive = hydrated && item.route === pathName;
            const classes = `${
              isActive ? "text-primaryOrange-light mr-2" : ""
            } flex items-center py-3 px-2 gap-2 hover:text-primaryOrange-light transition-colors`;

            return (
              <li key={item.value}>
                {item.disable ? (
                  <div
                    className={`flex items-center py-3 px-2 gap-2 cursor-not-allowed opacity-50`}
                  >
                    <IconLoader name={item.iconName} />
                    <p>{item.label}</p>
                  </div>
                ) : (
                  <Link href={item.route} className={classes}>
                    <IconLoader name={item.iconName} />
                    <p>{item.label}</p>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <BaseButton
          varient="contained"
          color="bg-primaryOrange-light"
          text="خروج"
          textColor="text-white"
        />
      </div>
    </div>
  );
}

export default SideBar;
