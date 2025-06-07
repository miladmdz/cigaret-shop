import React from "react";

function TitleCard({ title }) {
  return (
    <div className="w-full border-r-4 border-primaryOrange-light pr-4 py-2 mb-6 rounded-r">
      <h2 className="text-lg font-semibold text-primaryOrange-light">
        {title}
      </h2>
    </div>
  );
}

export default TitleCard;
