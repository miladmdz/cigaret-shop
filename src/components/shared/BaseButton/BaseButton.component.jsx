"use client";
import React, { useMemo } from "react";

import { toNormalizedColorStyles } from "@/helper/string.helper";

import IconLoader from "../../../../public/Icon/Icon-Loader";

const BaseButton = ({
  sideIcon,
  varient = "outline",
  size = "medium",
  text,
  iconName,
  iconSize = 20,
  iconColor,
  iconClass,
  color,
  badge,
  textColor = "text-inherit",
  isDisable,
  isLoading,
  data,
  updatedAction,
}) => {
  const buttonType = useMemo(() => {
    const normalizedTextColor = toNormalizedColorStyles({
      stylePart: "text",
      color,
    });
    const normalizedBorderColor = toNormalizedColorStyles({
      stylePart: "border",
      color,
    });
    const normalizedBgColor = toNormalizedColorStyles({
      stylePart: "bg",
      color,
    });

    if (varient === "text") {
      return isDisable
        ? `text-gray-500`
        : `${normalizedTextColor} hover:brightness-60 transition-all`;
    } else if (varient === "outline") {
      return isDisable
        ? "border border-gray-500 rounded-md text-gray-500"
        : `border rounded-md ${normalizedBorderColor} ${normalizedTextColor} hover:brightness-60 transition-all`;
    } else if (varient === "contained") {
      return isDisable
        ? `bg-gray-400 text-gray-500 rounded-md`
        : `text-inherit rounded-md ${normalizedBgColor} hover:brightness-60 transition-all`;
    }
  }, [varient, isDisable, color]);

  const buttonSize = useMemo(() => {
    const baseStyles = "flex items-center justify-center gap-2";
    switch (size) {
      case "large":
        return `text-xl px-6 py-4 ${baseStyles}`;
      case "medium":
        return `text-base px-4 py-2 ${baseStyles}`;
      case "small":
        return `text-xs px-2 py-1 ${baseStyles}`;
      default:
        return baseStyles;
    }
  }, [size]);

  return (
    <button
      disabled={!!isDisable}
      className=" text-inherit cursor-pointer"
      onClick={() => updatedAction(data)}
    >
      {isLoading ? (
        <div className="loader-button-snipper"></div>
      ) : (
        <slot className={`${buttonType} ${buttonSize}`}>
          {iconName && sideIcon === "right" && (
            <span className="flex items-center justify-center h-full">
              <IconLoader
                name={iconName}
                size={iconSize}
                color={iconColor}
                className={iconClass}
              />
            </span>
          )}

          {text && (
            <p
              className={`flex items-center ${textColor} justify-center h-full`}
            >
              {text}
            </p>
          )}

          {iconName && sideIcon === "left" && (
            <span className="flex items-center justify-center h-full">
              <IconLoader
                name={iconName}
                size={iconSize}
                color={iconColor}
                className={iconClass}
              />
            </span>
          )}
        </slot>
      )}
    </button>
  );
};

export default BaseButton;
