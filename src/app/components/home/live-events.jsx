"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import DynamicTitle from "../utils/dynamic-title";
import event1 from "../../../assets/problems/1.jpg";
import event2 from "../../../assets/problems/2.jpg";
import event3 from "../../../assets/problems/3.png";
import event4 from "../../../assets/problems/4.png";
import event5 from "../../../assets/problems/5.png";
import event6 from "../../../assets/problems/6.png";
import event7 from "../../../assets/problems/7.png";
import event8 from "../../../assets/problems/8.png";
import clock from "../../../assets/icons/clock.svg";

import { motion } from "framer-motion";
import Link from "next/link";

const NewsCard = ({
  image,
  description,
  title,
  index,
  setExpandedIndex,
  expandedIndex,
}) => {
  const isExpanded = index === expandedIndex;

  const toggleContent = () => {
    if (isExpanded) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div
      data-aos="fade-in"
      className="h-full group mx-auto relative overflow-hidden rounded-[20px]  md:rounded-[20px]"
    >
      <Image
        width={720}
        height={600}
        className=" w-full z-10 group-hover:scale-[1.1] transition duration-300 ease-in-out h-[210px] md:h-full overflow-hidden  object-center"
        src={image}
        alt="blog"
      />
      <div className="md:py-2 py-6 px-6 md:mx-0 md:absolute bottom-0 w-full bg-pdc-d-gray/80 backdrop-blur-[5px]">
        <div className="flex gap-[8px] mb-[6px]">
          <Image
            src={clock}
            height={20}
            width={20}
            className="clock_img"
            alt="arrow"
          />
          <div className=" text-[13.423px] not-italic font-medium leading-[143.5%]">
            12-3-2023
          </div>
        </div>

        <div>
          <div className="leading-relaxed md:px-4 px-0 text-[22px] text-[#E4E4E4]">
            {title}
          </div>
          <p className="leading-relaxed md:px-4 px-0 text-[#E4E4E4]">
            {isExpanded ? description : `${description.slice(0, 100)}...`}
            &nbsp;
            <span
              onClick={toggleContent}
              className="text-[14px] not-italic font-medium leading-[143.5%] cursor-pointer text-[#342CB2]"
            >
              {isExpanded ? "show less" : "read more"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const NewsGallery = [
  {
    image: event1,
    title: "Pandemic Conflicts Among Nations",
    description:
      "The contemporary world grapples with an array of pressing issues, from geopolitical tensions like those between Russia, the USA, China, Ukraine, and Palestine to space confrontations and the unsettling prospect of space-based missile systems. ",
  },
  {
    image: event2,
    title: "Natural Destructions - Climate change",
    description:
      "The Canadian Wildfires of 2023 led to unprecedented devastation, triggering widespread destruction and displacing thousands of individuals. Ignited in early May in Fort McMurray, Alberta, the inferno quickly spiraled out of control, engulfing over 590,000 hectares of land and consuming neighborhoods. ",
  },
  {
    image: event3,
    title: "Big Rapid Earthquakes",
    description:
      "Earthquakes, another potent force of nature, can cause widespread devastation, particularly in densely populated areas. Earthquakes, the sudden shaking of the Earth's surface, have left profound marks on history, landscapes, and communities, reminding us of the planet's seismic volatility. ",
  },
  {
    image: event4,
    title: "Worldwide Tsunamis",
    description:
      "Tsunamis, colossal oceanic waves often triggered by undersea earthquakes, have left an indelible mark on history, causing widespread devastation and loss of life. ",
  },
  {
    image: event5,
    title: "WARS",
    description:
      "The Ukraine-Russia conflict has been a modern-day testament to this, its roots entwined in historical tensions, political ambitions, and power struggles. This conflict has not only shaken Eastern Europe but has also strained global relations, drawing in neighbouring countries and stirring concerns about the balance of power in the region.",
  },
  {
    image: event6,
    title: "Terrorist Attacks",
    description:
      "While terrorism has plagued various regions for decades, its potential for catastrophic impact continues to cast a shadow of uncertainty over global security. Throughout history, we've witnessed acts of terrorism targeting civilians, infrastructure, and nations' stability. ",
  },
  {
    image: event7,
    title: "Bio-Chemical Attacks",
    description:
      "Bio-chemical attacks represent a menacing facet of warfare and terrorism, leveraging biological or chemical agents to inflict harm and sow fear. Their history is dotted with devastating events, leaving indelible marks on humanity.",
  },
  {
    image: event8,
    title: "Nuclear Attacks / Threats ",
    description:
      "In a world rife with geopolitical tensions and the possession of nuclear capabilities by multiple nations, the risk of nuclear weapons being used in future conflicts looms ominously. The atomic bombings of Hiroshima and Nagasaki serve as stark reminders of the catastrophic impact of nuclear warfare, fostering widespread fear and compelling individuals to seek alternative safety measures like underground bunkers.",
  },
];
export default function LiveEvents() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleSetExpandedIndex = (index) => {
    setExpandedIndex(index);
  };

  return (
    <section className="text-gray-400  body-font" id="news-gallery">
      <div className="container px-5 py-16 md:pb-12 mx-auto">
        <DynamicTitle
          title="Live Problems"
          descColor="#7B7E98"
          description={"    "}
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="flex flex-wrap"
          id="NewsGallery"
        >
          <Swiper
            centeredSlides={true}
            slidesPerView={1}
            initialSlide={2}
            loop={true}
            spaceBetween={50}
            pagination={false}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className="mySwiper gap-4"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {NewsGallery.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <NewsCard
                  key={index}
                  index={index}
                  expandedIndex={expandedIndex}
                  setExpandedIndex={handleSetExpandedIndex}
                  {...testimonial}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="flex justify-center align-middle">
          <div className="flex gap-20">
            {/* <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="pri-btn md:mt-[35px] mt-[20px] block transition-all mx-auto w-[150px] md:w-[208px] text-white"
            >
              WATCH MORE
            </motion.button> */}
            <Link href="/purchase">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="pri-btn md:mt-[35px] mt-[20px] relative z-10 block transition-all mx-auto w-[150px] md:w-[208px] text-white"
                style={{ color: "#BB1A37", backgroundColor: "white" }}
              >
                PURCHASE MEMBERSHIP
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
