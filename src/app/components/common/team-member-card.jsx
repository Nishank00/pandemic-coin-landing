import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaLink } from "react-icons/fa6";
import { motion } from "framer-motion";

const TeamCardVariants = {
    hover: {
        scale: 1.1,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
    focus: {
        scale: 1.05,
        border: "2px solid #ddd",
    },
    tap: {
        opacity: 0.8,
        duration: 0.1,
    },
};

const TeamCard = ({ img, name, desc, role, linkedin, link }) => {
    return (
        <motion.div
            className="rounded-[20px] relative z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            variants={TeamCardVariants}
            whileHover={{ y: 5, scale: 0.95, duration: 0.15 }}
            whileFocus={{ y: 5, scale: 0.95, duration: 0.15 }}
            whileTap={{ y: 5, scale: 0.95, duration: 0.15 }}
        >
            <Image
                src={img}
                className="mx-auto bg-pdc-d-gray h-[273px] rounded-[20px]"
                width={324}
                height={273}
                alt={name}
                style={{
                    borderRadius: "30px",
                    animation: `hover ${TeamCardVariants.hover.animationDuration} ease-in-out`,
                    transformOrigin: "center",
                }}
            />
            <div className="p-2 w-[324px] mx-auto">
                <div className="">
                    <motion.h1
                        className="font_cat text-[20px] text-[#7B7E98] not-italic font-normal leading-[normal] tracking-[0.8px] mb-1"
                        style={{ opacity: 1, transition: "opacity 0.2s ease-in-out" }}
                        animate={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                    >
                        {name}
                    </motion.h1>
                    <motion.p className="text-[23px]" style={{ opacity: 1 }} whileHover={{ opacity: 0.7 }}>
                        {role}
                    </motion.p>
                </div>
                {/* <motion.p className="mt-4" style={{ opacity: 1 }} whileHover={{ opacity: 0.8 }}>
                    {desc}
                </motion.p> */}
                <div className="flex gap-3 mt-6">
                    <Link
                        className="bg-pdc-blue flex w-12 h-12 rounded-full justify-center items-center"
                        href={link}
                    >
                        <FaLink />
                    </Link>
                    <Link
                        className="bg-pdc-blue flex w-12 h-12 rounded-full justify-center items-center"
                        href={linkedin}
                    >
                        <FaLinkedinIn />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default TeamCard;