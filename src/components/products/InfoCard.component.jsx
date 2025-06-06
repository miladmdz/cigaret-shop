import React from "react";

import BaseButton from "@/components/shared/BaseButton/BaseButton.component";
import BaseCounter from "@/components/shared/BaseCounter/BaseCounter.component";
import IconLoader from "../../../public/Icon/Icon-Loader";
import Link from "next/link";

function InfoCard(props) {
  const { id, name, price, description, count, category, tags } = props;

  return (
    <div className="w-full md:w-1/2 flex flex-col items-start gap-y-8 mt-5 md:mt-0">
      <p className="text-black bg-green-700/30 text-xs rounded w-fit px-2 py-1">
        {count >= 0 ? "موجود" : "موجود نیست"}
      </p>

      <div className="flex flex-col w-full items-start gap-y-2">
        <h1 className="text-primaryOrange-dark text-3xl font-Dana-Medium">
          {name}
        </h1>

        <h3 className="text-xl text-primaryOrange-light">
          {Number(price).toLocaleString()} تومان
        </h3>
      </div>

      <p className="flex flex-wrap text-gray-500 font-Dana-light text-base ">
        {description}
      </p>

      <span className="flex items-center gap-2 text-sm">
        <IconLoader name="smileface-outline" color="none" size={20} />
        {count} عدد در انبار
      </span>

      <div className="flex flex-col sm:flex-row w-full items-center gap-3">
        <div className="min-w-28">
          <BaseCounter minNumber={0} maxNumber={count} disable={!!count <= 0} />
        </div>
        <span className="w-fit">
          <BaseButton
            text="افزودن به سبد خرید"
            varient="contained"
            color="text-primaryOrange-light"
            textColor="text-white"
          />
        </span>
      </div>

      <div>
        <BaseButton
          text="افزودن به لیست علاقه مندی ها"
          iconName="heart-outline"
          sideIcon="right"
          color="text-primaryOrange"
          iconColor="none"
          size="small"
        />
      </div>

      <div className="w-full border-b border-gray-500/50" />

      <div className="flex flex-col items-start gap-y-2">
        <div className="flex items-center justify-center gap-x-1">
          <h4 className="text-sm">شناسه :</h4>
          <p className="text-sm text-gray-500">{id}</p>
        </div>

        <div className="flex items-center justify-center gap-x-1">
          <h4 className="text-sm">دسته بندی :</h4>
          <Link
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            href={"/"}
          >
            دسته {category}
          </Link>
        </div>

        <div className="flex items-center justify-center gap-x-1">
          <h4 className="text-sm">برچسب ها :</h4>
          <span className="text-sm text-gray-500">
            {tags.map((tag) => (
              <Link
                className="hover:text-primaryOrange-light transition-colors"
                key={tag}
                href={`/${tag}`}
              >
                ,{tag}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
