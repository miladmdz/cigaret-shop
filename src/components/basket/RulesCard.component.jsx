import { WARNING_BEFORE_BUY } from "@/constant/VIEW.contant";
import React from "react";
import IconLoader from "../../../public/Icon/Icon-Loader";

function RulesCard() {
  return (
    <div className="bg-yellow-100 border-r-4 border-yellow-500 text-yellow-700 p-4 rounded">
      <p className="font-bold text-xl pr-2">توجه</p>

      {WARNING_BEFORE_BUY.map((item) => (
        <div key={item.id} className="flex items-start gap-1">
          <span className="flex items-center h-8">
            <IconLoader iconName="WarningSolid" color="none" size={18} />
          </span>
          <p className="text-sm  leading-8">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default RulesCard;
