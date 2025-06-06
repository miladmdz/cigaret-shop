"use client";

import React, { useState } from "react";

function SideFilter({ filters, title }) {
  const [selectedCategory, setSelectedCategory] = useState(filters[0]);

  return (
    <div className="w-full">
      <p className="font-Dana-Regular flex items-center pb-4">{title}</p>

      <div className="w-full border-b border-gray-500/50" />

      <ul className="w-full list-none">
        {filters.map((filter) => {
          const isActive = filter.value === selectedCategory.value;

          return (
            <li
              key={filter.value}
              onClick={() => setSelectedCategory(filter)}
              className={`group py-2 flex items-center gap-2 w-full cursor-pointer text-gray-400 transition-all ${
                isActive && "text-primaryOrange pr-3"
              }`}
            >
              <span
                className={`transition-opacity duration-300 opacity-0 ${
                  isActive && "opacity-100"
                }`}
              >
                •
              </span>

              <span className="transition-colors duration-300">
                {filter.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideFilter;
