"use client";
import { useEffect, useState } from "react";
import Advisor from "../common/advisor-card";
import Marquee from "react-fast-marquee";
import { partnerData } from "@/data/partners-data";
import DynamicTitle from "../utils/dynamic-title";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Partners = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const controls = useAnimation();
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (inView && !animated) {
            controls.start("show");
            setAnimated(true);
        }
    }, [inView, animated, controls]);

    const marqueeVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const advisorVariants = {
        hidden: { opacity: 0, x: -30 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
            },
        },
    };

    return (
        <section className="relative body-font">
            <div className="bg-[#342CB250] absolute w-[200px] blur-[120px] rounded-full h-[200px] top-[5%] -left-[5%] z-0"></div>
            <div className="container md:px-5 px-0 mx-auto" ref={ref}>
                <DynamicTitle title="Our Partners" className="tracking-[-3.36px]" />
                <motion.div
                    variants={marqueeVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <Marquee pauseOnHover>
                        {partnerData.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={advisorVariants}
                                className="inline-block mx-4"
                            >
                                <Advisor title={member.title} />
                            </motion.div>
                        ))}
                    </Marquee>
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
