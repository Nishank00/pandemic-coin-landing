import React from 'react'
import KycSuccess from './components/KycSuccess'
import KycError from './components/KycError'
import { useCommonStore } from '../../../../store/commonStore'
import Link from 'next/link'

const PrivateSaleKyc = () => {
  const {user}:any = useCommonStore();

    // return <KycError />
    // return <KycSuccess />
  return (
    <div className='w-full max-w-[500px] mx-auto my-[10px] rounded-[13px] backdrop-blur-[42px] bg-[#ffffff0a] p-[20px] flex flex-col items-center gap-[15px] text-center'>
        <h2 className='text-[20px] md:text-[30px]'>KYC</h2>
        <p>Please read the guide carefully and enter accurate information for smooth process. To read a guide, please follow this link. If there is no problem with the application, next step will be opened.</p>
        <Link href={`https://verify-with.blockpass.org/?clientId=private_sale_aa0f8&refId=${user?.email}`} target="_blank" className='block py-[5px] px-[80px] max-w-[200px] text-pdc-red border border-pdc-red rounded-[50px] cursor-pointer hover:bg-pdc-red hover:text-white'>Submit</Link>
    </div>
  )
}

export default PrivateSaleKyc