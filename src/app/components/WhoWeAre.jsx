import React from 'react'
import { FaPlay } from 'react-icons/fa6'

const WhoWeAre = () => {
    return (
        <section className='container px-10 py-24'>
            <div className='flex items-center justify-center flex-col'>
                <div className="w-fit mx-auto my-16 text-center">
                    <h1 className="text-3xl md:text-5xl text-center">Who We Are</h1>
                    <div className="border-b mt-3 mb-6 border-slate-700  w-full" />
                    <p className="mt-6 text-sm tracking-[10px]">OUR STORY</p>
                </div>
                <div className="rounded-[30px] relative w-5/6 mx-auto h-80 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                    <div className="w-full h-full absolute top-0 left-0 bg-gray-800 opacity-50">
                        <div className="absolute top-[50%] left-[50%] w-[60px] h-[60px] translate-x-[-50%] rounded-full translate-y-[-50%] z-10 flex items-center justify-center text-center bg-[#fff]">
                            <FaPlay className='text-[#111] text-[32px] flex items-center justify-center text-center' />
                        </div>
                    </div>
                </div>
                <button className='bg-[#FB2525] px-8 p-4 text-white tracking-widest mt-8 text-sm font-semibold rounded-lg'>
                    INVEST NOW
                </button>
            </div>
        </section>
    )
}

export default WhoWeAre