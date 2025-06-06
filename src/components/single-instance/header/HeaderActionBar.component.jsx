"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTER_MAP } from "@/constant/router.constant";

function HeaderActionBar() {
  const pathName = usePathname();

  return (
    <div className="sm:flex hidden px-4 xl:px-0 w-full justify-center min-h-10 bg-gray-200/50 select-none">
      <ul className="w-full flex justify-center items-center  divide-x divide-gray-500 lg:max-w-1/3">
        {ROUTER_MAP.map((route) => (
          <li
            className={`${
              route.to === pathName && "text-primaryOrange-dark"
            } w-full min-w-20 text-center cursor-pointer text-gray-600
            
            `}
            key={route.to}
            aria-label={route.label}
          >
            <Link href={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderActionBar;
