import React from "react";

function BoxOutline({ className = "", size = 24, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
      />
    </svg>
  );
}

export default BoxOutline;
