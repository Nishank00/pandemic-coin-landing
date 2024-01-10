"use client";

import HeroSection from "./components/home/hero";
import LiveEvents from "./components/home/live-events";
import Roadmap from "./components/home/roadmap";
import Tokenomics from "./components/home/tokenomics";
import WhoWeAreSection from "./components/home/who-we-are";
import MiniAboutUs from "./components/home/us";
import Partners from "./components/home/partners";
import Shelters from "./components/home/shelters";
import Community from "./components/home/community";
import Testimonials from "./components/home/testimonials";
import Build from "./components/home/build";
import Cta from "./components/home/cta";
import Feature from "./components/home/features";
import CountDown from "./components/home/countdown";

// images
// import img1 from "../../public/images/sec-ai/1.jpg"
// import img2 from "../assets/sec-ai/2.jpg"
// import img3 from "../assets/sec-ai/3.jpg"
// import img4 from "../assets/sec-ai/4.jpg"
// import img5 from "../assets/sec-ai/5.jpg"
// import img6 from "../assets/sec-ai/6.jpg"



export default function Home() {
  return (
    <main className="overflow-hidden">

      <HeroSection />

      <div className="count_sec border-gray-700 border-[0.001px]">
        <CountDown />
        <WhoWeAreSection />
      </div>

      <div className="live_sec">
        <LiveEvents />
      </div>
      <Feature />
      <Tokenomics />
      <Roadmap />

      <div className="team_sec">
        <MiniAboutUs />
      </div>
      <Partners />
      <Shelters />
      <Community />
      <Testimonials />
      <div className="PS_sec">
        <Build />
      </div>
      <Cta />
    </main>
  );
}
