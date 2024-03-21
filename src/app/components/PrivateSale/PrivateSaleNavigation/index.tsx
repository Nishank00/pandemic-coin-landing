import React from 'react'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { useCommonStore } from '../../../../store/commonStore';

const PrivateSaleNavigation = ({step, setStep, children}:any) => {
  const {user}:any = useCommonStore();
  return (
    <>
    <div className="flex justify-between items-center relative ">
    {step > 0 ? (
      <button className='flex items-center gap-2' onClick={() => step > 0 && setStep(step - 1)}>
      <HiArrowLeft className='text-pdc-red text-[24px]' />
      {step === 2 ? "Agreement" : "KYC"}
      </button>
    ) : (<div></div>)}
    {step < 2 && user?.agreedTerms && (
      <button className='flex items-center gap-2' onClick={() => step < 2 && setStep(step + 1)}>
      {step === 0 ? "Agreement" : "Buy $PDC"}
      <HiArrowRight className='text-pdc-red text-[24px]' />
      </button>
    )}
    </div>
    {children}
    </>
  )
}

export default PrivateSaleNavigation