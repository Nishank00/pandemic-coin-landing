import { teamData } from "@/data/team-data";
import Image from "next/image";
import TeamMemberCard from "../common/team-member-card";
import avt from "../../../assets/bg.png";
import DynamicTitle from "../utils/dynamic-title";

export default function MiniAboutUs() {
    return (
        <div className="relative">
            <DynamicTitle title="Our Team" description="WHO WE ARE" />
            <div  data-aos="fade-in" className="flex items-center justify-center text-center flex-col">
                <Image
                    className="mx-auto bg-pdc-d-gray h-[273px] rounded-[20px]"
                    width={324}
                    height={273}
                    src={avt}
                    quality={100}
                    alt="Pandemic Coin Logo"
                />
                <div className="my-4">
                    <h1 className="font_cat text-[20px] text-[#7B7E98] not-italic font-normal leading-[normal] tracking-[0.8px]">Founder</h1>
                    <p className="text-[23px]">AZ</p>
                </div>
            </div>
            <div  data-aos="fade-in" className="flex md:flex-row flex-col md:gap-[60px] gap-[30px] m-6 justify-center">
                {teamData.slice(0, 3).map((item, index) => (
                    <TeamMemberCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
