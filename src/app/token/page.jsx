"use client";
import Image from 'next/image';
import logo from '../../assets/logo.png'
import React, { useState } from 'react'

export default function Token() {

    const [moneyVal, setMoneyVal] = useState("54466");

    const handleChange = (e) => {
        setMoneyVal(e.target.value)
    }
    return (
        <div className="bg-white flex flex-col justify-center items-stretch">
            <div className="bg-stone-950 w-full pl-20 max-md:max-w-full max-md:pl-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
                        <div className="z-[1] flex flex-col items-stretch mt-14 max-md:max-w-full max-md:mt-10">
                            <Image
                                width={63}
                                height={63}
                                src={logo}
                                quality={100}
                                alt="logo"
                                className="aspect-[2.03] object-contain object-center w-[138px] overflow-hidden max-w-full self-start"
                            />
                            <div className="text-white text-8xl leading-[120px] tracking-tighter mt-48 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10">
                                <span className="font-black">The Token Sale is </span>
                                <span className="font-black text-white">Live!</span>
                            </div>
                            <div className="justify-center text-white text-center text-2xl font-medium leading-8 tracking-tight whitespace-nowrap bg-[#de1012] rounded-[12px] items-stretch mt-24 px-8 py-4 self-start max-md:mt-10 max-md:px-5">
                                Read Whitepaper
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex-col overflow-hidden relative flex min-h-[982px] grow justify-center px-16 py-12 items-end max-md:max-w-full max-md:px-5">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a001c4c26a1be012153dc632ce6ed460bb56de7114f5724d6ca876ee20803386?apiKey=7336283b61084b1fb8ff25f74a29682d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a001c4c26a1be012153dc632ce6ed460bb56de7114f5724d6ca876ee20803386?apiKey=7336283b61084b1fb8ff25f74a29682d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a001c4c26a1be012153dc632ce6ed460bb56de7114f5724d6ca876ee20803386?apiKey=7336283b61084b1fb8ff25f74a29682d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a001c4c26a1be012153dc632ce6ed460bb56de7114f5724d6ca876ee20803386?apiKey=7336283b61084b1fb8ff25f74a29682d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a001c4c26a1be012153dc632ce6ed460bb56de7114f5724d6ca876ee20803386?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a001c4c26a1be012153dc632ce6ed460bb56de7114f5724d6ca876ee20803386?apiKey=7336283b61084b1fb8ff25f74a29682d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a001c4c26a1be012153dc632ce6ed460bb56de7114f5724d6ca876ee20803386?apiKey=7336283b61084b1fb8ff25f74a29682d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a001c4c26a1be012153dc632ce6ed460bb56de7114f5724d6ca876ee20803386?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                                className="absolute h-full w-full object-cover object-center inset-0"
                            />
                            <div className="relative border bg-black flex w-[485px] max-w-full flex-col items-stretch mr-12 mt-36 mb-20 py-8 border-solid border-[#342CB2] rounded-[30px] max-md:mr-2.5 max-md:my-10">
                                <div className="flex flex-col pl-9 pr-7 items-end max-md:max-w-full max-md:px-5">
                                    <div className="text-white text-4xl font-bold leading-10 tracking-tight self-stretch max-md:max-w-full">
                                        Buy $DSYNC
                                    </div>
                                    <div className="shadow-sm bg-zinc-600 self-stretch flex w-[100%]items-center justify-between gap-5 mt-16 pl-4 max-md:ml-1.5 max-md:mr-1.5 max-md:mt-10 ">
                                        <input type='text' name='money' onChange={handleChange} value={moneyVal} className="justify-center text-white text-4xl font-bold leading-10 tracking-tight w-[70%] my-auto bg-zinc-600 outline-none border-none" />

                                        <div className="shadow-sm bg-[#de1012] self-stretch flex items-stretch justify-between gap-3 pl-7 pr-3 py-6 max-md:pl-5">
                                            <div className="justify-center text-white text-center text-2xl font-bold leading-8 tracking-tight">
                                                USD
                                            </div>
                                            <div className='df'>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd6cf19b5ffd7f5c0e4915dd6e1b1aa5168cf31c53197e62f51624504e8a4411?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                                                    className="aspect-[1.81] object-contain object-center w-[29px] stroke-[3px] stroke-black overflow-hidden shrink-0 max-w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shadow-sm bg-neutral-900 self-stretch flex w-full items-center justify-between gap-5 mt-9 pl-4 max-md:ml-1.5 max-md:mr-1.5">
                                        <div className="justify-center text-white text-4xl font-bold leading-10 tracking-tight w-[282px] my-auto">
                                            0.0005676
                                        </div>
                                        <div className="justify-center text-white text-center text-2xl font-bold leading-7 tracking-tight whitespace-nowrap shadow-sm bg-[#de1012] self-stretch items-stretch pl-7 pr-3.5 py-5 max-md:pl-5">
                                            $DSYNC
                                        </div>
                                    </div>
                                    <div className="text-white text-right text-base tracking-normal whitespace-nowrap mt-5">
                                        Token Price = $0.014
                                    </div>
                                    <div className="flex-col text-white text-base font-bold leading-5 tracking-normal relative whitespace-nowrap overflow-hidden aspect-[4.470588235294118] items-stretch mr-14 mt-5 pt-3.5 pb-6 px-5 max-md:mr-2.5">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfab2116ae176e7a03da07833aa79a5332e6c11d67e0ef04390a6b39071cbcfa?apiKey=7336283b61084b1fb8ff25f74a29682d&"
                                            className="absolute h-full w-full object-cover object-center inset-0"
                                        />
                                        FUNDED : 68% = $38 000 000
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch mt-1.5 pl-9 pr-7 max-md:max-w-full max-md:px-5">
                                    <div className="bg-black flex flex-col justify-center items-stretch px-1.5 py-1.5 max-md:max-w-full">
                                        <div className="bg-[#de1012] bg-opacity-50 flex shrink-0 h-[25px] flex-col" />
                                    </div>
                                    <div className="text-white text-base font-bold leading-5 tracking-normal ml-3 mt-12 self-start max-md:ml-2.5 max-md:mt-10">
                                        Total Allocated Tokens:{" "}
                                        <span className="text-white"> 50,000,000 </span>
                                    </div>
                                    <div className="text-white text-base font-bold leading-5 tracking-normal ml-3 mt-3 self-start max-md:ml-2.5">
                                        Min. Transaction Amount:{" "}
                                        <span className="text-white">500 USD</span>
                                    </div>
                                    <div className="text-white text-center text-3xl font-bold leading-9 tracking-tight w-[369px] bg-[#de1012] rounded-[12px] justify-center items-center mt-6 px-16 py-3.5 max-md:max-w-full max-md:px-5">
                                        BUY $ASYNC
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
