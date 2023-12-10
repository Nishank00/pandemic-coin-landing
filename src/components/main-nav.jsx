import Image from "next/image";
import Link from "next/link";
import { FaWallet } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function MainNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

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
            if (!target.closest(".menu-btn") && !target.closest(".nav-links")) {
                setMenuOpen(false);
            }
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`bg-[#1A1B25] text-white ${menuOpen ? "md:shadow-lg md:rounded-xl md:border md:mx-2 md:mt-0" : ""}`}>
            <div className="items-center mx-auto px-4 md:flex md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                    <Link href="/">
                        <a>
                            <Image
                                className="w-16 ml-3 object-contain"
                                src="/assets/logo.png"
                                alt="logo"
                                width={70}
                                height={70}
                            />
                        </a>
                    </Link>
                    <div className="md:hidden transition-all">
                        <button className="menu-btn transition-all hover:text-gray-100" onClick={toggleMenu}>
                            {menuOpen ? (
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
                    className={`flex items-center justify-end transition-all w-full mt-8 md:mt-0 md:flex ${menuOpen ? "flex" : "hidden"
                        } nav-links`}
                >
                    <ul className="justify-center md:justify-end w-full items-center space-y-6 mb-8 transition-all md:flex md:space-x-12 md:space-y-0">
                        {navigation.map((item, idx) => (
                            <li
                                key={idx}
                                className={`text-slate-400 hover:text-white anim ${router.pathname === item.path ? "active" : ""
                                    }`}
                                id="nav-link"
                            >
                                <Link href={item.path}>
                                    <a onClick={toggleMenu}>{item.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
