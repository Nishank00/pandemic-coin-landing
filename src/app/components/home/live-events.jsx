"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import DynamicTitle from "../utils/dynamic-title";
import event1 from '../../../assets/event1.png'
import event2 from '../../../assets/event2.png'
import event3 from '../../../assets/event3.png'
import event4 from '../../../assets/event4.png'
import event5 from '../../../assets/event5.jpg'
import clock from '../../../assets/icons/clock.svg'

import { motion } from "framer-motion"

const NewsCard = ({ imageUrl, description }) => (

    <div data-aos="fade-in" className="h-full group mx-auto relative overflow-hidden rounded-[20px]  md:rounded-[20px]">

        <Image
            width={720}
            height={600}
            className=" w-full z-10 group-hover:scale-[1.1] transition duration-300 ease-in-out h-[210px] md:h-full overflow-hidden  object-center"
            src={imageUrl}
            alt="blog"
        />
        <div className="md:py-2 py-6 px-6 md:mx-0 md:absolute bottom-0 w-full bg-pdc-d-gray/80 backdrop-blur-[5px]">
            <div className="flex gap-[8px] mb-[6px]" >
                <Image src={clock} height={20} width={20} className="clock_img" alt='arrow' />
                <div className="font_cat text-[13.423px] not-italic font-medium leading-[143.5%]">
                    12-3-2023
                </div>
            </div>
            <p className="leading-relaxed md:px-4 px-0 font_cat text-[#E4E4E4]">{description}...&nbsp; <span className="text-[14px] not-italic font-medium leading-[143.5%] cursor-pointer text-[#342CB2]">read more</span></p>
            {/* <button className="text-white pri-btn px-4 p-2 text-xs font-medium ">
                    Learn More
                </button> */}
        </div>
    </div>

);

export default function LiveEvents() {
    const NewsGallery = [
        {
            imageUrl: event1,
            description:
                "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
        },
        {
            imageUrl: event2,
            description:
                "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
        },
        {
            imageUrl: event3,
            description:
                "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
        },
        {
            imageUrl: event4,
            description:
                "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
        },
        {
            imageUrl: event5,
            description:
                "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
        },
    ];

    return (
        <section className="text-gray-400 bg-pdc-d-gray body-font" id="news-gallery">
            <div className="container px-5 py-16 md:pb-12 mx-auto">
                <DynamicTitle title="Live Events" descColor="#7B7E98" description={"    "} />
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className="flex flex-wrap" id="NewsGallery">
                    <Swiper
                        centeredSlides={true}
                        slidesPerView={1}
                        initialSlide={2}
                        loop={true}
                        spaceBetween={50}
                        pagination={false}
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
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        className="mySwiper gap-4"
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {NewsGallery.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <NewsCard key={index} {...testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="pri-btn md:mt-[35px] mt-[20px] block transition-all mx-auto w-[150px] md:w-[208px] text-white"
                >
                    WATCH MORE
                </motion.button>
            </div>

        </section>
    );
}
