"use client"

import {
    motion,
    AnimatePresence,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function DynamicTitle({ title, description, descColor,customClass }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    const scaleX = useSpring(scrollYProgress, { stiffness: 500, damping: 150 });
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 5]);

    const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <div className="md:w-fit w-[90%] mx-auto py-10 md:py-16 mt-12 text-center">
                <motion.h1 initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: .4
                        }
                    },
                }} className={`text-[#FFF] text-[30px] md:text-[56px] not-italic font-light leading-[139.5%] capitalize text-center ${customClass ? customClass : ""}`}>{title}</motion.h1>
                <div className={`h-[1px] mt-3 mb-[22px] bg-slate-700 w-[50%] mx-auto`} />
                <p className={` ${descColor ? `text-[${descColor}]` : "text-[#FFF]"} text-center text-[14px] not-italic leading-[168%] uppercase tracking-[8px] font_cat`}>
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
