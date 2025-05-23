"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { ROUTER_MAP } from "@/constant/router.constant";

function HeaderActionBar() {
  const pathName = usePathname();

  return (
    <div className="hidden sm:flex px-4 xl:px-0 w-full justify-center h-10 bg-gray-200/50 select-none">
      <ul className="w-full flex justify-center items-center  divide-x divide-gray-500 lg:max-w-1/3">
        {ROUTER_MAP.map((route) => (
          <Link
            key={route.to}
            className={`w-full min-w-20 text-center cursor-pointer text-gray-600/50
            ${route.to === pathName && "text-primaryOrange-dark"}
            `}
            href={route.to}
          >
            <li>{route.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default HeaderActionBar;
