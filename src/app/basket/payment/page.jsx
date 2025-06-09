"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { formatCurrency } from "@/utils/currency.util";
import { BUY_RULE_TEXT } from "@/constant/view.contant";

import CalculateCard from "@/components/basket/CalculateCard.component";
import OrderList from "@/components/basket/OrderList.component";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle.component";
import InfoCard from "@/components/payment/InfoCard.component";
import DiscountSection from "@/components/payment/DiscountSection.component";

const Page = () => {
  const router = useRouter();
  const [discountCode, setDiscountCode] = useState("");

  const orderInfo = {
    name: "میلاد محمودزاده",
    address: "خراسان رضوی - مشهد - پیامبراعظم 49 ثنایی 4 پلاک 71",
    deliveryType: "پست ایران (پیشتاز)",
    deliveryPrice: 70_000,
    totalPrice: 527_000,
  };

  const handleDiscountChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handlePayment = () => {
    router.push("/basket/address");
  };

  const submitCode = () => {
    //TODO: add code for submit discount code
  };

  return (
    <div className="flex flex-col xl:flex-row px-4 xl:px-40 py-10 items-start justify-between gap-5">
      <div className="flex w-full flex-col justify-end gap-5">
        <SectionTitle title="اقلام سفارش" />

        <OrderList />

        <SectionTitle title="اطلاعات سفارش" />

        <InfoCard iconName="location-outline">
          این سفارش به <span className="font-bold">{orderInfo.name}</span> به
          آدرس <span className="font-bold">{orderInfo.address}</span> تحویل داده
          میشود.
        </InfoCard>

        <InfoCard iconName="truck-outline">
          این سفارش از طریق{" "}
          <span className="font-bold">{orderInfo.deliveryType}</span> با هزینه{" "}
          <span className="font-bold">
            {formatCurrency(orderInfo.deliveryPrice)}
          </span>{" "}
          ارسال می‌گردد.
        </InfoCard>

        <InfoCard iconName="verify-outline">
          مرسوله شما بیمه شده است. لطفا هنگام تحویل از سلامت آن اطمینان حاصل
          کنید.
        </InfoCard>

        <DiscountSection
          onChange={(e) => setDiscountCode(e.target.value)}
          value={discountCode}
          submitCode={submitCode}
        />
      </div>

      <div className="w-full xl:w-1/3 xl:sticky xl:top-1/5">
        <div className="px-4 mb-5">
          <ul className="text-sm text-primaryBlack list-disc leading-7">
            {BUY_RULE_TEXT.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="w-full hidden md:block">
          <CalculateCard
            totalPrice={orderInfo.totalPrice}
            pushRoute={handlePayment}
            buttonText="پرداخت"
          />
        </div>
      </div>

      <div className="w-full block fixed bottom-0 left-0 right-0 mx-auto bg-white z-10 md:hidden">
        <CalculateCard
          totalPrice={orderInfo.totalPrice}
          pushRoute={handlePayment}
          buttonText="پرداخت"
        />
      </div>
    </div>
  );
};

export default Page;
