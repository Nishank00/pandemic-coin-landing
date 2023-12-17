import React from "react";
import Image from "next/image";
import asset from "../../../assets/bg.png";
import asset1 from "../../../assets/asset1.png";
import "./webinar.css";
import { motion } from "framer-motion";
import DynamicTitle from "../utils/dynamic-title";

const Community = () => {
    return (
        <div className=" pt-4 md:pt-44 pb-0 overflow-hidden mx-auto px-4 md:px-16 relative">
            <div className="absolute top-[-20%] left-[-20%] bg-[#FF07174D] w-[1000px] h-[500px] opacity-50 blur-[120px] rounded-full"></div>
            <div className="absolute left-[50%] top-[-5%] translate-x-[-50%] w-full">
                <DynamicTitle title="Community Intro" />
            </div>
            <div className="flex flex-col md:flex-row item-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className="w-full relative z-10 md:w-1/2 md:py-40 pt-32 pb-20 md:pt-0 md:pb-0">
                    <h1 data-aos="fade-in" className="mt-3 md:w-5/6 text-[#7B7D98] text-[28px] not-italic font-semibold leading-[139.5%] capitalize">
                        Community Chronicles: Unveiling the Heartbeat of Our
                        Shared Journey
                    </h1>
                    <p data-aos="fade-in" className="w-5/6 mt-6 text-[#D4D4D4]">
                        Lorem ipsum dolor sit amet consectetur. Lorem ipsum
                        dolor sit amet consectetur. orem ipsum dolor sit amet
                        consectetur. Lorem ipsum dolor sit amet consectetur.{" "}
                    </p>
                    <motion.button
                        data-aos="fade-in"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="pri-btn w-fit text-[#FFF] text-[18px] not-italic font-normal leading-[139.5%] mt-[47px] block transition-all capitalize p-[14px_24px] h-[53px]"
                    >
                        Explore Community
                    </motion.button>
                </motion.div>

                <Image
                    className="w-full md:w-1/2 "
                    src={asset1}
                    alt="image"
                    width={500}
                    height={500}
                    data-aos="fade-in"
                />

            </div>
        </div>
    );
};

export default Community;
