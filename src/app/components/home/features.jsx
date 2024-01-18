import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import feature1 from "../../../assets/features/feat1.png";
import feature2 from "../../../assets/features/feat2.png";
import feature3 from "../../../assets/features/feat3.png";
import feature4 from "../../../assets/features/feat4.png";
import feature5 from "../../../assets/features/feat5.png";
import feature6 from "../../../assets/features/feat6.png";
import DynamicTitle from "../utils/dynamic-title";
import { motion } from "framer-motion";
import HoverEffect from "./MouseShine";

const Feature = () => {
  const features = [
    {
      number: "#01",
      title: "Underground Shelters with Provisions",
      description:
        "The concept of underground Community Shelters serves as a safety net against potential conflicts or geopolitical escalations worldwide. ",
      imageUrl: feature1,
      backgroundColor: "bg-[#3A3A3A]",
      color: "text-[#342CB2]",
    },
    {
      number: "#02",
      title: "Blockchain Security and Transparency",
      description:
        "The platform operates on a secure and transparent blockchain network, ensuring the integrity and immutability of transactions.",
      imageUrl: feature2,
      backgroundColor: "bg-gradient-to-b from-[#140E7B17] to-[#140E7B17]",
      color: "text-[#342CB2]",
    },
    {
      number: "#03",
      title: "Financing and Trading Opportunities",
      description:
        "Pandemic Coin enables users to trade their Pandemic Coins on various cryptocurrency exchanges, offering liquidity and trading opportunities. ",
      imageUrl: feature3,
      backgroundColor: "bg-[#3A3A3A]",
      color: "text-[#342CB2]",
    },
    {
      number: "#04",
      title: "PEN App Connectivity",
      description:
        "The Pandemic Coin ecosystem is augmented with the PEN (Pandemic Emergency Network) app, connecting individuals directly to the platform. ",
      imageUrl: feature4,
      backgroundColor: "bg-gradient-to-b from-[#140E7B17] to-[#140E7B17]",
      color: "text-[#342CB2]",
    },
    {
      number: "#05",
      title: "Integration with Commercial Real Estate Projects",
      description:
        "Pandemic Coin's strategy extends beyond underground shelters, venturing into overground commercial real estate projects to establish a multi-faceted and sustainable approach.",
      imageUrl: feature5,
      backgroundColor: "bg-[#3A3A3A]",
      color: "text-[#342CB2]",
    },
    {
      number: "#06",
      title: "Pandemic Food Voucher (PDFV)",
      description:
        "Pandemic Coin's groundbreaking NFT feature, the Pandemic Food Voucher (PDFV), is a pivotal element enhancing disaster preparedness. ",
      imageUrl: feature6,
      backgroundColor: "bg-gradient-to-b from-[#140E7B17] to-[#140E7B17]",
      color: "text-[#342CB2]",
    },
  ];

  return (
    <section className="body-font">
      <div className="container relative px-[0%] mx-auto">
        <DynamicTitle
          title="key features"
          customClass="tracking-[-3.36px]"
          description=""
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
          className="flex flex-wrap -m-4 relative z-10 "
        >
          <Marquee>
            {features.map((feature, index) => (
              <div
                data-aos="fade-in"
                key={index}
                className={`p-4 w-[360px] pt-[100px] md:w-[420px] flex`}
              >
                <div
                  className={`overflow-hidden flex-1 hover:translate-y-[-50px] hover:scale-105 transition duration-[0.4s] ease-in rounded-[20px] border-[0.873px] border-[solid] border-[#342CB2] border-opacity-50 ${feature.backgroundColor}`}
                >
                  <HoverEffect>
                    <div className="p-6 py-12 text-center w-full">
                      <p
                        className={` font-bold text-4xl ${feature.color} font-semibold mb-3  `}
                      >
                        {feature.number}
                      </p>
                      <h1 className="text-[30px] h-[100px] inline-flex items-center justify-center font-medium text-[#F4F1F8] mb-3 font_cat uppercase">
                        {feature.title}
                      </h1>
                      <p className="leading-relaxed mb-3 text-gray-500">
                        {feature.description}
                      </p>
                    </div>

                    <div className="h-full w-full">
                      <Image
                        width={720}
                        height={600}
                        className="w-full h-full "
                        src={feature.imageUrl}
                        alt="blog"
                      />
                    </div>
                  </HoverEffect>
                </div>
              </div>
            ))}
          </Marquee>
        </motion.div>
        <div className="bg-gradient-to-tr from-[#FF071750] to-[#342CB250] absolute w-[900px] blur-[120px] z-0 rounded-full h-[900px] -top-[50%] -right-[30%]"></div>
        <div className="bg-gradient-to-tr from-[#FF071740] to-[#342CB240] absolute w-[500px] blur-[120px] z-0 rounded-full h-[500px] -bottom-[60%] -left-[10%]"></div>
      </div>
    </section>
  );
};

export default Feature;
