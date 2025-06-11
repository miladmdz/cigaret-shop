"use client";

import React, { useState } from "react";

function TabView({ tabs = [], onTabChange = () => {} }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabChange = (newValue) => {
    setActiveTab(newValue);

    onTabChange(newValue);
  };

  return (
    <div className="w-full">
      <ul className="w-full flex items-center justify-center gap-5 text-primaryBlack text-xl font-bold">
        {tabs.map((tab) => {
          const isActive = activeTab.value === tab.value;
          const isHovered = hoveredTab === tab.value;

          return (
            <li
              key={tab.value}
              onClick={() => tabChange(tab)}
              onMouseEnter={() => setHoveredTab(tab.value)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`flex flex-col items-center gap-3 cursor-pointer transition-colors duration-300 ${
                isActive || isHovered ? "text-primaryOrange-light" : ""
              }`}
            >
              {tab.label}

              <span
                className={`
                  h-0.5 w-full bg-primaryOrange-light transform origin-left transition-transform duration-300 
                  ${isActive || isHovered ? "scale-x-100" : "scale-x-0"}
                `}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TabView;
