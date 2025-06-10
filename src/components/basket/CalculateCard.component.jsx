"use client";

import React, { useMemo } from "react";

import { VALUE_ADDED_TAX } from "@/constant/FINACIAL.constant";

import BaseButton from "@/components/shared/BaseButton/BaseButton.component";
import BaseAccordion from "@/components/shared/BaseAccordion/BaseAccordion.compoent";
import { formatCurrency } from "@/utils/currency.util";

function CalculateCard({
  totalPrice = 0,
  discount = 0,
  deliveryPrice = 0,
  pushRoute = () => {},
  buttonText = "ادامه و تکمیل سفارش",
}) {
  const { resultVAT, payableAmount } = useMemo(() => {
    const price = Number(totalPrice);
    const delivery = isNaN(Number(deliveryPrice)) ? 0 : Number(deliveryPrice);
    const vat = price * (VALUE_ADDED_TAX / 100);
    return {
      resultVAT: vat,
      payableAmount: price + vat + delivery,
    };
  }, [totalPrice, deliveryPrice]);

  const fields = useMemo(
    () => [
      { label: "مبلغ کل", value: formatCurrency(totalPrice) },
      {
        label: "تخفیف",
        value: formatCurrency(discount),
        className: "text-green-700",
      },
      {
        label: "هزینه ارسال",
        value: deliveryPrice
          ? formatCurrency(deliveryPrice)
          : "فعلاً محاسبه نشده",
      },
      { label: "ارزش افزوده", value: formatCurrency(resultVAT) },
    ],
    [totalPrice, discount, deliveryPrice, resultVAT]
  );

  return (
    <div className="w-full bg-white rounded shadow px-5 py-3 text-sm">
      {/* Mobile View */}
      <div className="block md:hidden">
        <BaseAccordion
          title={
            <div className="flex flex-row w-full justify-between">
              <h2 className="text-base font-semibold">مبلغ قابل پرداخت</h2>
              <p>{formatCurrency(payableAmount)}</p>
            </div>
          }
          iconPosition="right"
        >
          <div className="mt-2 divide-y divide-gray-300">
            {fields.map(({ label, value, className }, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3"
              >
                <h3>{label}</h3>
                <p className={className}>{value}</p>
              </div>
            ))}
          </div>
        </BaseAccordion>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between border border-gray-700/60 rounded px-2 py-2 mb-5">
          <h2 className="text-base xl:text-sm font-semibold">
            مبلغ قابل پرداخت
          </h2>
          <p className="text-base xl:text-sm">
            {formatCurrency(payableAmount)}
          </p>
        </div>
        <div className="mt-2 divide-y divide-gray-300">
          {fields.map(({ label, value, className }, index) => (
            <div key={index} className="flex items-center justify-between py-3">
              <h3>{label}</h3>
              <p className={className}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-5">
        <BaseButton
          varient="contained"
          text={buttonText}
          textColor="text-white"
          color="bg-primaryOrange-light"
          updatedAction={() => pushRoute()}
        />
      </div>
    </div>
  );
}

export default CalculateCard;
