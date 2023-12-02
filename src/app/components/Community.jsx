import React from 'react'
import asset1 from "../../assets/asset1.png";
import Image from 'next/image';

const Community = () => {
    return ( 
        <div className="my-20 py-32 overflow-hidden md:overflow-visible mx-auto md:px-16 relative">
            <div className="md:w-1/2">
                <h1 className="text-3xl md:text-5xl">COMMUNITY</h1>
                <p className="mt-3 md:w-4/6 text-2xl">
                    Community Chronicles: Unveiling the Heartbeat of Our Shared Journey
                </p>
                <p className="w-5/6 mt-6 text-[#D4D4D4]">
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                    consectetur. orem ipsum dolor sit amet consectetur. Lorem ipsum
                    dolor sit amet consectetur.{" "}
                </p>
                <button className="bg-[#FB2525] px-8 p-4 text-white tracking-widest mt-8 text-sm font-semibold">
                    Explore Community
                </button>
            </div>
            <Image
                className="absolute -right-1/2 md:right-12 object-cover md:w-1/2 bottom-0"
                src={asset1}
                alt="image"
            />
        </div>
    )
}

export default Community