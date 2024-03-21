'use client';
import React, { useEffect, useState } from 'react'
import Sparkle from '../../svgs/Sparkle';
import Link from 'next/link';

const TokenSaleCalculator = ({handleSalePage}:any) => {
    const [tokens, setTokens] = useState(1)
    const [usd, setUsd] = useState(10)
    const perPdcPrice = 10/1;
    // const [showCoins, setShowCoins] = useState(false);
    // const [coin, setCoin] = useState('usd')

    // const handleCoin = (coin) => {
    //     setCoin(coin)
    //     setShowCoins(false);
    // }

    const calculateTokens = () => {
        const totalTokens = usd / perPdcPrice;
        setTokens(totalTokens);
    }

    useEffect(() => {
        calculateTokens()
    },[usd])


  return (
    <div className='flex flex-col gap-[30px] items-center relative overflow-hidden w-full'>
        <div className="relative">
            <Sparkle className='absolute left-[-50px] top-[30px]' />
            <p className='text-[16px] md:text-[20px] text-center px-[15px] mb-[20px]'>Secure your invesment now and potentially experience a <span className=' text-green-400 text-[18px] md:text-[25px]'>10x return!</span></p>
            <p className='text-center'>Lets calculate your potential earnings upon invesment</p>
            <Sparkle className='absolute right-[-50px] top-0' />
        </div>
        <div className="">
            <div className="flex flex-col gap-1 mb-5">
                <label htmlFor="">Enter Amount</label>
                <div className="flex items-center border border-pdc-blue p-[1px] rounded-[5px] bg-pdc-blue relative w-full">
                    <input value={usd} onChange={(e:any) => setUsd(Number(e.target.value))} className='rounded-l-[5px] py-[4px] px-[10px] bg-pdc-d-gray w-full' min={0} type="number" placeholder='0' />
                    <button className=' w-[80px] h-full cursor-pointer'>USD</button>
                    {/* <button onClick={() => setShowCoins(!showCoins)} className=' w-[80px] h-full cursor-pointer uppercase'>{coin}</button>
                    {showCoins && (
                        <div className="w-full bg-pdc-blue p-[10px] rounded absolute top-[35px] shadow-lg">
                            <ul className='flex flex-col gap-2 uppercase'>
                                <li onClick={() => handleCoin('usdt')} className='block w-full rounded py-[5px] px-[10px] hover:bg-blue-900 transition-all cursor-pointer'>USDT</li>
                                <li onClick={() => handleCoin('eth')} className='block w-full rounded py-[5px] px-[10px] hover:bg-blue-900 transition-all cursor-pointer'>ETH</li>
                                <li onClick={() => handleCoin('matic')} className='block w-full rounded py-[5px] px-[10px] hover:bg-blue-900 transition-all cursor-pointer'>MATIC</li>
                            </ul>
                        </div>
                    )} */}
                </div>
            </div>
            <div className="flex flex-col gap-1 mb-5">
                <label htmlFor="">Token</label>
                <div className="flex items-center gap-[10px]">
                <div className="flex items-center border border-pdc-blue p-[1px] rounded-[5px] bg-pdc-blue w-full">
                    <input readOnly disabled value={tokens} className='rounded-l-[5px] py-[4px] px-[10px] bg-pdc-d-gray w-full' type="number" min={0} placeholder='0' />
                    <button className=' w-[80px] h-full cursor-pointer'>PDC</button>
                </div>
                </div>

                <div className="flex my-3 items-center gap-[10px] justify-center">
                    <button onClick={() => setUsd(1000)} className='px-[10px] py-[1px] rounded text-pdc-red border border-pdc-red hover:bg-pdc-red hover:text-white transition-all'>$1000</button>
                    <button onClick={() => setUsd(5000)} className='px-[10px] py-[1px] rounded text-pdc-red border border-pdc-red hover:bg-pdc-red hover:text-white transition-all'>$5000</button>
                    <button onClick={() => setUsd(20000)} className='px-[10px] py-[1px] rounded text-pdc-red border border-pdc-red hover:bg-pdc-red hover:text-white transition-all'>$20000</button>
                    <button onClick={() => setUsd(50000)} className='px-[10px] py-[1px] rounded text-pdc-red border border-pdc-red hover:bg-pdc-red hover:text-white transition-all'>$50000</button>
                </div>

                <div className="flex items-center justify-center bg-pdc-l-blue text-white gap-[10px] rounded-[5px] py-[5px]">
                    <span>${usd}</span>
                    <span>/</span>
                    <span>${perPdcPrice}</span>
                    <span>=</span>
                    <span>{tokens} PDC</span>
                </div>
            </div>
            <div className="flex items-center gap-[10px] justify-center">
                {/* <button onClick={() => calulateTokens()} className='py-[3px] border border-pdc-red text-pdc-red px-[20px] rounded-[5px] font_cat flex items-center w-fit mt-[10px] transition-all hover:text-white hover:bg-pdc-red'>Calculate</button> */}
                <button onClick={() => handleSalePage(true)} className='py-[3px] bg-pdc-red border border-pdc-red px-[20px] rounded-[5px] text-white font_cat flex items-center w-fit mt-[10px]'>Purchase</button>
            </div>
            </div>
    </div>
  )
}

export default TokenSaleCalculator