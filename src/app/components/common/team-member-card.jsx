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
{/* <div className="flip ">
    <div className="front flex items-center justify-center text-center  w-fit mx-auto flex-col">
        <Image
            className="mx-auto bg-pdc-d-gray h-[324px] rounded-[20px]"
            width={324}
            height={324}
            src={azImage}
            quality={100}
            alt="Pandemic Coin Logo"
            data-aos="fade-in"
        />
        <div data-aos="fade-in" className="my-4">
            <h1 className="font_cat text-[20px] text-[#7B7E98] not-italic font-normal leading-[normal] tracking-[0.8px]">Founder</h1>
            <p className="text-[23px]">AZ</p>
        </div>
    </div>
    <div className="back">
        <div className="h-full flex flex-col justify-center items-center">
            <div className="text-center">
                <div className="text-[40px]">AZ</div>
                <div className="text-[25px]">Founder</div>
            </div>
            <p className="text-center mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ullam tempore possimus ea odit nisi pariatur recusandae? Dolorem sequi, eum eveniet et animi sit debitis hic ab pariatur dolores alias!</p>
        </div>
    </div>
</div> */}

const TeamCard = ({ img, name, desc, role, linkedin, link }) => {
    return (
        <div
            className="flip rounded-[20px] relative z-30"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // variants={TeamCardVariants}
        // whileHover={{ y: 5, scale: 0.95, duration: 0.15 }}
        // whileFocus={{ y: 5, scale: 0.95, duration: 0.15 }}
        // whileTap={{ y: 5, scale: 0.95, duration: 0.15 }}
        >
            <div className="front flex items-center justify-center text-center  w-fit mx-auto flex-col">
                <Image
                    src={img}
                    className="mx-auto bg-pdc-d-gray h-[324px] object-cover object-top rounded-[20px] grayscale"
                    width={324}
                    height={324}
                    alt={name}
                    objectFit="contain"
                    style={{
                        borderRadius: "30px",
                        animation: `hover ${TeamCardVariants.hover.animationDuration} ease-in-out`,
                        transformOrigin: "center",
                    }}
                />
                <div className="p-2 w-[324px] mx-auto ">
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
                    <div className="flex gap-3 mt-6">

                        <Link
                            className="bg-pdc-blue flex w-10 h-10 rounded-md  justify-center items-center"
                            href={linkedin}
                        >
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="back relative">
                <div className="h-full pb-[40px] flex flex-col justify-center items-center">
                    <div className="text-center">
                        <div className="text-[40px] font_cat">{name}</div>
                        <div className="text-[25px]">{role}</div>
                    </div>
                    <p className="text-center mt-3 max-h-[250px] p_scroll overflow-y-auto">{desc}</p>
                </div>
                <div className="absolute left-[8px] bottom-[8px]">
                    <Link
                        className="bg-pdc-blue flex w-10 h-10 rounded-md  justify-center items-center"
                        href={linkedin}
                    >
                        <FaLinkedinIn />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;