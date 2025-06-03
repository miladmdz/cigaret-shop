"use client";
import React, { useRef } from "react";

import CalculateCard from "@/components/basket/CalculateCard.component";
import BaseButton from "@/components/shared/BaseButton/BaseButton.component";
import IconLoader from "../../../../public/Icon/Icon-Loader";
import AddressList from "@/components/address/AddressList.component";
import BaseModal from "@/components/shared/BaseModal/BaseModal.component";
import AddressForm from "@/components/address/AddressForm.component";

function page() {
  //TODO MOCKDATA
  const addresses = [
    { id: 1, address: "استان خراسان رضوی، شهر مشهد، پیامبراعظ49" },
    { id: 2, address: "استان خراسان رضوی، شهر مشهد، پیامبراعظ49" },
    { id: 3, address: "استان خراسان رضوی، شهر مشهد، پیامبراعظ49" },
    { id: 4, address: "استان خراسان رضوی، شهر مشهد، پیامبراعظ49" },
    { id: 5, address: "استان خراسان رضوی، شهر مشهد، پیامبراعظ49" },
  ];

  const modalRef = useRef(null);

  const setVisibleModal = (visibility = true) => {
    modalRef.current.setVisibility(visibility);
  };

  return (
    <div className="flex px-4 xl:px-40 py-10 items-start justify-between gap-5">
      <div className="flex flex-col w-full bg-white rounded px-4 py-4 gap-8">
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
        <AddressList addresses={addresses} />
      </div>

      <div className="w-1/3 sticky top-1/3">
        <CalculateCard totalPrice={527_000} />
      </div>

      <BaseModal ref={modalRef} title="فرم افزودن آدرس جدید">
        <AddressForm />
      </BaseModal>
    </div>
  );
}

export default page;
