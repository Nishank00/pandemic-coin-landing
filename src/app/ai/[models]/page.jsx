"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function Ai() {
  const pathname = usePathname();
  const match = pathname.match(/\/ai\/model(\d+)/);
  const modelNumber = match ? match[1] : null;
  // console.log('modelNumber-', modelNumber);
  const modelName = "model" + modelNumber;

  const modelData = {
    model1: {
      imgPath: "/images/ai01.jpeg",
      title: "AI for Human health scanning: HealthScan ",
      description:
        "Pandemic Coin introduces AI-driven body scanners with 70+ sensors, analyzing 50 million data points for early health detection, prioritizing preventive healthcare accessibility and affordability.",
      features: [
        "Maximize productivity and growth",
        "Speed past your competition",
        "Learn the top techniques",
      ],
    },
    model2: {
      imgPath: "/images/ai02.jpeg",
      title:
        "AI based early pandemic signal indicator for preparedness: Pandemix ",
      description:
        "Pandemic Coin innovates with an AI-powered early signal indicator, swiftly identifying pandemic threats through vast data analysis, empowering proactive measures for disaster resilience and personal security.",
      features: [
        "Automated task management workflow",
        "Detailed analytics for your data",
        "Some awesome integrations",
      ],
    },
    model3: {
      imgPath: "/images/ai03.jpeg",
      title: "AI based security Radar system:SecuRadar ",
      description:
        "Pandemic Coin plans an AI-based security radar to monitor underground shelters, detecting unauthorized access and external threats, integrating with emergency protocols for swift safety guidance, ensuring peace of mind for community members.",
      features: [
        "Maximize productivity and growth",
        "Speed past your competition",
        "Learn the top techniques",
      ],
    },
    model4: {
      imgPath: "/images/ai04.jpeg",
      title: "AI integrated Alternative Energy and Ventilation system: AIES ",
      description:
        "Pandemic Coin integrates AI into alternative energy and ventilation systems for disaster-resilient living, optimizing renewable energy and ensuring air quality in underground shelters, prioritizing safety and sustainability.",
      features: [
        "Automated task management workflow",
        "Detailed analytics for your data",
        "Some awesome integrations",
      ],
    },
  };

  const selectedModelData = modelData[modelName] || modelData.model1;

  return (
    <div
      style={{
        backgroundImage: `url(${selectedModelData.imgPath})`,
      }}
      className="overflow-hidden pt-0 py-[30px] md:pt-[96px] h-fit md:min-h-screen bg-cover bg-no-repeat bg-opacity-50"
    >
      <section className="px-2 py-32 md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center justify-center text-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block text-[#BB1A37] xl:inline">
                    {selectedModelData?.title}
                  </span>
                </h1>
                <p className="mx-auto text-base text-yellow-200 sm:max-w-md lg:text-xl md:max-w-3xl">
                  {selectedModelData?.description}
                </p>
                <div className="relative flex flex-col justify-center sm:flex-row sm:space-x-4">
                  <a
                    href="/purchase"
                    className="flex justify-center items-center w-full px-6 py-3 mb-3 group text-lg text-white bg-[#BB1A37] rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto transition-all ease duration-300"
                  >
                    Secure Shelter
                  </a>
                  <a
                    href="#_"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Buy Tokens
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  hidden pt-7 pb-7 md:pt-20 md:pb-24">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src="https://cdn.devdojo.com/images/december2020/productivity.png"
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
            />
          </div>

          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Boost Productivity
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Build an atmosphere that creates productivity in your organization
              and your company culture.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              {selectedModelData?.features.map((feature, index) => (
                <li
                  key={index}
                  className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Automated Tasks
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Save time and money with our revolutionary services. We are the
              leaders in the industry.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Automated task management workflow
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Detailed analytics for your data
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>{" "}
                Some awesome integrations
              </li>
            </ul>
          </div>

          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img
              src="https://cdn.devdojo.com/images/december2020/settings.png"
              className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
