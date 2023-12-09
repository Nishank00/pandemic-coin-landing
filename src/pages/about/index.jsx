import Image from "next/image";
import { teamData } from "../data/team-data";
import TeamMemberCard from "../components/TeamMemberCard";
import Advisors from "../components/Advisors";
import Partners from "../components/Partners";

export default function About() {
    return (
        <div>
            <h1 className="text-3xl md:text-5xl serif text-[#FB2525] mt-16 text-center w-1/2 mx-auto">
                We are people who make up white paper_pandemic coin
            </h1>
            <p className="text-center w-4/6 mx-auto mt-8">
                Embrace the serenity beneath the surface, where the whispers of nature harmonize with the heartbeat of your underground haven
            </p>
            <div className="flex items-center justify-center text-center flex-col mt-8">
                <Image className="mx-auto bg-white" width={300} src="/assets/logo.png" quality={100} alt="logo" />
                <div className="my-4">
                    <h1 className="text-2xl">Founder</h1>
                    <p className="opacity-60">AZ</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 m-6 my-12">
                {teamData.map((item, index) => (
                    <TeamMemberCard key={index} {...item} />
                ))}
            </div>
            <Advisors />
            <Partners />
        </div>
    );
}
