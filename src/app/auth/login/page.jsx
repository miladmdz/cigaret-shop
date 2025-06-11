"use client";
import BaseButton from "@/components/shared/base-button/BaseButton.component";
import React, { useState } from "react";
import IconLoader from "../../../../public/Icon/Icon-Loader";
import Image from "next/image";
import { PHONE_REGEX } from "@/constant/REGEX.constant";
import { useRouter } from "next/navigation";

function page() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationText, setValidationText] = useState(
    "شماره تلفن نمی‌تواند خالی باشد"
  );

  const router = useRouter();

  const handlePhoneNumber = (newValue) => {
    setPhoneNumber(newValue);

    if (newValue === "") {
      setValidationText("شماره تلفن نمی‌تواند خالی باشد");
      return;
    }

    if (!PHONE_REGEX.test(newValue)) {
      setValidationText("فرمت شماره تلفن وارد شده صحیح نمی‌باشد");
    } else {
      setValidationText("");
    }
  };

  const submitForm = () => {
    if (validationText) {
      return;
    }

    router.push("/auth/sendcode");
  };

  return (
    <div className="max-w-[500px] flex flex-col gap-8 bg-white px-10 mx-auto py-10 sm:my-20 rounded">
      <div className="w-full flex items-start justify-between">
        <div className="relative w-8 sm:w-10 h-[45px] sm:h-[60px]">
          <Image src="/images/home.png" alt="home logo" fill />
        </div>

        <h2 className="h-10 sm:h-16 flex items-center text-3xl font-bold text-primaryOrange-light">
          ورود
        </h2>

        <div className="h-12 sm:h-16 flex items-center">
          <IconLoader name="login-solid" size={32} />
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-2">
        <label htmlFor="name">
          شماره همراه <span className="text-red-500">*</span>
        </label>

        <input
          type="tel"
          id="name"
          className="outline-none w-full border border-gray-300 rounded py-2 px-3"
          value={phoneNumber}
          onChange={(e) => handlePhoneNumber(e.target.value)}
        />
        <span className="text-sm min-h-[20px] text-red-500">
          {validationText}
        </span>
      </div>

      <BaseButton
        varient="contained"
        text="ارسال"
        color="bg-primaryOrange-light"
        textColor="text-white"
        isDisable={!!validationText}
        updatedAction={submitForm}
      />
    </div>
  );
}

export default page;
