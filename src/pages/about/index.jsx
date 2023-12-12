import Image from "next/image";
import TeamMemberCard from "../../components/TeamMemberCard";
import Advisors from "../../components/Advisors";
import Partners from "../../components/Partners";
import Layout from "../../components/Layout";


export default function About() {
    const teamData = [
        {
            name: "Ahsan Usman",
            role: "Co-Founder & COO",
            desc: "Ahsan Usman is a distinguished professional with a comprehensive skill set",
            link: "https://sample.com",
            linkedin: "https://sample.com",
            img: '/assets/bg.png',
        },
        {
            name: "Asad Zeeshan",
            role: "Co-Founder & CEO / CMO",
            desc: "He is a distinguished professional with a comprehensive skill set",
            link: "https://sample.com",
            linkedin: "https://sample.com",
            img: '/assets/bg.png',
        },
        {
            name: "Abhayraj Gohil",
            role: "Cofounder & CTO",
            desc: "He is a distinguished professional with a comprehensive skill set",
            link: "https://sample.com",
            linkedin: "https://sample.com",
            img: '/assets/bg.png',
        }]

    return (
        <Layout>
            <h1 className="text-3xl md:text-5xl serif text-[#FB2525] mt-16 text-center px-6 w-full md:w-1/2 mx-auto">
                We are people who make up white paper_pandemic coin
            </h1>
            <p className="text-center w-full px-6 md:w-4/6 mx-auto mt-8">
                Embrace the serenity beneath the surface, where the whispers of nature harmonize with the heartbeat of your underground haven
            </p>
            <div className="flex items-center justify-center text-center flex-col mt-8">
                <Image className="mx-auto bg-white" width={300} height={300} src="/assets/logo-HQ.png" quality={100} alt="logo" />
                <div className="my-4">
                    <h1 className="text-2xl">Founder</h1>
                    <p className="opacity-60">AZ</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 m-6 my-12">
                {teamData.map((item, index) => (
                    <TeamMemberCard key={index} {...item} />
                ))}
            </div>
            <Advisors />
            <Partners />
        </Layout>
    );
}

