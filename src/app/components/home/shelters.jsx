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
import shelter1 from "../../../assets/shelter1.jpg"
import shelter2 from "../../../assets/shelter2.jpg"
import shelter3 from "../../../assets/shelter3.jpg"
import shelter4 from "../../../assets/shelter4.jpg"
import shelter5 from "../../../assets/shelter5.png"

const shelters = [
    {
        imageUrl: shelter1,
        title: "Shelter 1",
        description: "Sed ut perspiciatis unde dim omnis iste sun voluptatem accus em ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem",
    },
    {
        imageUrl: shelter2,
        title: "Shelter 2",
        description: "Sed ut perspiciatis unde dim omnis iste sun voluptatem accus em ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem",
    },
    {
        imageUrl: shelter3,
        title: "Shelter 3",
        description: "Sed ut perspiciatis unde dim omnis iste sun voluptatem accus em ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem",
    },
    {
        imageUrl: shelter4,
        title: "Shelter 4",
        description: "Sed ut perspiciatis unde dim omnis iste sun voluptatem accus em ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem",
    },
    {
        imageUrl: shelter5,
        title: "Shelter 5",
        description: "Sed ut perspiciatis unde dim omnis iste sun voluptatem accus em ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem",
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
                <DynamicTitle title="Pandemic shelters images" className="tracking-[-3.36px]" />
                <div data-aos="fade-in" className="flex flex-wrap z-0" id="shelters">
                    <Swiper
                        centeredSlides={true}
                        initialSlide={2}
                        slidesPerView={1}
                        spaceBetween={0}
                        pagination={pagination}
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
                    >
                        {shelters.map((shelter, index) => (
                            <SwiperSlide key={index}>
                                {/* <div className="md:grid md:grid-cols-3 flex flex-col gap-4 w-10/12  mx-auto overflow-hidden ">
                                    <div className="h-full w-full group">
                                        <div className="text-sm">
                                            {shelter?.title && <div className="mb-2 text-[#949494] font-[Catamaran] text-[20.717px] not-italic font-normal leading-[140%]">{shelter?.title}</div>}
                                            {shelter?.description && <div className="font-[Catamaran]  text-[16.347px] not-italic font-medium leading-[140%] text-[#707070]">{shelter?.description}</div>}
                                        </div>
                                        <div className="pt-4">
                                            <Image
                                                width={400}
                                                height={440}
                                                src={shelter.imageUrl}
                                                alt={shelter.description}
                                                className="md:h-[400px] group-hover:scale-[1.1] transition duration-300 ease-in-out md:w-[400px] h-[200px] w-[200px]"
                                            />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden group md:h-full md:w-full h-[200px] relative">
                                        <Image

                                            className="h-[200px] group-hover:scale-[1.1] transition duration-300 ease-in-out md:h-full md:w-full w-[200px]"
                                            src={shelter.imageUrl}
                                            alt={shelter.description}
                                        />
                                    </div>
                                    <div className="overflow-hidden group md:h-full md:w-full h-[200px] ">
                                        <Image
                                            width={400}
                                            height={450}
                                            className=" h-[200px] group-hover:scale-[1.1] transition duration-300 ease-in-out md:h-[85%] md:w-full w-[200px]"
                                            src={shelter.imageUrl}
                                            alt={shelter.description}
                                        />
                                    </div>
                                </div> */}

                                <div className="relative flex flex-col h-[550px]">

                                    <div className="overflow-hidden group md:h-full md:w-full h-[200px] relative">
                                        <Image

                                            className="h-[200px] object-cover group-hover:scale-[1.1] transition duration-300 ease-in-out md:h-full md:w-full w-[200px]"
                                            src={shelter.imageUrl}
                                            alt={shelter.description}
                                        />
                                    </div>

                                    <div className="text-sm mt-[30px] md:rounded-[20px] md:p-[30px] bg-black bg-opacity-50 md:mt-0 md:absolute z-10 md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
                                        {shelter?.title && <div className="mb-2 text-[#FC4F5A]  font-[Catamaran] text-[20.717px] not-italic font-normal leading-[140%]">{shelter?.title}</div>}
                                        {shelter?.description && <div className="font-[Catamaran]  text-[16.347px] not-italic font-medium leading-[140%] md:text-white text-[#707070]">{shelter?.description}</div>}
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
