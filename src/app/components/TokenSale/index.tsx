'use client';
import React, { useEffect, useState } from 'react'
import { useCommonStore } from '../../../store/commonStore';
import PrivateSale from '../PrivateSale';
import TokenSaleCalculator from './TokenSaleCalculator';
import TokenSaleHeroSection from './TokenSaleHeroSection';
import { toast } from 'react-toastify';
import Container from '../common/Container';
import { HiArrowLeft } from 'react-icons/hi';

const TokenSalePage = () => {
    const {isLoggedIn, setUser}:any = useCommonStore();
    const [showSalePage, setShowSalePage] = useState(false);

    let call = true;
  
    const getUser = async () => {
      const data = await fetch('/api/get-user')
  
      const res = await data.json();
      if(res.status === true){
        setUser(res?.data?.user)
      }
    }
  
    useEffect(() => {
      if(call){
        getUser()
        call = false;
      }
    },[])

    const handleSalePage = (show: boolean) => {
        if(show){
            if(isLoggedIn){
                setShowSalePage(true)
            }else{
                toast.error('You need to login first')
                setShowSalePage(false)
            }
        }
    }

    useEffect(() => {
        handleSalePage(true);
    }, [isLoggedIn])
  return (
    <>
        {showSalePage ? (
        <>
            <Container>
            <button className='flex items-center gap-2' onClick={() => setShowSalePage(false)}>
              <HiArrowLeft className='text-pdc-red text-[24px]' />
                Landing Page
            </button>
            <PrivateSale />
            </Container>
        </>
    ): (
        <>
            
            <TokenSaleHeroSection />
            <TokenSaleCalculator handleSalePage={handleSalePage} />
        </>
    )}
    </>
  )
}

export default TokenSalePage