import React from "react";

import InputField from "@/components/shared/InputField/InputField.component";
import BaseButton from "@/components/shared/BaseButton/BaseButton.component";

function DiscountSection({ value, onChange, submitCode }) {
  return (
    <div className="w-full flex items-center justify-start gap-4 bg-white rounded py-3 px-5">
      <div className="w-1/2">
        <InputField
          label="کد تخفیف"
          id="discountCode"
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="w-fit">
        <BaseButton
          text="ثبت"
          varient="contained"
          color="bg-primaryOrange-light"
          textColor="text-white"
          updatedAction={submitCode}
        />
      </div>
    </div>
  );
}

export default DiscountSection;
