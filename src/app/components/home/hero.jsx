import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";

//imgs
import logo from "../../../assets/logo-big.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "../common/UseMediaQuery/UseMediaQuery";
// import bg from "../../../assets/hero_bg.svg";
// import bg1 from "../../../assets/landing-bg.png";
import mouse from "../../../assets/mouse_scroll.svg";
import VideoComp from "../common/VideoComp/VideoComp";


export default function HeroSection() {

    const isMobile = useMediaQuery("(max-width:768px)");

    return (
        <>
            <div className="relative" id="banner_id">
                {/* <Image
                    id="hero_img_id"
                    src={isMobile ? bg1 : bg}
                    alt="Pandemic Coin bg"
                    width="auto"
                    height="auto"
                    className={`  ${isMobile ? "opacity-20 h-screen" : "h-[100vh]"}  object-cover w-screen `}
                /> */}

                <div className={` ${isMobile ? "h-screen" : "h-[100vh]"} w-[100%] object-cover`}>
                    <VideoComp autoplay="true" loop="true" url={"/video/tunnel_v4.mp4"} />
                </div>
                <div className="absolute bottom-[50px] md:bottom-auto left-[50%] md:left-auto translate-x-[-50%] md:translate-x-0 md:top-[70vh] md:right-[50px] flex flex-col justify-center items-center">
                    <Image
                        src={mouse}
                        alt="mouse"
                        height={50}
                        width={50}
                        className={``}
                    />
                    <div className="text-white mt-1 font-[10px]">Scroll to Continue</div>
                </div>

                <div
                    // initial={{ opacity: 0, y: 100 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // transition={{
                    //     duration: 0.5,
                    //     ease: "easeInOut",
                    // }}
                    className="text-center absolute md:top-[50vh] md:translate-x-[0%] md:translate-y-[0%] translate-x-[-50%] translate-y-[-50%] md:translate-[0] top-[50%] md:left-[50px] left-[50%] ">

                    <Tilt className="track-on-window" trackOnWindow={true}>
                        <Image
                            data-aos="fade-in"
                            src={logo}
                            alt="Pandemic Coin Logo"
                            // className="mx-auto w-[150px] md:w-[223px] drop-shadow-2xl "
                            className="mx-auto w-[60px] md:w-[80px] drop-shadow-2xl "
                        />
                    </Tilt>
                    <motion.h1

                        data-aos="fade-in"
                        // className="text-[#FFF]  md:text-[76px] text-[36px] mt-[10px] font-normal leading-[139.5%] capitalize">
                        className="text-[#FFF]  md:text-[36px] text-[24px] mt-[10px] font-normal leading-[139.5%] capitalize">
                        The Pandemic Coin
                    </motion.h1>
                    

                    {/* <div className="flex ">
                    <button
                        // className="pri-btn md:mt-[35px] mt-[20px] block transition-all mx-auto w-[150px] md:w-[201px] text-white"
                        className="bg-[#BB1A37] p-[5px] font-[10px] md:mt-[5px] rounded-[8px] mx-auto w-[150px] md:w-[150px] text-white"
                        data-aos="fade-in"
                    >
                        Purchase now
                    </button>
                    <button
                        // className="pri-btn md:mt-[35px] mt-[20px] block transition-all mx-auto w-[150px] md:w-[201px] text-white"
                        className="bg-[#fff] p-[5px] font-[10px] md:mt-[5px] rounded-[8px] mx-auto w-[150px] md:w-[150px] text-black"
                        data-aos="fade-in"
                    >
                        Whitepaper
                    </button>
                    </div> */}
                    <div className="flex flex-col md:flex-row md:space-x-5">
  <button
    className="bg-[#BB1A37] text-white rounded-[8px] mx-auto w-[150px] md:w-[150px] text-[10px] md:mt-0 mt-5 px-4 py-2 font_cat"
    data-aos="fade-in"
  >
    Purchase now
  </button>
  <button
    className="bg-[#fff] text-black rounded-[8px] mx-auto w-[150px] md:w-[150px] text-[10px] md:mt-0 mt-5 px-4 py-2 font_cat"
    data-aos="fade-in"
  >
    Whitepaper
  </button>
</div>
                </div>

            </div></>

    );
}
