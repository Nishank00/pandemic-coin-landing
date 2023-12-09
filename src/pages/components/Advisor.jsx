import React from 'react'

const Advisor = ({ name, role }) => (
    <div className="w-full shadow-md">
        <div className="h-full relative flex items-center justify-center overflow-hidden bg-[#13131310] border-gray-800 border p-4 rounded-lg">
            <div className="absolute top-0 w-[30px] h-[50px] blur-2xl left-16 rounded-full bg-gradient-to-r from-blue-600 to-pink-600"></div>
            <div className="flex items-center justify-center flex-col">
                <h2 className="text-white title-font font-medium">{name}</h2>
                <p className="text-gray-600">{role}</p>
            </div>
        </div>
    </div>
);

export default Advisor