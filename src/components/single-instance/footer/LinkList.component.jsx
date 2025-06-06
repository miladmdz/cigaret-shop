import React from "react";
import Link from "next/link";

function LinkList({ title, linkList }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="font-Dana-Medium text-primaryOrange-light">{title}</h2>
      <ul className="flex flex-col items-center gap-2 pr-2">
        {linkList.map((item) => (
          <li
            key={item.title}
            aria-label={item.title}
            className="text-white text-sm cursor-pointer hover:text-gray-400/50 transition-colors"
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkList;
