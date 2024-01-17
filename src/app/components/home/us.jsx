import { teamData } from "../../../data/team-data";
import Image from "next/image";
import TeamMemberCard from "../common/team-member-card";
import DynamicTitle from "../utils/dynamic-title";
import { motion } from "framer-motion";
import azImage from "../../../assets//founder_1.jpeg";
import { FaArrowRightLong, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export default function MiniAboutUs() {
  const TeamCardVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
    focus: {
      scale: 1.05,
      border: "2px solid #ddd",
    },
    tap: {
      opacity: 0.8,
      duration: 0.1,
    },
  };
  return (
    <div className="relative pb-[50px]">
      <DynamicTitle title="Our Team" description="" />

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

      <div
        data-aos="fade-in"
        className="grid md:grid-cols-3 max-w-[1100px] mx-auto grid-col-1 md:gap-[60px] gap-[30px] m-6 justify-center"
      >
        {teamData.map((item, index) => (
          <TeamMemberCard key={index} {...item} />
        ))}
      </div>
      <div className="w-full flex justify-end px-[20px] md:px-[100px]">
        <Link
          className="flex gap-3 text-[20px] justify-center text-white w-fit items-center bg-[#BB1A37] px-[20px] md:px-[30px] py-[10px] md:py-[20px]"
          href={"/about"}
          target="_blank"
          passHref
        >
          Know More <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
}
