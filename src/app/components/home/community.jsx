import React from "react";
import Image from "next/image";
import asset from "../../../assets/bg.png";
import asset1 from "../../../assets/asset1.png";
import "./webinar.css";
import { motion } from "framer-motion";
import DynamicTitle from "../utils/dynamic-title";

const Community = () => {
    return (
        <div className=" pt-4 md:pt-24 pb-0 overflow-hidden mx-auto px-4 md:px-16 relative">
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
                    className="w-full relative z-10 md:w-1/2 py-40">
                    <h1 className="mt-3 md:w-5/6 text-4xl">
                        Community Chronicles: Unveiling the Heartbeat of Our
                        Shared Journey
                    </h1>
                    <p className="w-5/6 mt-6 text-[#D4D4D4]">
                        Lorem ipsum dolor sit amet consectetur. Lorem ipsum
                        dolor sit amet consectetur. orem ipsum dolor sit amet
                        consectetur. Lorem ipsum dolor sit amet consectetur.{" "}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="pri-btn mt-6 block transition-all text-white"
                    >
                        Explore Community
                    </motion.button>
                </motion.div>
                <Image
                    className="w-full md:w-1/2"
                    src={asset1}
                    alt="image"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
};

export default Community;
