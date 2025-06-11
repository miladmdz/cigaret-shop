import React from "react";

import IconLoader from "../../../public/Icon/Icon-Loader";

function InfoCard({ iconName, children }) {
  return (
    <div className="w-full flex items-center justify-start bg-white rounded py-3 px-2">
      <IconLoader iconName={iconName} />
      <p className="ml-2">{children}</p>
    </div>
  );
}

export default InfoCard;
