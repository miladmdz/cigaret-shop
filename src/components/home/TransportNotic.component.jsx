import React from "react";

import IconLoader from "../../../public/Icon/Icon-Loader";
import { TRANSFER_NOTICS_MAP } from "@/constant/view.contant";

function TransportNotic() {
  return (
    <div className="px-4 xl:px-40 pb-5">
      <div className="w-full flex items-center justify-center flex-wrap gap-4 h-fit py-5 px-2 bg-primaryOrange-light  rounded-4xl">
        {TRANSFER_NOTICS_MAP.map((notic) => (
          <div
            key={notic.title}
            className="bg-primaryBg px-3 py-5 shadow-2xl w-[300px] sm:w-[200px] md:w-[300px] rounded-xl flex items-center gap-6"
          >
            <IconLoader color="none" name={notic.iconName} size={notic.size} />

            <div className="flex flex-col items-start">
              <h2 className="h-12 text-base sm:text-xs md:text-sm lg:text-base font-Dana-Medium font-bold ">
                {notic.title}
              </h2>

              <p className="text-xs lg:text-sm text-gray-600">{notic.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransportNotic;
