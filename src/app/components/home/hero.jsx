import Image from "next/image";
import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { ScrollTrigger as Scrolltrigger } from "gsap/dist/ScrollTrigger";
import Tilt from "react-parallax-tilt";

//imgs
import logo from "../../../assets/logo-big.png";
import bg from "../../../assets/hero_bg.svg";
import bg1 from "../../../assets/landing-bg.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "../common/UseMediaQuery/UseMediaQuery";


export default function HeroSection() {
    gsap.registerPlugin(Scrolltrigger);
    gsap.defaults({ ease: "none" });

    const isMobile = useMediaQuery("(max-width:768px)");

    useLayoutEffect(() => {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: "#banner_id",
                    start: "top 200",
                    scrub: true,
                    end: "+=1000",
                },
            })
            .add("start")
            .to(
                "#hero_img_id",
                {
                    transform: "scale(1.25)",
                },
                "start"
            );
    }, []);
    return (
        <div className="relative" id="banner_id">
            <Image
                id="hero_img_id"
                src={isMobile ? bg1 : bg}
                alt="Pandemic Coin bg"
                width="auto"
                height="auto"
                className={`absolute  ${isMobile ? "opacity-20 h-screen" : ""}  object-cover w-screen bottom-0 top-[-100px] left-0`}

            />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                className="text-center p-[130px_0_140px]">

                <Tilt className="track-on-window" trackOnWindow={true}>
                    <Image
                        data-aos="fade-in"
                        src={logo}
                        alt="Pandemic Coin Logo"
                        className="mx-auto w-[150px] md:w-[223px] drop-shadow-2xl "
                    />
                </Tilt>
                <motion.h1

                    data-aos="fade-in"
                    className="text-[#FFF] md:text-[76px] text-[36px] mt-[10px] font-normal leading-[139.5%] capitalize">
                    The Pandemic Coin
                </motion.h1>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="pri-btn md:mt-[35px] mt-[20px] block transition-all mx-auto w-[150px] md:w-[201px] text-white"
                    data-aos="fade-in"
                >
                    Invest now
                </motion.button>
            </motion.div>
            {/* <div className="h-48 rounded-xl bg-black w-10/12 mx-auto"></div> */}
        </div>
    );
}
