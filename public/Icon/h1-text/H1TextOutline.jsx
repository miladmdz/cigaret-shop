import React from "react";

function H1TextOutline({ className = "", size = 24, color = "currentColor" }) {
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
        d="M2.243 4.493v7.5m0 0v7.502m0-7.501h10.5m0-7.5v7.5m0 0v7.501m4.501-8.627 2.25-1.5v10.126m0 0h-2.25m2.25 0h2.25"
      />
    </svg>
  );
}

export default H1TextOutline;
