import SideBar from "@/components/single-instance/sideBar/SideBar.component";
import React from "react";

function layout({ children }) {
  return (
    <div className="flex items-start w-full gap-5 px-4 xl:px-40 py-5">
      <SideBar />
      <div className="w-full">{children}</div>
    </div>
  );
}

export default layout;
