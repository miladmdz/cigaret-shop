import React from "react";

function ChevronleftSolid({
  className = "",
  size = 24,
  color = "currentColor",
}) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default ChevronleftSolid;
