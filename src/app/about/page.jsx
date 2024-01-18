"use client";
import Image from "next/image";
import AboutHead from "../components/about/about-head";
import TeamCard from "../components/common/team-member-card";
import Partners from "../components/home/partners";
import JoinUs from "../components/about/join-us";
import { teamData } from "../../data/team-data";
import azImage from "../../assets//founder_1.jpeg";
import Advisor from "../components/common/advisor-card";

export default function About() {
  const advisors = [
    { title: "AI Head / Advisor", url: "#", logo: "" },
    { title: "Construction Head", url: "#", logo: "" },
    { title: "Blockchain Security Head", url: "#", logo: "" },
    { title: "Healthcare Manager", url: "#", logo: "" },
    { title: "Supply head", url: "#", logo: "" },
    { title: "Head of Town planning", url: "#", logo: "" },
    { title: "License Manager", url: "#", logo: "" },
    { title: "Public Relations Head", url: "#", logo: "" },
    { title: "Legal Head", url: "#", logo: "" },
    { title: "Transportation Head", url: "#", logo: "" },
    { title: "Business Development -Head of Community", url: "#", logo: "" },
    { title: "Head of Communication", url: "#", logo: "" },
    { title: "Accounts Head", url: "#", logo: "" },
    { title: "SEO Manager", url: "#", logo: "" },
    { title: "Translation Manager", url: "#", logo: "" },
    { title: "Marketing Manager", url: "#", logo: "" },
    { title: "Sales Manager", url: "#", logo: "" },
    { title: "Pandemic advisor", url: "#", logo: "" },
    { title: "War security advisor", url: "#", logo: "" },
    { title: "Atomic weapons advisor", url: "#", logo: "" },
    { title: "Environment / Weather advisor", url: "#", logo: "" },
    { title: "Water security advisor", url: "#", logo: "" },
    { title: "Food preservation & hygiene advisor", url: "#", logo: "" },
    { title: "Partnership advisor", url: "#", logo: "" },
    { title: "Sales advisor", url: "#", logo: "" },
    { title: "Fund advisor", url: "#", logo: "" },
  ];

  return (
    <div className=" bg-pdc-d-gray overflow-hidden">
      <AboutHead />
      <div className="df">
        <div className="flip ">
          <div className="front flex items-center justify-center text-center  w-fit mx-auto flex-col">
            <Image
              className="mx-auto bg-pdc-d-gray object-cover h-[324px] rounded-[20px]"
              width={324}
              height={324}
              src={azImage}
              quality={100}
              alt="Pandemic Coin Logo"
              data-aos="fade-in"
            />
            <div data-aos="fade-in" className="my-4">
              <h1 className="font_cat text-[20px] text-[#7B7E98] not-italic font-normal leading-[normal] tracking-[0.8px]">
                Founder
              </h1>
              <p className="text-[23px]">AZ</p>
            </div>
          </div>
          <div className="back">
            <div className="h-full min-w-[284px] flex flex-col justify-center items-center">
              <div className="text-center">
                <div className="text-[40px]">AZ</div>
                <div className="text-[25px]">Founder</div>
              </div>
              <p className="text-center mt-3"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative grid md:grid-cols-3  max-w-[1100px] mx-auto grid-col-1 md:gap-[60px] gap-[30px]">
        <div className="absolute top-[40%] translate-y-[-55%] left-[-20%] bg-pdc-blue blur-[200px] opacity-90 z-0 md:opacity-100 px-2 b1 rounded-full w-[500px] h-[500px]"></div>
        {teamData.map((item, index) => (
          <TeamCard key={index} {...item} />
        ))}
      </div>

      {advisors.map((member, index) => (
        <Advisor key={index} member={member} />
      ))}

      <div className="pb-[100px]">
        <Partners />
      </div>

      <JoinUs />
    </div>
  );
}
