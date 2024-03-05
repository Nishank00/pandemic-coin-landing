import React from 'react'
import { LiaTimesCircle } from "react-icons/lia";

const KycError = () => {
  return (
    <div className='w-full max-w-[500px] mx-auto my-[10px] rounded-[13px] backdrop-blur-[42px] bg-[#ffffff0a] p-[20px] flex flex-col items-center gap-[15px] text-center'>
        <LiaTimesCircle className='text-[70px] text-pdc-red' />
        <h2 className='text-[20px] md:text-[30px]'>Error</h2>
        <button className='block py-[5px] px-[80px] max-w-[200px] text-pdc-red border border-pdc-red rounded-[50px] cursor-pointer hover:bg-pdc-red hover:text-white'>Submit</button>
    </div>
  )
}

export default KycError