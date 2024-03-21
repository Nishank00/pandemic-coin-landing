'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useCommonStore } from '../../../../store/commonStore';
import { toast } from 'react-toastify';

const AuthCheck = ({children}:any) => {
    let call = true;
  const router = useRouter();
  const {setUser}:any = useCommonStore();

  const getUser = async () => {
    const data = await fetch('/api/get-user')

    const res = await data.json();
    if(res.status === true){
      setUser(res?.data?.user)
    }else{
      toast.error(res.message)
      router.push("/")
    }
  }

  useEffect(() => {
    if(call){
      getUser()
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