'use client';
import React, { useEffect, useState } from 'react'
import PrivateSaleKyc from './PrivateSaleKyc'
import PrivateSaleAgreement from './PrivateSaleAgreement'
import PrivateSaleExchange from './PrivateSaleExchange'
import { useCommonStore } from '../../../store/commonStore';
import { useRouter } from 'next/navigation';
import PrivateSaleContextProvider from '../../../context/privateSaleContext/PrivateSaleContextProvider';
import PrivateSaleNavigation from './PrivateSaleNavigation';

const PrivateSale = () => {
  const {user}:any = useCommonStore();
  const [step, setStep] = useState(user?.kycStatus && user?.kycStatus !== 'approved' ? 0 : user?.kycStatus && user?.kycStatus === 'approved' && user?.agreedTerms !== true ? 1 : user?.kycStatus && user?.kycStatus === 'approved' && user?.agreedTerms === true ? 2 : 3 )


  useEffect(() => {
    if(user?.kycStatus && user?.kycStatus !== 'approved'){
      setStep(0)
    }else if(user?.kycStatus && user?.kycStatus === 'approved' && user?.agreedTerms !== true){
      setStep(1)
    }else if(user?.kycStatus && user?.kycStatus === 'approved' && user?.agreedTerms === true){
      setStep(2)
    }
    
  }, [user])
  if(step === 0) return  <PrivateSaleNavigation key={1} step={step} setStep={setStep}><PrivateSaleKyc /></PrivateSaleNavigation>;
  if(step === 1) return <PrivateSaleNavigation key={2} step={step} setStep={setStep}><PrivateSaleAgreement /></PrivateSaleNavigation>
  if(step === 2) return <PrivateSaleNavigation key={3} step={step} setStep={setStep}><PrivateSaleExchange /></PrivateSaleNavigation>

}

export default PrivateSale