"use client";
import Image from "next/image";
import model1 from "../../../assets/ai/5.png";
import model2 from "../../../assets/ai/2.png";
import model3 from "../../../assets/ai/5.png";
import model4 from "../../../assets/ai/2.png";
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
      image: model1,
      title: "Model 1",
      description:
        "Build an atmosphere that creates productivity in your organization and your company culture.",
      features: [
        "Maximize productivity and growth",
        "Speed past your competition",
        "Learn the top techniques",
      ],
    },
    model2: {
      image: model2,
      title: "Model 2",
      description:
        "Save time and money with our revolutionary services. We are the leaders in the industry.",
      features: [
        "Automated task management workflow",
        "Detailed analytics for your data",
        "Some awesome integrations",
      ],
    },
    model3: {
      image: model3,
      title: "Model 3",
      description:
        "Build an atmosphere that creates productivity in your organization and your company culture.",
      features: [
        "Maximize productivity and growth",
        "Speed past your competition",
        "Learn the top techniques",
      ],
    },
    model4: {
      image: model4,
      title: "Model 4",
      description:
        "Save time and money with our revolutionary services. We are the leaders in the industry.",
      features: [
        "Automated task management workflow",
        "Detailed analytics for your data",
        "Some awesome integrations",
      ],
    },
  };

  const selectedModelData = modelData[modelName] || modelData.model1;

  return (
    <div className=" bg-pdc-d-gray overflow-hidden pt-0 py-[30px] md:pt-[96px] h-fit md:min-h-screen ">
      <section class="px-2 py-32 bg-[#000] md:px-0">
        <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div class="flex flex-wrap items-center sm:-mx-3">
            <div class="w-full md:w-1/2 md:px-3">
              <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span class="block text-[#BB1A37] xl:inline">
                    {selectedModelData?.title}
                  </span>
                </h1>
                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  {selectedModelData?.description}
                </p>
                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#_"
                    class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-[#BB1A37] rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                  >
                    Try It Free
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a
                    href="#_"
                    class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="w-[400px] h-[50vh] overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <Image
                  src={selectedModelData.image}
                  quality={100}
                  height={1000}
                  width={1000}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full bg-[#000] pt-7 pb-7 md:pt-20 md:pb-24">
        <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src="https://cdn.devdojo.com/images/december2020/productivity.png"
              class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
            />
          </div>

          <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Boost Productivity
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
              Build an atmosphere that creates productivity in your organization
              and your company culture.
            </p>
            <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
              {selectedModelData?.features.map((feature, index) => (
                <li
                  key={index}
                  class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid"
                >
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span class="text-sm font-bold">✓</span>
                  </span>{" "}
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
              Automated Tasks
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
              Save time and money with our revolutionary services. We are the
              leaders in the industry.
            </p>
            <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span class="text-sm font-bold">✓</span>
                </span>{" "}
                Automated task management workflow
              </li>
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span class="text-sm font-bold">✓</span>
                </span>{" "}
                Detailed analytics for your data
              </li>
              <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span class="text-sm font-bold">✓</span>
                </span>{" "}
                Some awesome integrations
              </li>
            </ul>
          </div>

          <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img
              src="https://cdn.devdojo.com/images/december2020/settings.png"
              class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
