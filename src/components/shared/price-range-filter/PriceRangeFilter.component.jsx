"use client";

import React, { useState } from "react";

const PriceRangeFilter = ({ min, max }) => {
  const [range, setRange] = useState([min, max]);

  const handleChange = (e, index) => {
    const newValue = Number(e.target.value);
    setRange((prev) => {
      const newRange = [...prev];
      newRange[index] = newValue;

      if (newRange[0] >= newRange[1]) return prev;
      return newRange;
    });
  };

  const getTrackWidth = () => ((range[1] - range[0]) / (max - min)) * 100;

  const getTrackRight = () => ((range[0] - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="font-Dana-Regular flex items-center pb-4">قیمت</h3>

      <div className="w-full border-b border-gray-500/50" />

      <div className="relative h-10 flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          value={range[0]}
          onChange={(e) => handleChange(e, 0)}
          className="range-thumb absolute w-full h-2 bg-transparent pointer-events-none z-20"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={range[1]}
          onChange={(e) => handleChange(e, 1)}
          className="range-thumb absolute w-full h-2 bg-transparent pointer-events-none z-10"
        />

        <div className="w-full h-1 bg-gray-300 rounded relative">
          <div
            className="absolute h-1 bg-primaryOrange-light rounded"
            style={{
              right: `${getTrackRight()}%`,
              width: `${getTrackWidth()}%`,
            }}
          />
        </div>
      </div>

      <div className="flex justify-between text-sm text-primaryOrange-light mt-4">
        <span>
          قیمت: {range[0].toLocaleString()} تومان — {range[1].toLocaleString()}{" "}
          تومان
        </span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
