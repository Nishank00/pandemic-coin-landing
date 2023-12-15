"use client";

import { Archivo } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Footer from "./components/common/footer";
import MainNav from "./components/common/main-nav";
import { AnimatePresence } from "framer-motion";

const arc = Archivo({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
