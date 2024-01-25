"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import img from "../../../assets/bg.png";
import DynamicTitle from "../utils/dynamic-title";
import shelter1 from "../../../assets/shelter01.png";
import shelter2 from "../../../assets/shelter02.webp";
import shelter3 from "../../../assets/shelter03.png";
import shelter4 from "../../../assets/shelter04.webp";
import shelter5 from "../../../assets/shelter05.png";
import shelter6 from "../../../assets/shelter/6.webp";
import shelter7 from "../../../assets/shelter/7.webp";
import shelter8 from "../../../assets/shelter/8.webp";
import shelter9 from "../../../assets/shelter/9.jpeg";
import shelter10 from "../../../assets/shelter/10.jpeg";

const shelters = [
  {
    imageUrl: shelter1,
    title: "Luxury Living",
    description:
      "A house that offers comfort like no other, framing the good life in every corner.",
  },
  {
    imageUrl: shelter2,
    title: "Elegant Home",
    description:
      "Experience a perfect blend of form and function in this stylishly designed residence.",
  },
  {
    imageUrl: shelter3,
    title: "Grand Retreat",
    description:
      "Escape into a world of serene opulence, where every aspect of your home contributes to a luxurious life.",
  },
  {
    imageUrl: shelter4,
    title: "Stylish Shelter",
    description:
      "Bask in the warmth of modern elegance and superior comfort, right at your doorstep.",
  },
  {
    imageUrl: shelter5,
    title: "Regal Residences",
    description:
      "These exclusive abodes are designed to deliver an integrative living experience wrapped in luxury",
  },
  {
    imageUrl: shelter6,
    title: "Cosy Comforts",
    description:
      "Be swept into a realm of relaxation and indulgence in this thoughtfully personalized habitat.",
  },
  {
    imageUrl: shelter7,
    title: "Modern Marvel",
    description:
      "Step into a home where every design detail sings a song of modern, chic and comfortable living.",
  },
  {
    imageUrl: shelter8,
    title: "Opulent Oasis",
    description:
      "Rediscover what it means to be at peace in a home that seamlessly blends luxury with comfort.",
  },
  {
    imageUrl: shelter9,
    title: "Luxurious Loft",
    description:
      "Experience high-end living in this tastefully crafted loft, where every corner narrates a story of elegance and refinement.",
  },
  {
    imageUrl: shelter10,
    title: "Harmony Haven",
    description:
      "Embrace serenity in this harmoniously designed haven that assures a balanced and luxurious living experience.",
  },
];

const Shelters = () => {
  const calculateBulletWidth = () => {
    const bullets = document.querySelectorAll(".swiper-pagination-bullet");
    const numSlides = shelters.length;
    const bulletWidth = 100 / numSlides;
    bullets.forEach((bullet) => {
      bullet.style.width = `${bulletWidth}%`;
    });
  };

  useEffect(() => {
    calculateBulletWidth();
    window.addEventListener("resize", calculateBulletWidth);
    return () => {
      window.removeEventListener("resize", calculateBulletWidth);
    };
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="flex items-end w-4 h-2 bg-white    ' +
        className +
        '">' +
        "</span>"
      );
    },
  };

  return (
    <section className=" body-font">
      <div className="container px-5 pb-24 mx-auto">
        <DynamicTitle
          title="AI based pandemic community shelters"
          className="tracking-[-3.36px]"
        />
        <div data-aos="fade-in" className="flex flex-wrap z-0" id="shelters">
          <Swiper
            centeredSlides={true}
            initialSlide={2}
            slidesPerView={1}
            spaceBetween={0}
            // pagination={pagination}
            onInit={() => calculateBulletWidth()}
            onSlideChange={() => calculateBulletWidth()}
            className="mySwiper gap-4"
            modules={[Pagination, Navigation]}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1000: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
          >
            {shelters.map((shelter, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col h-[550px]">
                  <div className="overflow-hidden group md:h-full md:w-full h-[200px] relative">
                    <Image
                      className="h-[200px] object-cover group-hover:scale-[1.1] transition duration-300 ease-in-out md:h-full md:w-full w-[200px]"
                      src={shelter.imageUrl}
                      alt={shelter.description}
                    />
                  </div>

                  <div className="text-sm mt-[30px] md:rounded-[20px] md:p-[30px] bg-black bg-opacity-50 md:mt-0 md:absolute z-10 md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
                    {shelter?.title && (
                      <div className="mb-2 text-[#FC4F5A]  font_cat text-[20.717px] not-italic font-normal leading-[140%]">
                        {shelter?.title}
                      </div>
                    )}
                    {shelter?.description && (
                      <div className=" text-[16.347px] not-italic font-medium leading-[140%] md:text-white text-[#707070]">
                        {shelter?.description}
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="">
              <div className="flex items-center justify-center md:justify-end space-x-4 z-[500] relative md:absolute md:bottom-[4.5%] right-[4.5%]">
                <div className="prev z-50">
                  <FaChevronLeft />
                </div>
                <div className="next z-50">
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Shelters;
