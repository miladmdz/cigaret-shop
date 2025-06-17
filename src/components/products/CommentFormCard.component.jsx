"use client";

import React, { useState } from "react";
import IconLoader from "../../../public/Icon/Icon-Loader";
import BaseButton from "../shared/base-button/BaseButton.component";

function CommentFormCard() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex w-1/2 flex-col gap-5">
      <h2 className="text-sm text-primaryBlack">
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند{" "}
        <span className="text-red-500">*</span>
      </h2>

      <div className="flex flex-col gap-2">
        <h2 className="text-sm text-primaryBlack">
          امتیاز شما <span className="text-red-500">*</span>
        </h2>

        <div>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                <IconLoader
                  iconName="StarSolid"
                  size={22}
                  className={`cursor-pointer transition-colors ${
                    (hover || rating) >= star
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-sm text-primaryBlack">
          دیدگاه شما <span className="text-red-500">*</span>
        </h2>

        <textarea className="w-full min-h-44 outline-none border border-gray-300 rounded resize-none px-3 py-1"></textarea>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex w-full flex-col items-start gap-2">
          <label htmlFor="name">
            نام <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            id="name"
            className="outline-none w-full border border-gray-300 rounded py-2 px-3"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-2">
          <label htmlFor="email">
            ایمیل <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            id="email"
            className="outline-none w-full border border-gray-300 rounded py-2 px-3"
          />
        </div>
      </div>

      <BaseButton
        text="ثبت"
        varient="contained"
        color="bg-primaryOrange-light"
        textColor="text-white"
      />
    </div>
  );
}

export default CommentFormCard;
