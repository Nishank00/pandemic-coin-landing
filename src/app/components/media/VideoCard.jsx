/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const VideoCard = ({ image, title, description }) => {
  return (
    <div class="md:pb-4 sm:mb-0 bg-pdc-d-gray flex items-center md:block rounded-[20px] shadow-2xl md:mb-6">
      <div class="rounded-[20px] w-1/2 md:w-full relative overflow-hidden">
        <img
          alt="team"
          width={300}
          height={300}
          className="rounded-[20px] w-[110px] h-[110px] md:w-full md:h-full object-cover object-center mb-0 md:mb-4"
          src={image}
        />
      </div>
      <div className="px-2 w-full p-0 md:p-4">
        <p class="text-md md:text-xl font-semibold title-font text-white md:mt-0">
          {title}
        </p>
        <h2 class="text-xs md:text-base leading-relaxed mt-2 text-[#5F5F5F]">
          {description.slice(0, 94)} {description.length > 94 ? "..." : ""}
        </h2>
      </div>
    </div>
  );
};

export default VideoCard;
