"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import AboutHead from "../components/about/about-head";
import TeamCard from "../components/common/team-member-card";
import Partners from "../components/home/partners";
import Advisors from "../components/about/advisor";
import JoinUs from "../components/about/join-us";
import { teamData } from "@/data/team-data";
import asset from "../../assets/bg.png";


export default function About() {
    return (
        <div className=" bg-pdc-d-gray overflow-hidden">
            <AboutHead />
            <div className="flex items-center justify-center text-center flex-col">
                <Image
                    className="mx-auto rounded-[30px]"
                    width={300}
                    height={300}
                    src={logo}
                    quality={100}
                    alt="logo"
                />
                <div className="my-4">
                    <h1 className="text-2xl">Founder</h1>
                    <p className="opacity-60">AZ</p>
                </div>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mx-6">
                <div className="absolute top-[40%] translate-y-[-55%] left-[-20%] bg-pdc-blue blur-[200px] opacity-90 z-0 md:opacity-100 rounded-full w-[500px] h-[500px]"></div>
                {teamData.map((item, index) => (
                    <TeamCard key={index} {...item} />
                ))}
            </div>
            <Advisors title="Advisors" />
            <Advisors title="Specialists" />
            <Partners />
            <JoinUs />
        </div>
    );
}
