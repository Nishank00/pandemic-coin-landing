"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { IoIosClose, IoLogoWhatsapp } from "react-icons/io";
import { useAppContext } from "../../../context/appContext/appContextProvider";
// import { FaPhone } from "react-icons/fa6";
import ModalContainer from './ModalContainer'
import SignupModal from './Modals/SignupModal'
import SignInModal from './Modals/SignInModal'
import VerficationModal from './Modals/VerficationModal'
import { useCommonStore } from "../../../store/commonStore";
import UserInfoPanel from './userInfoPanel'
import ResetPassModal from './Modals/ResetPassModal'

export default function Nav() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [verificationModal, setVerificationModal] = useState(false);
  const {isLoggedIn} = useCommonStore();

  
  const links = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about" },
    { title: "AI", path: "/ai" },
    { title: "Media", path: "/media" },
    // { title: "Communities", path: "/communities" },
    { title: "Token Sale", path: "/token-sale" },
    { title: "Contact us", path: "/contact" },
    {
      title: "Pandamic Paper",
      path: "/paper",
    },
    // https://docs.google.com/document/d/1Botqy8D6O_L9P0gDP7GUS3FlIerHsXvtnAgi-sVTzQ8/edit?usp=sharing
  ];

  return (
    <>
      <div className="left-0 activeHead fixed top-0 pc md:hidden lg:flex w-full topppp p-[0px_62px_0_39px]  items-center font-semibold justify-between h-[96px]">
        <Link href="/">
          {/* <h1 className="text-white font-bold text-2xl">PDC</h1> */}
          <Image
            className="mx-auto rounded-[30px]"
            width={63}
            height={63}
            src={logo}
            quality={100}
            alt="logo"
          />
        </Link>
        <div className="flex gap-[30px] tracking-wider">
          {links.map((link, index) => {
            return (
              <div key={link.path} className="relative group pb-[6px]">
                <Link className=""  href={link.path} key={index}>
                  <span
                    className={`anim-slo text-[#FFF]  text-[18px] not-italic font-normal leading-[139.5%]`}
                  >
                    {link.title}
                  </span>
                </Link>
                <div
                  className={` ${
                    pathName === link.path ? "w-1/2" : "w-0"
                  } absolute anim bottom-0 h-[3px] group-hover:w-full bg-white`}
                />
              </div>
            );
          })}
          <Link
            href="/purchase"
            className="py-[0px] bg-[#BB1A37] px-[20px] rounded-[5px] text-white font_cat flex items-center"
          >
            Purchase
          </Link>
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => setShowSignIn(true)}
                className="py-[0px] bg-[#BB1A37] px-[20px] rounded-[5px] text-white font_cat flex items-center"
              >
                Sign In
              </button>
              <button
                onClick={() => setShowSignUp(true)}
                className="py-[0px] bg-[#BB1A37] px-[20px] rounded-[5px] text-white font_cat flex items-center"
              >
                Sign Up
              </button>
            </>
          ): (
            <UserInfoPanel />
          )}
        </div>
      </div>

      <motion.button
        aria-label="open nav bar"
        whileTap={{ scale: 0.8 }}
        onClick={() => setOpen(!open)}
        className="bg-pdc-blue mob w-16 h-16 rounded-full fixed bottom-8 right-8 text-white flex justify-center items-center drop-shadow-lg hover:drop-shadow-2xl z-[99999999]"
      >
        <HiOutlineMenuAlt3 size={"26px"} />
      </motion.button>
      <div
        className={`bg-white text-black mob anim-slo fixed w-screen toppppp h-screen flex flex-col gap-3 justify-center items-center ${
          open
            ? "translate-x-0 scale-x-100 pointer-events-auto"
            : "scale-x-0 pointer-events-none translate-x-full"
        } `}
      >
        {links.map((link, index) => {
          return (
            <Link
              onClick={() => setOpen(false)}
              className="text-center text-xl anim hover:text-pri w-full py-4 anim-slo"
              href={link.path}
               // Add this line to open the link in a new tab
              rel="noopener noreferrer" // Add these lines for security reasons
              key={index}
            >
              {link.title}
            </Link>
          );
        })}

        <Link
          href="https://wa.me/919895609285"
          className="bg-pri group p-3 w-full mt-4 text-center gap-2 flex justify-center items-center  text-black"
        >
          <IoLogoWhatsapp size={"22px"} />
          <span className="mb-1">+91 98956 09285</span>
        </Link>

        <Link
          href="/purchase"
          className="py-[5px] bg-[#BB1A37] px-[20px] rounded-[10px] text-white"
        >
          Purchase
        </Link>

        <motion.button
          aria-label="Close navbar"
          whileTap={{ scale: 0.8 }}
          onClick={() => setOpen(!open)}
          className="bg-sec w-16 mob h-16 rounded-full fixed bottom-16 right-8 text-white flex justify-center items-center toppp drop-shadow-xl hover:drop-shadow-2xl"
        >
          <IoIosClose size={"26px"} />
        </motion.button>
      </div>
        {showSignIn && (
          <ModalContainer>
          <SignInModal showModal={setShowSignIn} setVerificationModal={setVerificationModal} />
        </ModalContainer>
        )}
        {showSignUp && (
          <ModalContainer>
          <SignupModal showModal={setShowSignUp} setVerificationModal={setVerificationModal} />
        </ModalContainer>
        )}
        {verificationModal && (
          <ModalContainer>
          <VerficationModal showModal={setVerificationModal} setSignInModal={setShowSignIn} />
        </ModalContainer>
        )}
    </>
  );
}
