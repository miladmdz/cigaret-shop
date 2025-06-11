"use client";
import React from "react";

import { BUY_RULE_TEXT } from "@/constant/VIEW.contant";

import RulesCard from "@/components/basket/RulesCard.component";
import OrderList from "@/components/basket/OrderList.component";
import BaseButton from "@/components/shared/base-button/BaseButton.component";
import CalculateCard from "@/components/basket/CalculateCard.component";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();

  return (
    <div className="flex flex-col xl:flex-row px-4 xl:px-40 py-10 items-start justify-between gap-5">
      <div className="flex w-full flex-col justify-end gap-5">
        <RulesCard />
        <span className="w-fit">
          <BaseButton
            varient="contained"
            text="پاک کردن سبدخرید"
            iconName="trash-outline"
            sideIcon="right"
            color="bg-red-500"
            iconColor="white"
            textColor="text-white"
          />
        </span>
        <OrderList />
      </div>

      <div className="w-full xl:w-1/3 xl:sticky xl:top-1/5">
        <div className="px-4 mb-5">
          <ul className="text-sm text-primaryBlack decoration-clone list-disc  leading-7">
            {BUY_RULE_TEXT.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="w-full hidden md:block">
          <CalculateCard
            totalPrice={527_000}
            pushRoute={() => router.push("/basket/address")}
          />
        </div>
      </div>

      <div className="w-full block fixed bottom-0 left-0 right-0 mx-auto bg-white z-10 md:hidden">
        <CalculateCard
          totalPrice={527_000}
          pushRoute={() => router.push("/basket/address")}
        />
      </div>
    </div>
  );
}

export default page;
