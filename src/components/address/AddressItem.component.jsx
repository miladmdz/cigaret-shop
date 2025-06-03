import React from "react";

import BaseButton from "../shared/BaseButton/BaseButton.component";

function AddressItem({ address, setAddress = () => {}, isSelected }) {
  return (
    <div
      className={`${
        isSelected ? "border-primaryOrange-light" : "border-gray-500/50"
      } flex flex-col border  rounded px-4 py-2 gap-4 transition-colors`}
    >
      <div
        onClick={() => setAddress(address)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div
          className={`${
            isSelected ? "bg-primaryOrange-light" : "bg-gray-500/50"
          } w-4 h-4 rounded-full transition-colors`}
        />

        <h2>{address.address}</h2>
      </div>

      <div className="flex items-center justify-end gap-5">
        <div className="w-fit">
          <BaseButton
            iconName="edit-outline"
            varient="contained"
            text="ویرایش"
            sideIcon="right"
            color="bg-primaryOrange-light"
            textColor="text-white"
            iconColor="white"
            size="small"
          />
        </div>

        <div className="w-fit">
          <BaseButton
            iconName="trash-outline"
            varient="contained"
            text="حذف"
            sideIcon="right"
            color="bg-primaryOrange-dark"
            textColor="text-white"
            iconColor="white"
            size="small"
          />
        </div>
      </div>
    </div>
  );
}

export default AddressItem;
