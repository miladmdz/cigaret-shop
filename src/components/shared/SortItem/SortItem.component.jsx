"use client";

import React, { useEffect, useRef, useState } from "react";

import IconLoader from "../../../../public/Icon/Icon-Loader";

const SortItem = ({ sortList }) => {
  const [sortListState, setSortListState] = useState(sortList);
  const [selectedSort, setSelectedSort] = useState(sortListState[0]);
  const [isOpenDropdown, setISOpenDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setISOpenDropdown(false);
    }
  };

  useEffect(() => {
    if (isOpenDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenDropdown]);

  const selectSort = (newValue) => {
    if (newValue.value !== selectedSort.value) {
      setSelectedSort(newValue);
      setISOpenDropdown(false);
      return;
    }

    const updatedList = sortListState.map((item) => {
      if (item.value === newValue.value) {
        const newIconName =
          item.iconName === "sortupaz-solid"
            ? "sortdownaz-solid"
            : "sortupaz-solid";
        return { ...item, iconName: newIconName };
      }
      return item;
    });

    setSortListState(updatedList);

    const updatedSelected = updatedList.find(
      (item) => item.value === newValue.value
    );
    setSelectedSort(updatedSelected);

    setISOpenDropdown(false);
  };

  return (
    <div className="select-none" ref={dropdownRef}>
      <div
        onClick={() => setISOpenDropdown((prev) => !prev)}
        className="w-40 flex items-end justify-between px-4 py-2 border border-gray-300 rounded-2xl cursor-pointer"
      >
        <p>{selectedSort.label}</p>

        <span className="h-full flex items-center">
          <IconLoader name="chevrondown-solid" size={16} />
        </span>
      </div>

      {isOpenDropdown && (
        <ul className="absolute bg-white z-10 w-40 rounded-2xl mt-1 px-2 py-4 border border-gray-300">
          {sortListState.map((item) => (
            <li
              onClick={() => selectSort(item)}
              className={`${
                item.value === selectedSort.value &&
                "bg-primaryOrange-dark text-white"
              } flex items-center justify-between rounded px-4 py-1 cursor-pointer transition-colors duration-300`}
              key={item.value}
            >
              {item.label}

              <IconLoader name={item.iconName} size={16} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortItem;
