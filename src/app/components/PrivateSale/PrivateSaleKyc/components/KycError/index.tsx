import React from 'react'
import { LiaTimesCircle } from "react-icons/lia";
import { useCommonStore } from '../../../../../../store/commonStore';
import Link from 'next/link';

const KycError = () => {
  const {user}:any = useCommonStore();
  return (
    <div className='w-full max-w-[500px] mx-auto my-[10px] rounded backdrop-blur-[42px] bg-[#ffffff0a] p-[20px] flex flex-col items-center gap-[15px] text-center'>
        <LiaTimesCircle className='text-[70px] text-pdc-red' />
        <h2 className='text-[16px] md:text-[24px]'>Your identity has not been confirmed</h2>
        <Link href={`https://verify-with.blockpass.org/?clientId=private_sale_aa0f8&refId=${user?.email}`} target="_blank" className='block py-[5px] px-[80px] max-w-[200px] text-pdc-red border border-pdc-red rounded-[50px] cursor-pointer hover:bg-pdc-red hover:text-white'>Submit Again</Link>
    </div>
  )
}

export default KycError