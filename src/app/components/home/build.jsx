import Image from "next/image";
import React from "react";
import logo from "../../../assets/logo.png"
import shelter1 from "../../../assets/shelter1.jpg"
import Tilt from "react-parallax-tilt";

const Build = () => {
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-10 py-10 md:py-0 mx-auto  ">
                <div className="flex flex-col text-center w-full mb-12">
                    {/* <h1 className="text-3xl md:text-5xl font-medium title-font mb-4 text-white">
                        Building a Brighter Future:
                        <h2 className=" text-2xl md:text-4xl my-4">
                            Invest in Cathy&quot;s Vision for Secure Shelters and Make a Lasting Impact!
                        </h2>
                    </h1> */}
                    <h1 className="text-center text-[56px] not-italic  leading-[139.5%] capitalize tracking-[-3.36px] font-medium title-font mb-4 text-white">
                        Invest
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center ">
                    <div data-aos="fade-in" className="p-4 py-8 w-full relative  rounded-[20px] hover:bg-[#ffffff15] transition duration-300 ease-in-out overflow-hidden ">
                        <Tilt className="track-on-window" trackOnWindow={true}>
                            <Image width={1000} height={1000} src={shelter1} className=" w-[500px] rounded-full mx-auto h-[500px]  object-cover brightness-50" alt="" />
                        </Tilt>

                        {/* <div className="absolute top-0 left-0 w-full h-full group-hover:bg-[#ffffff15] transition duration-300 ease-in-out  "></div> */}
                        <button className="pri-btn mt-6 block mx-auto w-fit text-white">
                            Aquire shelter directly for $100,000
                        </button>
                    </div>
                    <div data-aos="fade-in" className="p-4 py-8 w-full relative  hover:bg-[#ffffff15] transition duration-300 ease-in-out rounded-[20px] overflow-hidden">
                        <Tilt className="track-on-window" trackOnWindow={true}>
                            <Image width={1000} height={1000} src={logo} className="w-[500px] mx-auto h-[500px] rounded-3xl object-cover brightness-50" alt="" />
                        </Tilt>

                        {/* <div className="absolute top-0 left-0 w-full h-full group-hover:bg-[#ffffff15] transition duration-300 ease-in-out"></div> */}
                        <button className="pri-btn mt-6 block mx-auto w-fit text-white">
                            Buy $100,000 tokens and join the allocation list.
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Build;
