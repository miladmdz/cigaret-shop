"use client";
import React, { useState } from "react";

function SideTag({ title, tags }) {
  const [selectedTag, setSelectedTag] = useState({});

  return (
    <div className="w-full">
      <p className="font-Dana-Regular flex items-center pb-4">{title}</p>
      <div className="w-full border-b border-gray-500/50" />
      <div className="flex flex-wrap items-start pt-4 gap-x-1 gap-y-1">
        {tags.map((tag) => (
          <span
            key={tag.value}
            onClick={() => setSelectedTag(tag)}
            className={`
                ${
                  selectedTag.value === tag.value
                    ? "text-primaryOrange-light border-primaryOrange-light"
                    : "text-gray-700 border-gray-500/80 "
                }
                border  rounded-4xl px-3 py-1  cursor-pointer transition-colors`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SideTag;
