import Image from "next/image";
import React from "react";

function ImageCard({ images, name }) {
  return (
    <div className="w-full md:w-1/2">
      <div className="relative w-full aspect-[3/2]">
        <Image
          alt={`${name} photo`}
          src={images}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default ImageCard;
