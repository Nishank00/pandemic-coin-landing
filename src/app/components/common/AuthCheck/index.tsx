'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useCommonStore } from '../../../../store/commonStore';
import { toast } from 'react-toastify';

const AuthCheck = ({children}:any) => {
    let call = true;
  const router = useRouter();
  const {isLoggedIn}:any = useCommonStore();

  useEffect(() => {
    console.log('nwt auth check ====>', isLoggedIn)
    if(call){
      if(!isLoggedIn){
        toast.error("You need to sign In first")
        setTimeout(() => {
            router.push('/token-sale');
        }, 500);
    }
    call = false;
    }
  },[])
  return (
    <>
     {children}   
    </>
  )
}

export default AuthCheck