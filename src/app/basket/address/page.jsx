"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { BUY_RULE_TEXT } from "@/constant/VIEW.contant";

import IconLoader from "../../../../public/Icon/Icon-Loader";
import CalculateCard from "@/components/basket/CalculateCard.component";
import BaseButton from "@/components/shared/base-button/BaseButton.component";
import BaseModal from "@/components/shared/base-modal/BaseModal.component";
import AddressForm from "@/components/address/AddressForm.component";
import DeliveryItem from "@/components/address/DeliveryItem.component";
import AddressItem from "@/components/address/AddressItem.component";

function page() {
  const router = useRouter();

  //TODO MOCKDATA
  const addresses = [
    { id: 1, address: "استان خراسان رضوی، شهر مشهد، پیامبراعظ49" },
    { id: 2, address: "استان خراسان رضوی، شهر مشهد، پیامبراعظ49" },
    { id: 3, address: "استان خراسان رضوی، شهر مشهد، پیامبراعظ49" },
    { id: 4, address: "استان خراسان رضوی، شهر مشهد، پیامبراعظ49" },
    { id: 5, address: "استان خراسان رضوی، شهر مشهد، پیامبراعظ49" },
  ];

  const deliveries = [
    {
      label: "پست عادی",
      value: "standard_post",
      price: 20000,
      description: "تحویل 3 تا 5 روز کاری",
    },
    {
      label: "پست پیشتاز",
      value: "express_post",
      price: 35000,
      description: "تحویل 1 تا 2 روز کاری",
    },
    {
      label: "پست درون شهری",
      value: "local_post",
      price: 0,
      description: "مخصوص ارسال‌های داخل شهر - پرداخت در محل",
    },
  ];

  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const modalRef = useRef(null);

  const setVisibleModal = (visibility = true) => {
    modalRef.current.setVisibility(visibility);
  };

  return (
    <div className="flex flex-col xl:flex-row px-4 xl:px-40 py-10 items-start justify-between gap-5">
      <div className="flex flex-col w-full gap-8">
        <div className="flex items-center gap-4">
          <IconLoader name="location-outline" />

          <h2 className="text-xl font-bold">لیست ادرس ها</h2>
        </div>

        <BaseButton
          text="افزودن ادرس جدید"
          iconName="plus-outline"
          sideIcon="right"
          varient="outline"
          color="border-primaryOrange-light"
          updatedAction={() => setVisibleModal()}
        />

        <div className="w-full flex items-center gap-5 bg-white rounded px-4 py-4 flex-wrap">
          {addresses.map((address) => (
            <AddressItem
              key={address.id}
              address={address}
              isSelected={selectedAddress?.id === address.id}
              setAddress={(newValue) => setSelectedAddress(newValue)}
            />
          ))}
        </div>

        <div
          className={`${
            selectedAddress ? "flex" : "hidden"
          } w-full items-center gap-5 bg-white rounded px-4 py-4 flex-wrap`}
        >
          {deliveries.map((item) => (
            <DeliveryItem
              isSelected={item.value === selectedDelivery?.value}
              typeDelivery={item}
              key={item.value}
              setType={(newValue) => setSelectedDelivery(newValue)}
            />
          ))}
        </div>
      </div>

      <div className="w-full xl:w-1/3 xl:sticky xl:top-1/5">
        <div className="px-4 mb-5">
          <ul className="text-sm text-primaryBlack decoration-clone list-disc  leading-7">
            {BUY_RULE_TEXT.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* desktop view */}

        <div className="w-full hidden md:block">
          <CalculateCard
            totalPrice={527_000}
            deliveryPrice={selectedDelivery?.price}
            pushRoute={() => router.push("/basket/payment")}
          />
        </div>
      </div>

      {/* mobile view */}

      <div className="w-full block fixed bottom-0 left-0 right-0 mx-auto bg-white z-10 md:hidden">
        <CalculateCard
          totalPrice={527_000}
          deliveryPrice={selectedDelivery?.price}
          pushRoute={() => router.push("/basket/payment")}
        />
      </div>

      <BaseModal ref={modalRef} title="فرم افزودن آدرس جدید">
        <AddressForm />
      </BaseModal>
    </div>
  );
}

export default page;
