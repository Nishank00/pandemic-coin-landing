import { teamData } from "../../../data/team-data";
import Image from "next/image";
import TeamMemberCard from "../common/team-member-card";
import avt from "../../../assets/bg.png";
import DynamicTitle from "../utils/dynamic-title";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedinIn, FaLink } from "react-icons/fa6";
import azImage from "../../../assets/az_image.png";

export default function MiniAboutUs() {
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
    return (
        <div className="relative">
            <DynamicTitle title="Our Team" description="WHO WE ARE" />
            <motion.div
                whileHover={{ y: 5, scale: 0.95, duration: 0.15 }}
                whileFocus={{ y: 5, scale: 0.95, duration: 0.15 }}
                whileTap={{ y: 5, scale: 0.95, duration: 0.15 }}

                className="flex items-center justify-center text-center  w-fit mx-auto flex-col">
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
            </motion.div>
            <div data-aos="fade-in" className="grid md:grid-cols-3 max-w-[1100px] mx-auto grid-col-1 md:gap-[60px] gap-[30px] m-6 justify-center">
                {teamData.map((item, index) => (
                    <TeamMemberCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
