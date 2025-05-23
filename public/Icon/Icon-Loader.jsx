import React from "react";

import { toKebabCase, toPascalCase } from "@/utils/string.util";

const IconLoader = ({
  name = "",
  size = 24,
  color = "currentColor",
  className = "",
}) => {
  const toNormalizeName = name.split("-")[0];
  const folderName = toPascalCase({ str: toNormalizeName });

  const fileName = toKebabCase({ str: name });

  let ImportedIcon = null;
  try {
    ImportedIcon = require(`./${folderName}/${fileName}`).default;
  } catch (error) {
    ImportedIcon = require("./default-solid").default;
  }

  return <ImportedIcon size={size} color={color} className={className} />;
};

export default React.memo(IconLoader);
