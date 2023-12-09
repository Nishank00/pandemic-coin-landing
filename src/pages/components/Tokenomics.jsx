import React from 'react'
import Donut from './Donut'

const Tokenomics = () => {
    const data = [
        {
            name: "Category 1",
            value: 30,
        },
        {
            name: "Category 2",
            value: 20,
        },
        {
            name: "Category 3",
            value: 15,
        },
        {
            name: "Category 4",
            value: 10,
        },
        {
            name: "Category 5",
            value: 5,
        },
    ];


    return (
        <div className='flex relative items-center px-4 h-full justify-center flex-col text-center'>
            <div className="w-fit relative mb-20 mx-auto text-center">
                <h1 className="text-5xl font-semibold text-center">
                    Tokenomics
                </h1>
                <div className="border-b mt-3 mb-6 border-slate-700 w-full" />
                <p className="mt-6 text-sm font-medium tracking-[10px] uppercase">We are social</p>
            </div>
            <div className='z-50 py-28 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl rounded-[30px] bg-opacity-10 border border-[#7E7E7E]'>
                <Donut
                    id="linearGradient"
                    data={data}
                    width={1000}
                    height={650}
                    className="relative"
                />
            </div>
            <div className="absolute w-[450px] h-[450px] transition-all bottom-[-2%] right-[-5%] border-2 rounded-full border-[#615E9A] p-4 animate-spin">
                <div className="w-[200px] h-[200px] bg-gradient-to-r from-[#342CB2] to-[#FC4F5A] rounded-full m-8"></div>
            </div>
        </div>
    )
}

export default Tokenomics