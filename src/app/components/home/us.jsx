import { teamData } from "@/data/team-data";
import Image from "next/image";
import TeamMemberCard from "../common/team-member-card";
import avt from "../../../assets/bg.png";
import DynamicTitle from "../utils/dynamic-title";

export default function MiniAboutUs() {
    return (
        <div className="relative">
            <DynamicTitle title="Our Team" description="WHO WE ARE" />
            <div className="flex items-center justify-center text-center flex-col mt-8">
                <Image
                    className="mx-auto bg-pdc-d-gray rounded-2xl "
                    width={300}
                    height={300}
                    src={avt}
                    quality={100}
                    alt="Pandemic Coin Logo"
                />
                <div className="my-4">
                    <h1 className="text-2xl">Founder</h1>
                    <p className="opacity-60">AZ</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 m-6 my-12">
                {teamData.slice(0, 3).map((item, index) => (
                    <TeamMemberCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
