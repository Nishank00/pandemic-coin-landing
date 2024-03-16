import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { ScrollTrigger as Scrolltrigger } from "gsap/dist/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import { useMediaQuery } from "../common/UseMediaQuery/UseMediaQuery";

import {
  FaDiscord,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";

const CTA = () => {
  gsap.registerPlugin(Scrolltrigger);
  gsap.defaults({ ease: "none" });

  const isMobile = useMediaQuery("(max-width:768px)");

  useLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#who_we",
          start: "top 600",
          scrub: true,
          end: "+=500",
          // markers:true,
        },
      })
      .add("start")
      .to(
        "#who_we_div",
        {
          borderRadius: "340px 340px 0 0",
        },
        "start"
      );
  }, []);
  return (
    <section
      id="who_we"
      className=" text-pdc-l-gray overflow-hidden relative body-font"
    >
      <div className="container px-4 md:mx-auto mt-8 ">
        <div
          id="who_we_div"
          data-aos="fade-in"
          className="w-full rounded-t-[100px] md:w-4/5 px-4 md:px-20 overflow-hidden relative  py-24 bg-gradient-to-r from-[#111327] to-[#9C9C9C50] flex flex-col items-center mx-auto [box-shadow:1px_12px_19px_0px_rgba(0,_0,_0,_0.38)_inset]"
        >
          <div className="w-fit mx-auto text-center text-[#FFF]">
            <p className="mt-6 text-[13px] mb-4 font-medium tracking-[10px] uppercase">
              We are social
            </p>
            <h1 className="text-[36px] tracking-[-2.1px] font-[300] text-center">
              Follow us on social media
            </h1>
          </div>

          <div className="absolute bg-pdc-red w-[150px] h-[150px] bottom-[15%] -z-10 right-[-2%] rounded-[45px] rotate-45"></div>
          <div className="md:top-[264px] md:left-[87px] left-0 top-[370px] absolute w-[207px] h-[207px] rounded-[103.5px] ">
            <Tilt className="track-on-window" trackOnWindow={true}>
              <div className="w-[24px] h-[24px] top-[5px] left-[47px] bg-pdc-red rotate-45 absolute rounded-[45px]" />
            </Tilt>
            <Tilt className="track-on-window" trackOnWindow={true}>
              <div className="border-[#1f2241] absolute w-[207px] h-[207px] top-0 left-0 rounded-[103.5px] border border-solid" />
            </Tilt>
          </div>
          <div className="absolute bg-pdc-blue w-[150px] h-[150px] top-[-10%] left-[5%] rounded-[45px] rotate-12"></div>
          <div className="top-[-96px] left-[717px] absolute w-[207px] h-[207px] rounded-[103.5px]">
            <Tilt className="track-on-window" trackOnWindow={true}>
              {" "}
              <div className="w-[19px] h-[19px] top-[169px] left-[122px] bg-pdc-blue rotate-[15.00deg] absolute rounded-[37.6px]" />
            </Tilt>
            <Tilt className="track-on-window" trackOnWindow={true}>
              {" "}
              <div className="border-[#1f2342] absolute w-[207px] h-[207px] top-0 left-0 rounded-[103.5px] border border-solid" />
            </Tilt>
          </div>

          <div className="flex gap-[14px] mt-[36px] w-fit">
            <a
              href="https://twitter.com/PandemicCoinPDC"
              className="relative h-[43px] bg-pdc-light-gray rounded-[131.61px]"
            >
              <FaTwitter height={43} width={43} alt="Twitter" />
            </a>

            <a
              href="https://t.me/+8z1TNikHqtw5NzVk"
              className="relative h-[43px] bg-pdc-light-gray rounded-[131.61px]"
            >
              <FaTelegram height={43} width={43} alt="Telegram" />
            </a>

            <a
              href="https://www.facebook.com/pandemiccoinPDC"
              className="relative h-[43px] bg-pdc-light-gray rounded-[131.61px]"
            >
              <FaFacebook height={43} width={43} alt="Facebook" />
            </a>

            <a
              href="https://www.linkedin.com/company/pandemiccoinpdc"
              className="relative h-[43px] bg-pdc-light-gray rounded-[131.61px]"
            >
              <FaLinkedin height={43} width={43} alt="LinkedIn" />
            </a>

            <a
              href="https://discord.gg/ZSh4CrvB"
              className="relative h-[43px] bg-pdc-light-gray rounded-[131.61px]"
            >
              <FaDiscord height={43} width={43} alt="Discord" />
            </a>

            <a
              href="https://www.tiktok.com/@pandemiccoinpdc"
              className="relative h-[43px] bg-pdc-light-gray rounded-[131.61px]"
            >
              <FaTiktok height={43} width={43} alt="TikTok" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
