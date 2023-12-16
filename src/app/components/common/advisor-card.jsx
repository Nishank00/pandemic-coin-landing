import React from "react";

const Advisor = ({ title }) => (
    // <div className="w-full shadow-md px-2 py-4 b1">
        <div className="h-[111px] border-[0.75px] border-[solid] border-[#342CB2] border-opacity-80 relative flex items-center justify-center overflow-hidden bg-pdc-d-gray/30  px-12 py-8 rounded-lg">
            <div className="absolute top-0 w-[60px] h-[80px] blur-2xl left-16 rounded-full bg-gradient-to-r from-blue-600 to-pink-600"></div>
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-[#FFF] text-center font-[Catamaran] text-[20px] not-italic font-semibold leading-[128%] uppercase">
                    {title}
                </h2>
            </div>
        </div>
    // {/* </div> */}
);

export default Advisor;
