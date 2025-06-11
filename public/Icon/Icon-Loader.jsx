import React from "react";

import { splitByCapitalLetters } from "@/utils/string.util";

const IconLoader = ({
  iconName = "",
  size = 24,
  color = "currentColor",
  className = "",
}) => {
  const normalizeIconName = splitByCapitalLetters(iconName);

  const directoryName = normalizeIconName
    .slice(0, -1)
    .map((item) => String(item).toLocaleLowerCase())
    .join("-");

  let ImportedIcon = null;
  try {
    ImportedIcon = require(`./${directoryName}/${iconName}`).default;
  } catch (error) {
    ImportedIcon = require("./LoadingSolid").default;
  }

  return <ImportedIcon size={size} color={color} className={className} />;
};

export default React.memo(IconLoader);
