import React from "react";
import Link from "next/link";
import Image from "next/image";
import BaseButton from "../shared/BaseButton/BaseButton.component";
import IconLoader from "../../../public/Icon/Icon-Loader";

function ArticleBox({ title, image, view, date }) {
  return (
    <div className="flex flex-col w-[150px] sm:w-[250px] items-center border bg-white border-primaryOrange-dark gap-y-5 p-4 rounded-xl">
      <Link
        href={`/articles/${title}`}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
          <Image
            src={image}
            className="rounded"
            alt="product avatar"
            fill
            sizes="(max-width: 640px) 130px, (max-width: 768px) 180px, 150px"
          />
        </div>

        <h2 className="max-w-24 md:max-w-32  text-sm md:text-base text-center font-Dana-Medium line-clamp-2 text-wrap">
          {title}
        </h2>
      </Link>

      <div className="flex w-full flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 text-xs sm:text-sm text-gray-600">
        <p className="flex items-center gap-2">
          <IconLoader name="eyeopen-outline" size={18} />

          {view}
        </p>

        <p className="flex flex-row-reverse sm:flex-row items-center gap-2">
          {date}

          <IconLoader name="calender-outline" size={18} />
        </p>
      </div>
    </div>
  );
}

export default ArticleBox;
