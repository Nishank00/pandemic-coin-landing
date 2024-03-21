import React from 'react'
import { GiBackwardTime } from "react-icons/gi";

const KycInProcess = () => {

  return (
    <div className='w-full max-w-[500px] mx-auto my-[10px] rounded backdrop-blur-[42px] bg-[#ffffff0a] p-[20px] flex flex-col items-center gap-[15px] text-center'>
        <GiBackwardTime className='text-[70px] text-pdc-red'  />
        <h2 className='text-[16px] md:text-[25px]'>Your KYC is in process</h2>
    </div>
  )
}

export default KycInProcess