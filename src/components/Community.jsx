import React from 'react'
import Image from 'next/image';

const Community = () => {
    return (
        <div className=" pt-4 md:pt-24 pb-0 overflow-hidden mx-auto px-4 md:px-16 relative">
            <div className="absolute top-[-20%] left-[-20%] bg-[#FF07174D] w-[1000px] h-[500px] opacity-50 blur-[120px] rounded-full"></div>
            <div className="flex flex-col md:flex-row item-center justify-center">
                <div className="w-full md:w-1/2 my-20">
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
                    className="w-full md:w-1/2"
                    src="/assets/asset1.png"
                    alt="image"
                    width={700}
                    height={600}
                />
            </div>

        </div>
    )
}

export default Community