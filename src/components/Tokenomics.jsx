import React, { useCallback, useState } from 'react'
import './donut-chart.module.css';
import CustomPieChart from './CustomPieChart';

const Tokenomics = () => {
    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );


    return (
        <div className='flex relative items-center px-4 py-24 h-full justify-center flex-col text-center'>
            <div className="w-fit relative mb-20 mx-auto text-center">
                <h1 className="text-5xl font-semibold text-center">
                    Tokenomics
                </h1>
                <div className="border-b mt-3 mb-6 border-slate-700 w-full" />
                <p className="mt-6 text-sm font-medium tracking-[10px] uppercase">We are social</p>
            </div>
            <div className='z-50 py-4 max-w-[320px] flex items-center justify-center md:max-w-[100%] md:py-28 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl rounded-[30px] bg-opacity-10 border border-[#7E7E7E]'>
                {/* <Donut
                    id="linearGradient"
                    data={data}
                    width={1000}
                    height={650}
                    className="relative max-w-[200px]"
                /> */}
                <CustomPieChart data={data} activeIndex={activeIndex} onPieEnter={onPieEnter} />

            </div>
            <div className="absolute w-[450px] h-[450px] transition-all bottom-[-2%] right-[-5%] border-2 rounded-full border-[#615E9A] p-4 animate-spin">
                <div className="w-[200px] h-[200px] bg-gradient-to-r from-[#342CB2] to-[#FC4F5A] rounded-full m-8"></div>
            </div>
        </div>
    )
}

export default Tokenomics