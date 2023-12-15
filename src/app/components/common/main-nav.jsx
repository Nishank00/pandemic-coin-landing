"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { IoIosClose, IoLogoWhatsapp } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Nav() {
    const pathName = usePathname();
    const [open, setOpen] = useState(false);

    const links = [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/about" },
        { title: "AI", path: "/ai" },
        { title: "Media", path: "/media" },
        { title: "Communities", path: "/communities" },
        { title: "Contact Us", path: "/contact" },
    ];

    return (
        <>
            <div className="left-0 pc md:hidden lg:flex w-full topppp px-8 top-0 items-center bg-pdc-d-gray font-semibold justify-between">
                <Link href="/">
                    {/* <h1 className="text-white font-bold text-2xl">PDC</h1> */}
                    <Image
                        className="mx-auto rounded-[30px]"
                        width={60}
                        height={60}
                        src={logo}
                        quality={100}
                        alt="logo"
                    />
                </Link>
                <div className="flex">
                    {links.map((link, index) => {
                        return (
                            <div key={link.path} className="relative px-8 py-6">
                                <Link
                                    className=""
                                    href={link.path}
                                    key={index}
                                >
                                    <span className={`font-light anim-slo`}>
                                        {link.title}
                                    </span>
                                </Link>
                                <div
                                    className={` ${pathName === link.path ? "w-1/4" : "w-0"
                                        } absolute anim bottom-0 h-[1.5px] rounded-xl bg-white`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <motion.button
                aria-label="open nav bar"
                whileTap={{ scale: 0.8 }}
                onClick={() => setOpen(!open)}
                className="bg-pdc-blue mob w-16 h-16 rounded-full fixed bottom-8 right-8 text-white flex justify-center items-center toppppp drop-shadow-lg hover:drop-shadow-2xl"
            >
                <HiOutlineMenuAlt3 size={"26px"} />
            </motion.button>

            <div
                className={`bg-white mob anim-slo fixed w-screen toppppp h-screen flex flex-col gap-3 justify-center items-center ${open
                    ? "translate-x-0 scale-x-100 pointer-events-auto"
                    : "scale-x-0 pointer-events-none translate-x-full"
                    } `}
            >
                {links.map((link, index) => {
                    return (
                        <Link
                            onClick={() => setOpen(false)}
                            className="text-center text-xl anim hover:text-pri w-full py-4 anim-slo"
                            href={link.path}
                            key={index}
                        >
                            {link.title}
                        </Link>
                    );
                })}

                <Link
                    href="https://wa.me/919895609285"
                    className="bg-pri group p-3 w-full mt-4 text-center gap-2 flex justify-center items-center  text-white"
                >
                    <IoLogoWhatsapp size={"22px"} />
                    <span className="mb-1">+91 98956 09285</span>
                </Link>

                <motion.button
                    aria-label="Close navbar"
                    whileTap={{ scale: 0.8 }}
                    onClick={() => setOpen(!open)}
                    className="bg-sec w-16 mob h-16 rounded-full fixed bottom-16 right-8 text-white flex justify-center items-center toppp drop-shadow-xl hover:drop-shadow-2xl"
                >
                    <IoIosClose size={"26px"} />
                </motion.button>
            </div>
        </>
    );
}
