"use client";

import React from "react";

import BaseButton from "../shared/BaseButton/BaseButton.component";
import { VALUE_ADDED_TAX } from "@/constant/financial.constant";
import { useRouter } from "next/navigation";

function CalculateCard({ totalPrice, discount = 0 }) {
  const router = useRouter();

  const resultVAT = Number(totalPrice) * (VALUE_ADDED_TAX / 100);
  const payableAmount = Number(totalPrice) + resultVAT;

  return (
    <div className="w-full flex flex-col items-start bg-white px-5 py-3 rounded text-sm">
      <div className="flex w-full items-center justify-between border border-gray-700/60 rounded px-2 py-2 mb-5">
        <h2>مبلغ قابل پرداخت</h2>
        <p>{payableAmount.toLocaleString()} تومان</p>
      </div>

      <div className="w-full flex flex-col items-start divide-y divide-gray-400/50">
        <div className="w-full flex items-center justify-between py-3">
          <h3>مبلغ کل</h3>
          <p>{Number(totalPrice).toLocaleString()} تومان</p>
        </div>

        <div className="w-full flex items-center justify-between py-3">
          <h3>تخفیف</h3>
          <p className="text-green-700">{discount} تومان</p>
        </div>

        <div className="w-full flex items-center justify-between py-3">
          <h3>هزینه ارسال</h3>
          <p>فعلا محاسبه نشده</p>
        </div>

        <div className="w-full flex items-center justify-between py-3">
          <h3>ارزش افزوده</h3>
          <p>{resultVAT.toLocaleString()} تومان</p>
        </div>
      </div>

      <div className="w-full mt-5">
        <BaseButton
          varient="contained"
          text="ادامه و تکمیل سفارش"
          textColor="text-white"
          color="bg-primaryOrange-light"
          updatedAction={() => router.push("/basket/address")}
        />
      </div>
    </div>
  );
}

export default CalculateCard;
