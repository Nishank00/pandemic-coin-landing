"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";
import { FaWallet } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


export default function MainNav() {
    const [state, setState] = useState(false);
    const pathname = usePathname();

    const navigation = [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/about" },
        { title: "AI", path: "/ai" },
        { title: "Media", path: "/media" },
        { title: "Communities", path: "/communities" },
        { title: "Contact Us", path: "/contact" },
    ];

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, []);

    return (
        <nav
            className={`bg-[#1A1B25] text-white md:text-sm ${state
                ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
                : ""
                }`}
        >
            <div className="gap-x-14 items-center mx-auto px-4 md:flex md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                    <Link href="/">
                        <Image
                            className="w-16 ml-3 object-contain"
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="menu-btn  hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {state ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className={`flex items-center justify-end w-full mt-8 md:mt-0 md:flex ${state ? "block" : "hidden"
                        } `}
                >
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-12 md:space-y-0">
                        {navigation.map((item, idx) => {
                            return (
                                <li
                                    key={idx}
                                    className={`text-slate-400 hover:text-white anim ${pathname === item.path ? "active" : ""
                                        }`}
                                    id="nav-link"
                                >
                                    <Link href={item.path} className="block">
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
