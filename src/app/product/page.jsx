"use client";
import React, { useRef } from "react";

import {
  SIDE_FILTERS_MAP,
  SORT_FILTERS_MAP,
} from "@/constant/FILTERS.constant";

import BaseSelect from "@/components/shared/base-select/BaseSelect.component";
import ProductBox from "@/components/shared/product-box/ProductBox.component";
import SideTag from "@/components/shared/side-tag/SideTag.component";
import PriceRangeFilter from "@/components/shared/price-range-filter/PriceRangeFilter.component";
import PaginationTable from "@/components/shared/pagination/Pagination.component";
import BaseButton from "@/components/shared/base-button/BaseButton.component";
import BaseSideSheet from "@/components/shared/base-sidesheet/BaseSideSheet.component";
import SideFilter from "@/components/shared/side-filter/SideFilter.component";

function page() {
  const totalItem = 30;

  const filterSideSheetRef = useRef(null);

  const setVisibilityModal = (isVisibile = true) => {
    filterSideSheetRef.current.setVisibility(isVisibile);
  };

  //TODO:remove mock data

  const products = [
    {
      title: "برگ ۸ نخی کاپیتان بلک شکلاتی (طرح جدید)",
      rate: 4,
      price: 160_000,
      image: "/images/sigar1.jpg",
    },
    {
      title: "اسکار شکلاتی",
      rate: 3,
      price: 100_000,
      image: "/images/sigar2.jpg",
    },
    {
      title: "میلانو قهوه",
      rate: 5,
      price: 65_000,
      image: "/images/sigar3.jpg",
    },
    {
      title: "وینستون قرمز",
      rate: 2,
      price: 50_000,
      image: "/images/sigar4.jpg",
    },
    {
      title: "کمل مشکی",
      rate: 5,
      price: 45_000,
      image: "/images/sigar5.jpg",
    },
    {
      title: "کمل ابی",
      rate: 4,
      price: 36_000,
      image: "/images/sigar1.jpg",
    },
  ];

  const tags = [
    { label: "Marlboro", value: "Marlboro" },
    { label: "Winston", value: "Winston" },
    { label: "Kent", value: "Kent" },
    { label: "kavalo", value: "kavalo" },
    { label: "Madox", value: "Madox" },
    { label: "Bahman", value: "Bahman" },
  ];

  const setPage = (newPage) => {
    //TODO: add functionality for handle pagination
  };

  const pagination = "1–12";
  return (
    <div className="flex items-start px-4 xl:px-16 py-5 gap-x-4">
      <div className="hidden lg:flex w-full flex-col items-start gap-y-10 px-2 flex-1/3 pt-5 ">
        <SideFilter filters={SIDE_FILTERS_MAP} title="دسته بندی" />
        <PriceRangeFilter min={15000} max={400000} />
        <SideTag title="برچسب محصولات" tags={tags} />
      </div>

      <div className="flex flex-col items-start">
        <div className="flex justify-between items-center w-full pb-5 border-b border-gray-500/50">
          <div className="flex items-center gap-4 ">
            <div className="w-fit lg:hidden">
              <BaseButton
                iconName="filter-solid"
                varient="text"
                sideIcon="right"
                text="فیلتر"
                updatedAction={setVisibilityModal}
              />
            </div>

            <p className="hidden sm:flex h-full items-center text-sm justify-center">
              نمایش {pagination} از {totalItem} نتیجه
            </p>
          </div>

          <div className="w-40">
            <BaseSelect sortList={SORT_FILTERS_MAP} />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 py-5">
          {products.map((item) => (
            <ProductBox
              key={item.title}
              image={item.image}
              price={item.price}
              rate={item.rate}
              title={item.title}
            />
          ))}
        </div>

        <div className="w-full flex justify-center items-center py-8">
          <PaginationTable
            totalItem={20}
            itemPerPage={1}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </div>
      </div>

      <BaseSideSheet ref={filterSideSheetRef} title="فیلتر">
        <div className="w-full h-full flex flex-col items-start gap-y-10 pt-5">
          <SideFilter filters={SIDE_FILTERS_MAP} title="دسته بندی" />
          <PriceRangeFilter min={15000} max={400000} />
          <SideTag title="برچسب محصولات" tags={tags} />

          <div className="w-full">
            <BaseButton
              text="اعمال فیلتر"
              varient="contained"
              color="bg-primaryOrange-light"
              textColor="text-white"
            />
          </div>
        </div>
      </BaseSideSheet>
    </div>
  );
}

export default page;
