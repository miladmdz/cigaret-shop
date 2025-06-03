"use client";
import React, { useState } from "react";
import BaseButton from "../BaseButton/BaseButton.component";

function BaseCounter({ maxNumber = 10, minNumber = 0, disable = false }) {
  const [number, setNumber] = useState(0);

  const changeNumber = (newValue) => {
    if (
      (number === minNumber && newValue < 0) ||
      (number === maxNumber && newValue > 0)
    ) {
      return;
    }

    setNumber((prev) => (prev += newValue));
  };

  return (
    <div className="min-h-10 w-full flex items-center justify-around border border-gray-500/50 rounded ">
      <p>{number}</p>

      <div className="flex flex-col items-center">
        <BaseButton
          iconName="chevronup-solid"
          sideIcon="left"
          varient="text"
          iconSize={10}
          size="small"
          isDisable={disable}
          updatedAction={() => changeNumber(1)}
        />

        <BaseButton
          iconName="chevrondown-solid"
          sideIcon="left"
          varient="text"
          iconSize={10}
          size="small"
          isDisable={disable}
          updatedAction={() => changeNumber(-1)}
        />
      </div>
    </div>
  );
}

export default BaseCounter;
