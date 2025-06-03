"use client";
import React, { useState } from "react";

import BaseSelect from "@/components/shared/BaseSelect/BaseSelect.component";
import BaseButton from "@/components/shared/BaseButton/BaseButton.component";
import InputField from "@/components/shared/InputField/InputField.component";

function AddressForm() {
  const [inputConfig, setInputConfig] = useState([
    { label: "نام گیرنده", id: "firstName", require: true, value: "" },
    { label: "نام خانوادگی گیرنده", id: "lastName", require: true, value: "" },
    { label: "کد پستی (اختیاری)", id: "postalCode", require: false, value: "" },
    { label: "شماره موبایل", id: "phone", require: true, value: "" },
  ]);

  const sortListTest = [
    { label: "مشهد", value: "mashhad" },
    { label: "تهران", value: "tehran" },
    { label: "قم", value: "qum" },
    { label: "شیراز", value: "shiraz" },
    { label: "اصفهان", value: "isfahan" },
  ];

  const handleChange = (e, index) => {
    const newConfig = [...inputConfig];
    newConfig[index].value = e.target.value;
    setInputConfig(newConfig);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex w-full flex-col items-start gap-2">
          <label htmlFor="name">
            استان <span className="text-red-500">*</span>
          </label>

          <BaseSelect sortList={sortListTest} />

          <span className="text-sm min-h-[20px] text-red-500"></span>
        </div>

        <div className="flex w-full flex-col items-start gap-2">
          <label htmlFor="name">
            شهر <span className="text-red-500">*</span>
          </label>

          <BaseSelect sortList={sortListTest} />

          <span className="text-sm min-h-[20px] text-red-500"></span>
        </div>

        {inputConfig.map((input, index) => (
          <InputField
            key={index}
            label={input.label}
            id={input.id}
            required={input.require}
            value={input.value}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>

      <div className="flex flex-col items-start gap-2">
        <label htmlFor="address">
          ادامه آدرس دقیق پستی <span className="text-red-500">*</span>
        </label>
        <textarea
          id="address"
          className="w-full min-h-44 outline-none border border-gray-300 rounded-2xl resize-none px-3 py-1"
        ></textarea>
      </div>

      <div className="mt-4">
        <BaseButton
          text="ذخیره"
          varient="contained"
          color="bg-primaryOrange-light"
          textColor="text-white"
        />
      </div>
    </div>
  );
}

export default AddressForm;
