"use client";

import React, { useEffect, useMemo, useState } from "react";
import IconLoader from "../../../../public/Icon/Icon-Loader";

const PaginationTable = ({
  totalItem,
  itemPerPage,
  onPageChange = () => {},
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(totalItem / itemPerPage);

  const defaultClasses =
    "flex items-center justify-center h-7 w-7 font-bold text-xs rounded-full cursor-pointer hover:bg-secondaryOrang-medium hover:opacity-75";

  const generateRange = (start, end) => {
    const step = start < end ? 1 : -1;
    return Array.from(
      { length: Math.abs(end - start) + 1 },
      (_, i) => start + i * step
    );
  };

  const arrayToShow = useMemo(() => {
    if (pageCount <= 2) return [];

    if (pageCount <= 7) {
      return generateRange(pageCount - 1, 2);
    }

    if (currentPage >= 5 && currentPage < pageCount - 3) {
      return ["...", currentPage + 1, currentPage, currentPage - 1, "..."];
    }

    if (currentPage >= pageCount - 3) {
      return [...generateRange(pageCount - 1, pageCount - 4), "..."];
    }

    return ["...", ...generateRange(5, 2)];
  }, [pageCount, currentPage]);

  const changePageByStep = (step) => {
    const newPage = currentPage + step;
    if (newPage < 1 || newPage > pageCount) return;
    setCurrentPage(newPage);
  };

  const changePageByClick = (number) => {
    if (typeof number !== "number" || number === currentPage) return;
    setCurrentPage(number);
  };

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  return (
    <div className="flex gap-1 sm:gap-3 select-none flex-row-reverse items-center ">
      {pageCount > 1 && (
        <div
          onClick={() => changePageByStep(1)}
          className={`${defaultClasses} bg-secondaryOrang-light text-white`}
        >
          <IconLoader name="chevronleft-solid" size={16} />
        </div>
      )}

      <div
        onClick={() => changePageByClick(pageCount)}
        className={`${defaultClasses} ${
          currentPage === pageCount
            ? "bg-secondaryOrang-dark"
            : "bg-secondaryOrang-light text-white"
        }`}
      >
        {pageCount}
      </div>

      {arrayToShow.map((item, index) => (
        <div
          key={index}
          onClick={() => changePageByClick(item)}
          className={`${defaultClasses} ${
            currentPage === item
              ? "bg-secondaryOrang-dark"
              : "bg-secondaryOrang-light text-white"
          }`}
        >
          {item}
        </div>
      ))}

      {pageCount > 1 && (
        <div
          onClick={() => changePageByClick(1)}
          className={`${defaultClasses} ${
            currentPage === 1
              ? "bg-secondaryOrang-dark"
              : "bg-secondaryOrang-light text-white"
          }`}
        >
          {1}
        </div>
      )}

      {pageCount > 1 && (
        <div
          onClick={() => changePageByStep(-1)}
          className={`${defaultClasses} bg-secondaryOrang-light text-white`}
        >
          <IconLoader name="chevronright-solid" size={16} />
        </div>
      )}
    </div>
  );
};

export default PaginationTable;
