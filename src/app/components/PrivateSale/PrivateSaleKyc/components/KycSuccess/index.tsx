import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const KycSuccess = () => {

  return (
    <div className='w-full max-w-[500px] mx-auto my-[10px] rounded backdrop-blur-[42px] bg-[#ffffff0a] p-[20px] flex flex-col items-center gap-[15px] text-center'>
        <IoMdCheckmarkCircleOutline className='text-[70px] text-pdc-red'  />
        <h2 className='text-[16px] md:text-[25px]'>Success! Your identity has been verified.</h2>
    </div>
  )
}

export default KycSuccess