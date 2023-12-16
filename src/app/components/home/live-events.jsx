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
import { motion } from "framer-motion"

const NewsCard = ({ imageUrl, description }) => (
    <div className="p-4 overflow-hidden">
        <div className="h-full mx-auto relative overflow-hidden rounded-[20px] max-h-[400px] md:max-h-[500px] md:rounded-[20px]">
            <Image
                width={720}
                height={600}
                className="h-[400px] md:h-[300px] w-full rounded-[20px] overflow-hidden object-cover object-center"
                src={imageUrl}
                alt="blog"
            />
            <div className="p-6 md:mx-0 md:absolute bottom-0 w-full bg-pdc-d-gray/80 backdrop-blur-lg">
                <p className="leading-relaxed mb-3">{description}</p>
                <button className="text-white pri-btn px-4 p-2 text-xs font-medium ">
                    Learn More
                </button>
            </div>
        </div>
    </div>
);

export default function LiveEvents() {
    const NewsGallery = [
        {
            imageUrl: event1,
            description:
                "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons",
        },
        {
            imageUrl: event2,
            description:
                "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons",
        },
        {
            imageUrl: event3,
            description:
                "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons",
        },
        {
            imageUrl: event4,
            description:
                "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons",
        },
        {
            imageUrl: event5,
            description:
                "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons",
        },
    ];

    return (
        <section className="text-gray-400 bg-pdc-d-gray body-font" id="news-gallery">
            <div className="container px-5 py-16 md:pb-12 mx-auto">
                <DynamicTitle title="Live Events" dividerWidth="100%" descColor="#7B7E98" description={"WEBINARS"} />
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
                        spaceBetween={30}
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
            </div>
        </section>
    );
}
