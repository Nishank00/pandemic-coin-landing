import Link from 'next/link'
import React from 'react'
// import CountdonwTimer from './components/CountdownTimer'
import Sparkle from '../../svgs/Sparkle'
import dynamic from 'next/dynamic'
const CountdonwTimer:any = dynamic(() => import('./components/CountdownTimer'))

const TokenSaleHeroSection = () => {
  return (
    <div className="relative overflow-hidden" suppressHydrationWarning>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:h-[90vh] items-center py-[50px] mb-[70px] md:mb-0 relative z-[2]" >
        <div className="text-center md:text-left mb-[30px] md:mb-0">
            <h1 className='text-[45px] md:text-[85px] md:font-semibold leading-[1] mb-3 font_cat'>The Token Sale <br /> is now <span className='text-pdc-red'>Live!</span></h1>
            <p className=" text-gray-300">This project offers the potential growth by <br /> introducing Pandemic Coin during our Token sale</p>
            <Link href={'#'} className='py-[3px] bg-[#BB1A37] px-[20px] rounded-[5px] text-white font_cat flex items-center mx-auto md:mx-0 w-fit mt-[10px]'>Whitepaper</Link>
        </div>
        <div className="flex items-center justify-center md:justify-end">
            <CountdonwTimer initialTime={'25-03-2024'} />
        </div>
    </div>
    </div>
  )
}

export default TokenSaleHeroSection