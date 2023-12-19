"use client";

import { Archivo } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Footer from "./components/common/footer";
import MainNav from "./components/common/main-nav";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";


const arc = Archivo({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: -100,
      // startEvent: "load",
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pandemic Coin</title>
        <link rel="icon" href="../assets/logo.png" />
      </head>
      <body className={`${arc.className} flex flex-col min-h-screen`}>
        <MainNav />
        <AnimatePresence mode="wait" initial={false}>
          {children}
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
