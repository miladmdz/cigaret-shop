import React from "react";

import { formatCurrency } from "@/utils/currency.util";

function DeliveryItem({ typeDelivery, setType = () => {}, isSelected }) {
  return (
    <div
      className={`${
        isSelected ? "border-primaryOrange-light" : "border-gray-500/50"
      } flex flex-col min-w-[350px] border  rounded px-4 py-2 gap-4 transition-colors`}
    >
      <div
        onClick={() => setType(typeDelivery)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div
          className={`${
            isSelected ? "bg-primaryOrange-light" : "bg-gray-500/50"
          } w-4 h-4 rounded-full transition-colors`}
        />

        <h2 className="font-bold">{typeDelivery.label}</h2>
      </div>

      <p className="text-sm font-bold max-w-3/4 text-primaryBlack">
        {typeDelivery.description}
      </p>

      <h2 className="flex items-center font-bold justify-end gap-5">
        {typeDelivery.price
          ? formatCurrency(typeDelivery.price)
          : "فعلاً محاسبه نشده"}
      </h2>
    </div>
  );
}

export default DeliveryItem;
