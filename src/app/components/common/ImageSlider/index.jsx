import React, { memo, useState, } from "react";
import { ImagesData } from "./ImagesData";
import Image from "next/image";

const ImageSlider = () => {

  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const goToPrevCard = () => {
    setActiveCardIndex(
      (prevIndex) =>
        (prevIndex - 1 + ImagesData.length) % ImagesData.length
    );
  };

  const goToNextCard = () => {
    setActiveCardIndex(
      (prevIndex) => (prevIndex + 1) % ImagesData.length
    );
  };

  const activeCard = ImagesData[activeCardIndex];

  return (
    <>
      <div className="flex justify-center items-center md:items-start flex-col md:flex-row md:gap-[100px] gap-[29px] relative h-screen bg-cover">
        {/* cards */}
        <div className="w-full h-screen">
          <div id={`oc_card_${activeCard.id}`}>
            <div

              className="text-[#401202] text-center md:text-left text-[16px] md:text-[20px] not-italic font-medium leading-[36px] mb-[30px] h-full w-full imageSlider"
            >
              <Image src={activeCard.imageUrl} layout="fill" alt="img" className="h-full w-full imageSlider" />
            </div>
            <button
              onClick={goToPrevCard}
              className="transition-transform  transform hover:scale-110 active:scale-95 bg-gray-100 rounded-[30px] p-[10px] absolute top-[50%] left-[10px] translate-y-[-50%]"
            >
              <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 5.25C18.4142 5.25 18.75 5.58579 18.75 6C18.75 6.41421 18.4142 6.75 18 6.75L18 5.25ZM0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.6967C5.53553 0.403807 6.01041 0.403807 6.3033 0.6967C6.59619 0.989594 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM18 6.75L1 6.75L1 5.25L18 5.25L18 6.75Z" fill="#373A44"></path></svg>
            </button>
            <button
              onClick={goToNextCard}
              className="ml-[37px] transition-transform transform hover:scale-110 active:scale-95 bg-gray-100 rounded-[30px] p-[10px] absolute top-[50%] right-[10px] translate-y-[-50%]"
            >
              <svg className="rotate-180" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 5.25C18.4142 5.25 18.75 5.58579 18.75 6C18.75 6.41421 18.4142 6.75 18 6.75L18 5.25ZM0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.6967C5.53553 0.403807 6.01041 0.403807 6.3033 0.6967C6.59619 0.989594 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM18 6.75L1 6.75L1 5.25L18 5.25L18 6.75Z" fill="#373A44"></path>
              </svg>
            </button>
          </div>
          {/* <div className="mt-[25px] absolute bottom-[100px] df flex md:hidden">
            <button
              onClick={goToPrevCard}
              className="transition-transform p-[10px] transform hover:scale-110 active:scale-95 bg-gray-100 rounded-[30px] shadow-xl"
            >
              <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 5.25C18.4142 5.25 18.75 5.58579 18.75 6C18.75 6.41421 18.4142 6.75 18 6.75L18 5.25ZM0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.6967C5.53553 0.403807 6.01041 0.403807 6.3033 0.6967C6.59619 0.989594 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM18 6.75L1 6.75L1 5.25L18 5.25L18 6.75Z" fill="#373A44"></path></svg>
            </button>
            <button
              className="ml-[37px] p-[10px] transition-transform transform hover:scale-110 active:scale-95 bg-gray-100 rounded-[30px] shadow-xl"
              onClick={goToNextCard}
            >
              <svg className="rotate-180" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 5.25C18.4142 5.25 18.75 5.58579 18.75 6C18.75 6.41421 18.4142 6.75 18 6.75L18 5.25ZM0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.6967C5.53553 0.403807 6.01041 0.403807 6.3033 0.6967C6.59619 0.989594 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM18 6.75L1 6.75L1 5.25L18 5.25L18 6.75Z" fill="#373A44"></path>
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default memo(ImageSlider);
