"use client";

import MainNav from "./components/main-nav";
import asset1 from "../assets/asset1.png";
import asset2 from "../assets/asset2.png";
import bg from "../assets/bg.png";
import Image from "next/image";
import Webinars from "./components/Webinars";
import "./globals.css";
import "./styles.css";
import Feature from "./components/Feature";
import Community from "./components/Community";
import Deepdive from "./components/Deepdive";
import Testimonials from "./components/Testimonials";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      {/* <div className="p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl mb-16 text-center">
          Our key features
        </h1> 
        <div className="md:columns-3">
          {sliderData.map((item, i) => (
            <div
              className={`p-8 my-8 h-[20rem] mx-auto w-11/12 flex justify-center items-center flex-col rounded-xl ${
                i % 2 === 0 ? "bg-zinc-800/60" : "bg-white text-black"
              }`}
              key={item.id}
            >
              <p className="text-xl">{item.id}</p>
              <p className="text-3xl mt-6 text-center w-4/6 font-bold serif">
                {item.name}
              </p>
              <p className="mt-4 opacity-50 text-center w-5/6">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur.{" "}
              </p>
            </div>
          ))}
        </div>
      </div> */}
      <Feature />
      <Webinars />
      <Community />
      <Deepdive />
      <Testimonials />
    </main>
  );
}
