import React from "react";

import RulesCard from "@/components/basket/RulesCard.component";
import OrderList from "@/components/basket/OrderList.component";
import BaseButton from "@/components/shared/BaseButton/BaseButton.component";
import CalculateCard from "@/components/basket/CalculateCard.component";

function page() {
  return (
    <div className="flex px-4 xl:px-40 py-10 items-start justify-between gap-5">
      <div className="flex flex-col justify-end gap-5">
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

      <div className="w-1/3 sticky top-1/3">
        <CalculateCard totalPrice={527_000} />
      </div>
    </div>
  );
}

export default page;
