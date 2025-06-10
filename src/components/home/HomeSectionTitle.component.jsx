import React from "react";

const HomeSectionTitle = ({ text }) => {
  return (
    <div className="flex items-center my-8">
      <div className="flex-grow h-0.5 bg-gradient-to-r from-primaryOrange-light rounded-full" />
      <h2 className="mx-4 font-Dana-Medium text-base sm:text-2xl whitespace-nowrap">
        {text}
      </h2>
      <div className="flex-grow h-0.5 bg-gradient-to-l from-primaryOrange-light rounded-full" />
    </div>
  );
};

export default HomeSectionTitle;
