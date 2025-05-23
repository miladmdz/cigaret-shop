"use client";

import React, { forwardRef, useImperativeHandle, useState } from "react";

import BaseButton from "@/components/shared/BaseButton/BaseButton.component";

const BaseMenu = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { title, children } = props;

  const setVisibility = (value = true) => {
    if (value) {
      setIsVisible(true);
      setTimeout(() => setIsOpen(true), 10);
    } else {
      setIsOpen(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  };

  useImperativeHandle(ref, () => ({
    setVisibility,
  }));

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={() => setVisibility(false)}
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-60" : "opacity-0"
        }`}
      />

      <div
        className={`absolute top-0 right-0 z-10 h-screen w-full transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-2 ">
          <BaseButton
            iconName="close-solid"
            iconColor="white"
            sideIcon="right"
            varient="text"
            iconSize={30}
            updatedAction={() => setVisibility(false)}
          />
        </div>

        <div className="p-4 h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
});

export default BaseMenu;
