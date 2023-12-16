"use client";

import React, { useState } from 'react';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';
import Timer from './timer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Arrow from "../../../assets/icons/arrow_2.svg";

const CountDown = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const handleButtonClick = () => {
        setCurrentSlide(currentSlide === 1 ? 2 : 1);
    };

    const slideComponents = [
        { title: "🔥 Token sale open in :", component: <Timer />, detail: null },
        { title: "Total offering", component: null, detail: '500FBX' },
        { title: "Presale Price", component: null, detail: '-' },
        { title: "Purchase Limit", component: null, detail: '-' },
        { title: "Generation Event", component: null, detail: 'Q1 2023' },
        { title: "More details", component: null, detail: 'Tokenomics' }
    ];

    return (
        <section className="text-gray-600 body-font ">
            <div className="container px-[20px] md:px-[140px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                    className="relative p-[30px] md:p-[70px_68px]  bg-black rounded-[20px] max-w-full md:max-w-[1184px] mx-auto ">
                    <div className={`flex gap-[20px] md:gap-[100px] flex-col md:flex-row`}>
                        {[1, 2, 3, 4, 5, 6].slice((currentSlide - 1) * 5, currentSlide * 5).map((index, i) =>
                        (
                            <div key={index} className="rounded-[20px] transition-all flex flex-col items-start ">
                                <p className={`text-[14px] ${i === 0 ? "text-[#FFF]" : "text-[#7B7E98]"}  font-medium leading-[139.5%] whitespace-nowrap font_cat`}>{slideComponents[index - 1].title}</p>
                                <div className="mt-4 ">
                                    {slideComponents[index - 1].component && (
                                        // Render the component if it exists
                                        slideComponents[index - 1].component
                                    )}
                                    {slideComponents[index - 1].detail && (
                                        // Render the detail if it exists
                                        <p className='leading-relaxed font_cat text-[20px] text-white font-bold'>{slideComponents[index - 1].detail}</p>
                                    )}
                                </div>
                            </div>
                        )
                        )}
                    </div>
                    {currentSlide === 1 ? (
                        <button
                            className="md:absolute relative top-0 md:top-[45%]  transition-all right-0 md:right-[50px] text-lg mt-4 mr-4"
                            onClick={handleButtonClick}
                        >
                            {/* <FaArrowRightLong /> */}
                            <Image src={Arrow} height={20} width={62} alt='arrow'/>

                        </button>
                    ) : (
                        <button
                            className="absolute top-[50%] translate-y-[-120%] transition-all left-0 text-lg mt-4 ml-4"
                            onClick={handleButtonClick}
                        >
                            <FaArrowLeftLong />
                        </button>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default CountDown;
