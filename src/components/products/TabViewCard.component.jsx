"use client";

import React, { useState } from "react";

import TabView from "@/components/shared/TabView/TabView.component";
import DescriptionCard from "@/components/products/DescriptionCard.component";
import CommentsCard from "@/components/products/CommentsCard.component";

function TabViewCard({ description, comments }) {
  const tabs = [
    {
      label: "توضیحات تکمیلی",
      value: "description",
    },
    {
      label: "نظرات",
      value: "comments",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const tabChange = (newValue) => setSelectedTab(newValue);

  return (
    <div className="py-20">
      <TabView tabs={tabs} onTabChange={tabChange} />

      <div
        className={`${
          selectedTab.value === "description" ? "block" : "hidden"
        } py-10`}
      >
        <DescriptionCard data={description} />
      </div>

      <div
        className={`${
          selectedTab.value === "comments" ? "block" : "hidden"
        } py-10`}
      >
        <CommentsCard comments={comments} />
      </div>
    </div>
  );
}

export default TabViewCard;
