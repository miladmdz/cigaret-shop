"use client";

import React, { forwardRef, useImperativeHandle, useState } from "react";

import BaseButton from "@/components/shared/base-button/BaseButton.component";

const BaseModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const { title, children } = props;

  const setVisibility = (value = true) => setIsOpen(value);

  useImperativeHandle(ref, () => ({
    setVisibility,
  }));

  return (
    <div className={`${isOpen && "fixed inset-0 z-50"}`}>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute inset-0 bg-[#00000099] bg-opacity-50`}
        onClick={() => setVisibility(false)}
      />

      <div
        className={`${
          isOpen ? "right-0 left-0 mx-auto" : "-right-[1000px]"
        } absolute top-1/12 md:top-1/6 z-10 max-h-[500px]  md:max-h-[700px] overflow-y-auto max-w-[350px] md:max-w-[500px] min-w-[300px] md:w-1/3 bg-white px-4 py-4 transition-all rounded`}
      >
        <div className="flex w-full items-center justify-between ">
          <p className="flex h-full font-Dana-Regular text-black">{title}</p>

          <div className="w-10">
            <BaseButton
              iconName="close-solid"
              sideIcon="right"
              varient="text"
              iconColor="black"
              updatedAction={() => setVisibility(false)}
            />
          </div>
        </div>

        <div className="h-full ">{children}</div>
      </div>
    </div>
  );
});

export default BaseModal;
