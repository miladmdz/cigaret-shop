"use client";

import React, { useState } from "react";

function SideFilter({ filters, title }) {
  const [selectedCategory, setSelectedCategory] = useState(filters[0]);

  return (
    <div className="max-w-[250px] h-full px-4 py-10">
      <p className="font-Dana-Regular pb-2">{title}</p>
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
              {/* Dot */}
              <span
                className={`transition-opacity duration-300 opacity-0 ${
                  isActive && "opacity-100"
                }`}
              >
                •
              </span>

              {/* Label */}
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
