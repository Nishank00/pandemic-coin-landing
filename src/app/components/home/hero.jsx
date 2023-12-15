import Image from "next/image";

//imgs
import logo from "../../../assets/logo-big.png";
import bg from "../../../assets/landing-bg.png";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <div>
            <Image
                src={bg}
                alt="Pandemic Coin bg"
                width="auto"
                height="auto"
                className="absolute opacity-20 h-screen object-cover w-screen bottt top-0 left-0"
            />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
                className="text-center py-24">
                <Image
                    src={logo}
                    alt="Pandemic Coin Logo"
                    className="mx-auto w-36 drop-shadow-2xl mt-8"
                />
                <motion.h1
                    className="text-4xl mt-6 lg:text-6xl">The Pandemic Coin</motion.h1>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="pri-btn mt-6 block transition-all mx-auto w-fit text-white"
                >
                    Invest now
                </motion.button>
            </motion.div>
            {/* <div className="h-48 rounded-xl bg-black w-10/12 mx-auto"></div> */}
        </div>
    );
}
