import React from "react";

function MenuOutline({ className = "", size = 24, color = "currentColor" }) {
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
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

export default MenuOutline;
