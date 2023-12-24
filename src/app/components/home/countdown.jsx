"use client";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger as Scrolltrigger } from "gsap/dist/ScrollTrigger";
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';
import Timer from './timer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Arrow from "../../../assets/icons/arrow_2.svg";
import { useMediaQuery } from "../common/UseMediaQuery/UseMediaQuery";
import MouseMoveWrapper from "./MouseShine";
import HoverEffect from "./MouseShine";


const CountDown = () => {
    gsap.registerPlugin(Scrolltrigger);
    gsap.defaults({ ease: "none" });

    const isMobile = useMediaQuery("(max-width:768px)");

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

    useLayoutEffect(() => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: "#countdown_id",
                    start: "top 600",
                    scrub: true,
                    end: "+=500",
                    // markers: true
                },
            })
            .add("start")
            .to(
                "#count_box_id",
                {
                    transform: "scale(1)",
                },
                "start"
            );
    }, []);

    const buttonRef = useRef(null)

    function mouseMoveEvent(e) {
        const { x, y } = buttonRef.current.getBoundingClientRect();
        buttonRef.current.style.setProperty('--x', e.clientX - x);
        buttonRef.current.style.setProperty('--y', e.clientY - y);
    }

    useEffect(() => {
        if (buttonRef) {
            buttonRef.current.addEventListener('mousemove', mouseMoveEvent)
        }
        return () => buttonRef.current.removeEventListener('mousemove', mouseMoveEvent)
    }, [buttonRef])

    return (
        <section id="countdown_id" className="text-gray-600   body-font md:mt-[-100px]">
            <div className="container  px-[20px] md:px-[0px] mx-auto">
                <motion.div
                    // initial={{ opacity: 0, y: 50 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // transition={{
                    //     duration: 0.5,
                    //     ease: "easeInOut",
                    // }}
                    ref={buttonRef}
                    id="count_box_id"
                    className="relative shiny p-[30px] scale-[0.8]  md:p-[70px_68px]  bg-black rounded-[20px] max-w-full md:max-w-[1184px] mx-auto ">
                    <div data-aos="fade-in" className={`flex  gap-[20px] md:gap-[100px] flex-col md:flex-row`}>
                        {[1, 2, 3, 4, 5, 6].slice((currentSlide - 1) * 5, currentSlide * 5).map((index, i) =>
                        (
                            <div key={index} className="rounded-[20px]  transition-all flex flex-col items-start justify-between ">
                                <p className={`text-[14px]  ${i === 0 ? "text-[#FFF]" : "text-[#7B7E98]"}  font-medium leading-[139.5%] whitespace-nowrap font_cat`}>{slideComponents[index - 1].title}</p>
                                <div className="mt-4 ">
                                    {slideComponents[index - 1].component && (
                                        // Render the component if it exists
                                        slideComponents[index - 1].component
                                    )}
                                    {slideComponents[index - 1].detail && (
                                        // Render the detail if it exists
                                        <p className='leading-relaxed flex justify-center items-center text-[20px] h-fit md:h-[60px] text-white font-bold'>{slideComponents[index - 1].detail}</p>
                                    )}
                                </div>
                            </div>
                        )
                        )}
                    </div>
                    {currentSlide === 1 ? (
                        <button
                            className="xl:absolute relative top-0 md:top-[55%]  xltop-[45%] transition-all right-0 xl:right-[50px] md:right-[0px] text-lg mt-4 mr-4"
                            onClick={handleButtonClick}
                        >
                            {/* <FaArrowRightLong /> */}
                            <Image src={Arrow} height={20} width={62} alt='arrow' />

                        </button>
                    ) : (
                        <button
                            className="absolute top-[50%]  translate-y-[-120%] transition-all left-0 text-lg mt-4 ml-4"
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
