"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import people1 from "../../../assets/people1.jpg"
import people2 from "../../../assets/people2.jpg"
import people3 from "../../../assets/people3.jpg"
import DynamicTitle from "../utils/dynamic-title";
import './testimonials.css'
import { motion } from "framer-motion";

// Define animation variants for Swiper Slide transitions
const slideVariants = {
    enter: { opacity: 1 },
    update: { opacity: 1 },
    exit: { opacity: 0, scale: 0.8 },
};

// Define animation variants for Image and description fade-in
const imageTextVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
};

const TestimonialCard = ({ imageUrl, description }) => (
    <motion.div
        layoutId={imageUrl} // Use image URL as layout ID for smooth transitions
        initial={slideVariants.enter}
        animate={slideVariants.update}
        exit={slideVariants.exit}
        className=""
    >
        <div  data-aos="fade-in" className="mx-auto group">
            <motion.div {...imageTextVariants} className="overflow-hidden h-[300px]  md:h-[400px] mb-5 rounded-[30px] ">
                <Image
                    className="rounded-[30px]  h-[400px] object-cover w-[531px] group-hover:scale-[1.1] transition duration-300 ease-in-out  mb-4"
                    src={imageUrl}
                    alt="testimonials"
                    width={400}
                    height={440}
                />
            </motion.div>
            <motion.p {...imageTextVariants} delay={0.25}>
                {description}...&nbsp;<span className="text-[14px] not-italic font-medium leading-[143.5%] cursor-pointer text-[#342CB2]">Read</span>
            </motion.p>
            <motion.button
                whileHover={{ scale: 1.1 }} // Adjust hover scale
                whileTap={{ scale: 1 }} // Adjust tap scale
                className="pri-btn text-[#FFF] text-[18px] not-italic font-normal leading-[139.5%] md:mt-[30px] mt-[20px] capitalize"
            >
                Explore all the stories
            </motion.button>
        </div>
    </motion.div>
);

const Testimonials = () => {
    const testimonials = [
        {
            imageUrl: people1,
            description:
                "Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons",
        },
        {
            imageUrl: people2,
            description:
                "Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons",
        },
        {
            imageUrl: people3,
            description:
                "Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons",
        },
        {
            imageUrl: people2,
            description:
                "Lorem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet consectetur. orem ipsum dolor sit amet cons",
        },
    ];

    return (
        <section className="text-gray-400 body-font min-h-[80vh]" id="testimonials">
            <div className="container px-5 py-12 md:py-24 mx-auto">
                <DynamicTitle title="Personal Stories" description="testimonials" />
                <div className="flex flex-wrap p-0" id="TestMon">
                    <Swiper
                        centeredSlides={true}
                        initialSlide={1}
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={false}
                        className="mySwiper gap-4"
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
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard key={index} {...testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
