'use client';
import React from 'react'
import PrivateSaleKyc from './PrivateSaleKyc'
import PrivateSaleAgreement from './PrivateSaleAgreement'
import PrivateSaleExchange from './PrivateSaleExchange'
import { useCommonStore } from '../../../store/commonStore';

const PrivateSale = () => {
  const {user}:any = useCommonStore();
  if(user.kycStatus === 'none') return  <PrivateSaleKyc />;
  return  <PrivateSaleAgreement />;
  return (
    <div>
        {/* <PrivateSaleExchange /> */}
       
        {/* <PrivateSaleAgreement /> */}
    </div>
  )
}

export default PrivateSale