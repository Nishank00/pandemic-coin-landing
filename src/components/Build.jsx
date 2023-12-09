import Image from "next/image";
import React from "react";

const Build = () => {
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-10 py-10 md:py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="text-3xl md:text-5xl font-medium title-font mb-4 text-white">
                        Building a Brighter Future:
                        <h2 className=" text-2xl md:text-4xl my-4">
                            Invest in Cathy&quot;s Vision for Secure Shelters and Make a Lasting Impact!
                        </h2>
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/2 sm:w-1/2 w-full">
                        <Image width={1000} height={1000} src="/assets/boy1.jpg" className="rounded-3xl object-cover brightness-75" alt="" />
                    </div>
                    <div className="p-4 md:w-1/2 sm:w-1/2 w-full">
                        <Image width={1000} height={1000} src="/assets/future2.jpg" className="rounded-3xl object-cover brightness-75" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Build;
