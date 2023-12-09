import React from 'react'
import { FaLink, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import Link from 'next/link';

const TeamMemberCard = ({ img, name, role, desc, link }) => (
    <div className="bg-zinc-900 rounded-[30px] overflow-hidden">
        <Image src={img} className="w-full" width={600} height={400} alt="team" />
        <div className="p-6 px-8">
            <div>
                <h1 className="text-2xl">{name}</h1>
                <p className="opacity-60">{role}</p>
            </div>
            <p className="mt-4">{desc}</p>
            <div className="flex gap-3 mt-6">
                <Link className="bg-zinc-800 flex w-12 h-12 rounded-full justify-center items-center" href={link}>
                    <a><FaLink /></a>
                </Link>
                <Link className="bg-zinc-800 flex w-12 h-12 rounded-full justify-center items-center" href={link}>
                    <a><FaLinkedinIn /></a>
                </Link>
            </div>
        </div>
    </div>
);


export default TeamMemberCard