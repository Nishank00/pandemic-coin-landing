"use client";
import React, { useCallback, useState } from "react";
import CustomPieChart from "./custom-pie-chart";
import DynamicTitle from "../utils/dynamic-title";
import { motion } from "framer-motion";
import HoverEffect from "./MouseShine";

const Tokenomics = () => {
  const data = [
    { name: "Private", value: 130000000.0 },
    { name: "Pre-sell1", value: 90000000.0 },
    { name: "Pre-sell 2", value: 100000000.0 },
    { name: "Public sale", value: 70000000.0 },
    { name: "Staking rewards", value: 80000000.0 },
    { name: "Liquidity", value: 10000000.0 },
    { name: "Marketing", value: 80000000.0 },
    { name: "Ecosystem Physical Fund", value: 120000000.0 },
    { name: "Team", value: 200000000.0 },
    { name: "Tech AI security", value: 50000000.0 },
    { name: "Advisor", value: 40000000.0 },
    { name: "Airdrop", value: 10000000.0 },
    { name: "CEX Reserve", value: 20000000.0 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div
      data-aos="fade-in"
      className="flex relative items-center px-4 pb-14 h-full w-screen overflow-x-clip justify-center flex-col text-center"
    >
      <DynamicTitle
        title="Tokenomics"
        descColor={"#7B7E98"}
        description="DISTRIBUTION"
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
        className="z-50 py-4 w-[320px] md:h-[523px] flex items-center justify-center md:w-[1140px] md:py-28 bg-clip-padding backdrop-filter backdrop-blur-xl rounded-[30px] bg-opacity-10 border-[1px] border-[solid] border-[#342CB2] border-opacity-50 bg-white"
      >
        {/* <Donut
                    id="linearGradient"
                    data={data}
                    width={1000}
                    height={650}
                    className="relative max-w-[200px]"
                /> */}
        <CustomPieChart
          data={data}
          activeIndex={activeIndex}
          onPieEnter={onPieEnter}
        />
      </motion.div>
      <div className="absolute w-[450px] h-[450px] transition-all bottom-[26%] right-[66%] border-2 rounded-full border-[#615E9A] p-4 z-[-1] animate-spin">
        <div className="w-[200px] h-[200px] bg-gradient-to-r from-[#342CB2] to-[#FC4F5A] rounded-full m-8"></div>
      </div>
      <div className="absolute w-[450px] h-[450px] transition-all bottom-[-2%] right-[-5%] border-2 rounded-full border-[#615E9A] p-4 z-[-1] animate-spin">
        <div className="w-[200px] h-[200px] bg-gradient-to-r from-[#342CB2] to-[#FC4F5A] rounded-full m-8"></div>
      </div>
    </div>
  );
};

export default Tokenomics;
