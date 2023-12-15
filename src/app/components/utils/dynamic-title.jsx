"use client"

import {
    motion,
    AnimatePresence,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function DynamicTitle({ title, description }) {
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
            <div className="w-[90%] mx-auto py-16 mt-12 text-center">
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
                }} className="text-3xl md:text-5xl text-center">{title}</motion.h1>
                <div className="border-b mt-3 mb-6 border-slate-700 w-[25%] mx-auto" />
                <p className="mt-6 text-xs md:text-sm uppercase tracking-widest">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
