import Image from "next/image";

//imgs
import DynamicTitle from "../utils/dynamic-title";
import whowe from "../../../assets/whowe.webp";
import { FaPlay } from 'react-icons/fa6'
import { motion } from "framer-motion";
 
export default function WhoWeAreSection() {
    return (
        <div className="container px-5 py-24 mx-auto">
            <DynamicTitle title="Who We Are" description="OUR INTRODUCTION VIDEO" />

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                className="rounded-[30px] relative w-4/6 mx-auto h-80 overflow-hidden">
                <Image
                    src={whowe}
                    className="mx-auto object-cover object-center w-full rounded-2xl "
                    alt="placeholder"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-gray-800 opacity-50">
                    <div className="absolute top-[50%] left-[50%] w-[60px] h-[60px] translate-x-[-50%] rounded-full translate-y-[-50%] hover:scale-125 transition-all z-10 flex items-center justify-center text-center bg-[#fff]">
                        <FaPlay className='text-[#111] text-[32px] flex items-center justify-center text-center' />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
