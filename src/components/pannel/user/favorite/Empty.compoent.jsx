import React from "react";

import IconLoader from "../../../../../public/Icon/Icon-Loader";

function Empty() {
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center gap-5">
      <IconLoader iconName="DocumentOutline" color="#fa8439" size={95} />
      <h1 className="text-3xl font-bold text-primaryOrange-light">
        موردی یافت نشد
      </h1>
    </div>
  );
}

export default Empty;
