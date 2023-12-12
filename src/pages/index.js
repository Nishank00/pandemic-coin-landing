import Image from "next/image";
import Webinars from "../components/Webinars";
import Feature from "../components/Feature";
import Community from "../components/Community";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import NewsGallery from "../components/NewsGallery";
import "chart.js/auto";
import Roadmap from "../components/Roadmap";
import Build from "../components/Build";
import CTA from "../components/CTA";
import Tokenomics from "../components/Tokenomics";
import TeamMemberCard from "../components/TeamMemberCard";
import Advisors from "../components/Advisors";
import Shelters from "../components/Shelters";
import MainNav from "../components/main-nav";
import Footer from "../components/footer";
import Layout from "../components/Layout";

export default function Home() {
  const teamData = [
    {
      name: "Ahsan Usman",
      role: "Co-Founder & COO",
      desc: "Ahsan Usman is a distinguished professional with a comprehensive skill set",
      link: "/",
      linkedin: "/",
      img: "/assets/bg.png",
    },
    {
      name: "Asad Zeeshan",
      role: "Co-Founder & CEO / CMO",
      desc: "He is a distinguished professional with a comprehensive skill set",
      link: "/",
      linkedin: "/",
      img: "/assets/bg.png",
    },
    {
      name: "Abhayraj Gohil",
      role: "Cofounder & CTO",
      desc: "He is a distinguished professional with a comprehensive skill set",
      link: "/",
      linkedin: "/",
      img: "/assets/bg.png",
    },
  ];

  return (
    <main className="relative overflow-x-hidden">
      <Layout>
        <Hero />
        <div className="bg-[#342CB24D] absolute w-[600px] blur-[120px] z-0 rounded-full h-[600px] -left-[25%]"></div>
        <WhoWeAre />
        <NewsGallery />
        <Feature />
        <Tokenomics />
        <Roadmap />
        <div className="relative">
          <h1 className="text-3xl md:text-5xl serif text-[#FB2525] mt-16 text-center w-full md:w-1/2 mx-auto">
            We are people who make up white paper_pandemic coin
          </h1>
          <p className="text-center w-4/6 mx-auto mt-8">
            Embrace the serenity beneath the surface, where the whispers of
            nature harmonize with the heartbeat of your underground haven
          </p>
          <div className="flex items-center justify-center text-center flex-col mt-8">
            <Image
              className="mx-auto bg-white rounded-2xl "
              width={300}
              height={300}
              src="/assets/logo-HQ.png"
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
        <Advisors />
        <Shelters />
        <Webinars />
        <Community />
        {/* <Deepdive /> */}
        <Testimonials />
        <Build />
        <div className="bg-[#342CB233] absolute w-[600px] blur-[120px] z-0 rounded-full h-[600px] bottom-[0%] -right-[25%]"></div>
        <CTA />
      </Layout>
    </main>
  );
}
