import Image from "next/image";
import React from "react";
import logo from "../../../assets/litepaper2.png";
import membership from "../../../assets/whitepaper2.png";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const PaperHero = () => {
  return (
    <section className="text-gray-400 body-font md:py-[100px] py-[30px]">
      <div className="container md:px-10 py-10 md:py-0 px-4  mx-auto  ">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-center  text-[56px] not-italic  leading-[139.5%] capitalize tracking-[-3.36px] font-medium title-font mb-4 text-white">
            Pandamic Paper
          </h1>
        </div>

        <div className="grid rounded-[60px] grid-cols-1 md:grid-cols-2 gap-4 text-center ">
          {/* White Paper  */}
          <div
            data-aos="fade-in"
            className="p-4 py-8 w-full relative overflow-hidden rounded-[20px]  bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url(/images/sheild.jpeg)",
            }}
          >
            <div className="p-4 py-8 w-full relative df flex-col !justify-between rounded-[20px] overflow-hidden gap-16">
              <Tilt className="track-on-window" trackOnWindow={true}>
                <Image
                  src={membership}
                  className=" w-[250px] h-[250px] md:w-[250px] md:h-[250px]  mx-auto p-4 mt-[6rem] object-cover"
                  alt=""
                />
              </Tilt>
            </div>
            <div>
              <Link
                href="/purchase"
                className="pri-btn mt-6 block mx-auto w-fit text-white uppercase"
              >
                White Paper
              </Link>
            </div>
          </div>
          {/* Lite Paper  */}
          <div
            style={{
              backgroundImage: "url(/images/ai.jpeg)",
            }}
            className="flex items-end w-full bg-cover bg-no-repeat rounded-[20px]"
          >
            <div
              data-aos="fade-in"
              className="p-4 py-8 w-full relative df flex-col !justify-between rounded-[20px] overflow-hidden gap-4"
            >
              <div>
                <Tilt className="track-on-window" trackOnWindow={true}>
                  <Image
                    src={logo}
                    className=" w-[250px] h-[250px] md:w-[250px] md:h-[250px]  mx-auto p-4  object-cover"
                    alt=""
                  />
                </Tilt>
              </div>
              <div>
                <Link
                  href="/"
                  className="pri-btn mt-6 block mx-auto w-fit text-white"
                >
                  Lite Paper
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaperHero;
