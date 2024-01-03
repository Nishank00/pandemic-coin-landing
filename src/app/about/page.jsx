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
            <div className="flex items-center justify-center text-center mb-[30px] flex-col">
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
            <div className="relative grid md:grid-cols-3 max-w-[1100px] mx-auto grid-col-1 md:gap-[60px] gap-[30px]">
                <div className="absolute top-[40%] translate-y-[-55%] left-[-20%] bg-pdc-blue blur-[200px] opacity-90 z-0 md:opacity-100 rounded-full w-[500px] h-[500px]"></div>
                {teamData.map((item, index) => (
                    <TeamCard key={index} {...item} />
                ))}
            </div>
            <Advisors title="Advisors" />
            <Advisors title="Specialists" />

            <div className="pb-[100px]">
                <Partners />
            </div>

            <JoinUs />
        </div>
    );
}
