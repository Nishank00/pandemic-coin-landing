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
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import NewsGallery from "./components/NewsGallery";
import Tokenomics from "./components/Tokenomics";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <NewsGallery />
      <Feature />
      <Tokenomics />
      <Webinars />
      <Community />
      <Deepdive />
      <Testimonials />
    </main>
  );
}
