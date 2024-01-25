import Image from "next/image";
import React from "react";
import logo from "../../../assets/logo.png";
import membership from "../../../assets/membership.png";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const Build = () => {
  return (
    <section className="text-gray-400 body-font">
      <div className="container md:px-10 py-10 md:py-0 px-4  mx-auto  ">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-center  text-[56px] not-italic  leading-[139.5%] capitalize tracking-[-3.36px] font-medium title-font mb-4 text-white">
            Purchase
          </h1>
        </div>

        <div className="grid rounded-[60px] grid-cols-1 md:grid-cols-2 gap-4 text-center ">
          <div
            data-aos="fade-in"
            className="p-4 py-8 w-full relative overflow-hidden  bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url(/images/shelter.jpeg)",
            }}
          >
            <div>
              <Tilt className="track-on-window" trackOnWindow={true}>
                <Image
                  src={membership}
                  className=" w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full mx-auto   object-cover brightness-50"
                  alt=""
                />
              </Tilt>
            </div>
            <div>
              <Link
                href="/purchase"
                className="pri-btn mt-6 block mx-auto w-fit text-white uppercase"
              >
                Book shelter directly and become member
              </Link>
            </div>
          </div>
          <div
            style={{
              backgroundImage: "url(/images/trading.jpeg)",
            }}
            className="flex items-end w-full bg-cover bg-no-repeat"
          >
            <div
              data-aos="fade-in"
              className="p-4 py-8 w-full relative df flex-col !justify-between rounded-[20px] overflow-hidden gap-16"
            >
              <div>
                <Tilt className="track-on-window" trackOnWindow={true}>
                  <Image
                    src={logo}
                    className=" w-[250px] h-[250px] md:w-[350px] md:h-[350px] mx-auto  rounded-3xl object-cover brightness-50"
                    alt=""
                  />
                </Tilt>
              </div>
              <div>
                <Link
                  href="/"
                  className="pri-btn mt-6 block mx-auto w-fit text-white"
                >
                  BUY TOKENS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Build;
