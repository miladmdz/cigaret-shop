import React from "react";

import HeaderNav from "@/components/single-instance/header/HeaderNav.component";
import HeaderBanner from "@/components/single-instance/header/HeaderBanner.component";
import HeaderActionBar from "./HeaderActionBar.component";

function HeaderLayout() {
  return (
    <>
      <HeaderNav />
      <HeaderBanner />
      <HeaderActionBar />
    </>
  );
}

export default HeaderLayout;
