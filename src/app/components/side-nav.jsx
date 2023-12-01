"use client";

import Link from "next/link";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
export default function SideNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    return (
        <div className="fixed flex flex-col top-0 md:w-16 pc left-0 p-4 bg-zinc-900/60 backdrop-blur-xl border-e h-screen border-slate-800">
            {isMenuOpen && (
                <button onClick={() => setIsMenuOpen(false)}>
                    <RiMenu2Line />
                </button>
            )}
        </div>
    );
}
