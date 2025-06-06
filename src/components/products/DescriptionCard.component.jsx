import React from "react";

function DescriptionCard({ data = [] }) {
  return (
    <div className=" flex w-full flex-col items-start border border-gray-700/30 rounded overflow-hidden">
      {data.length ? (
        data.map((item) => (
          <div
            key={item.title}
            className="flex w-full items-center justify-start event:bg-gray-500  odd:bg-gray-500/20"
          >
            <h2 className="w-1/2 text-sm font-bold text-black py-3 px-4">
              {item.title}
            </h2>

            <div className="min-h-[44px] w-px bg-gray-700/30" />

            <p className="w-1/2 text-sm text-primaryBlack py-3 px-4">
              {item.value}
            </p>
          </div>
        ))
      ) : (
        <div className="flex w-full items-center justify-center event:bg-gray-500 py-3 odd:bg-gray-500/20">
          توضیحاتی وجود ندارد
        </div>
      )}
    </div>
  );
}

export default DescriptionCard;
