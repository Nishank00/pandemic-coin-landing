import React from 'react'
import Link from "next/link";
import { FaLink, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";

const TeamMemberCard = ({ img, name, role, desc, link }) => (
    <div className="bg-zinc-900 rounded-xl">
        <Image src={img} className="w-full" alt="team" />
        <div className="p-6 px-8">
            <div>
                <h1 className="text-2xl">{name}</h1>
                <p className="opacity-60">{role}</p>
            </div>
            <p className="mt-4">{desc}</p>
            <div className="flex gap-3 mt-6">
                <Link className="bg-zinc-800 flex w-12 h-12 rounded-full justify-center items-center" href={link}>
                    <FaLink />
                </Link>
                <Link className="bg-zinc-800 flex w-12 h-12 rounded-full justify-center items-center" href={link}>
                    <FaLinkedinIn />
                </Link>
            </div>
        </div>
    </div>
);


export default TeamMemberCard