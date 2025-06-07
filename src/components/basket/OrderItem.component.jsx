import React from "react";
import Image from "next/image";

import { formatCurrency } from "@/utils/currency";

import BaseButton from "@/components/shared/BaseButton/BaseButton.component";
import BaseCounter from "@/components/shared/BaseCounter/BaseCounter.component";

function OrderItem({ image, title, price }) {
  return (
    <div className="w-full flex items-center bg-white rounded min-h-[120px] px-4">
      <div className="flex w-1/2 justify-between items-center  ">
        <div className="relative w-20 h-20">
          <Image src={image} alt="product image" fill />
        </div>

        <h3 className="max-w-[150px] text-black/80 text-sm md:text-base font-bold line-clamp-2">
          {title}
        </h3>

        <div className="w-20">
          <BaseCounter />
        </div>
      </div>

      <div className="flex w-1/2 items-center justify-end gap-2 md:gap-10">
        <div className="font-bold w-fit text-black/80 text-sm md:text-base">
          {formatCurrency(price)}
        </div>

        <div className="w-fit">
          <BaseButton
            text="حذف"
            iconName="trash-outline"
            sideIcon="right"
            varient="text"
            size="small"
            color="text-red-500"
            iconColor="red"
            iconSize={18}
          />
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
