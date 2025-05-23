"use client";

import React, { forwardRef, useImperativeHandle, useState } from "react";

import BaseButton from "../BaseButton/BaseButton.component";

const BaseSideSheet = forwardRef((props, ref) => {
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
          isOpen ? "right-0" : "-right-[1000px]"
        } absolute top-0 z-10  h-screen min-w-[230px] w-1/3 bg-white transition-all`}
      >
        <div className="flex w-full bg-primaryOrange items-center justify-between px-1 py-0.5 border-b border-gray-400">
          <p className="flex h-full">{title}</p>
          <BaseButton
            iconName="close-solid"
            sideIcon="right"
            varient="text"
            updatedAction={() => setVisibility(false)}
          />
        </div>

        <div className="h-full px-2">{children}</div>
      </div>
    </div>
  );
});

export default BaseSideSheet;
