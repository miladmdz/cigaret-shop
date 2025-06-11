"use client";

import React, { useState, useRef, useEffect } from "react";

import BaseButton from "@/components/shared/base-button/BaseButton.component";

const BaseAccordion = ({
  title,
  children,
  defaultOpen = false,
  iconPosition = "right",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="rounded-md bg-white">
      <div className="w-full flex items-center justify-between gap-2">
        {iconPosition === "right" && (
          <div className="w-fit flex items-center justify-center">
            <BaseButton
              iconName={isOpen ? "chevrondown-solid" : "chevronup-solid"}
              sideIcon="left"
              size="20"
              varient="text"
              updatedAction={() => setIsOpen(!isOpen)}
            />
          </div>
        )}

        {title}

        {iconPosition === "left" && (
          <div className="w-fit">
            <BaseButton
              iconName={isOpen ? "chevrondown-solid" : "chevronup-solid"}
              sideIcon="left"
              size="20"
              varient="text"
              updatedAction={() => setIsOpen(!isOpen)}
            />
          </div>
        )}
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          transition: "max-height 0.4s ease",
          overflow: "hidden",
        }}
        className="px-4 pb-4"
      >
        {children}
      </div>
    </div>
  );
};

export default BaseAccordion;
