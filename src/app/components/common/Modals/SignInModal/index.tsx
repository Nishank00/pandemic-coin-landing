import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../../InputField'
import Button from '../../Button'
import { FaTimes } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import ForgotPasswordModal from '../ForgotPasswordModal';
import { toast } from 'react-toastify';
import { useCommonStore } from '../../../../../store/commonStore';

interface SignInModalProps{
    showModal?: (boolean) => void;
    setVerificationModal?: (boolean) => void;
}


const SignInModal = ({showModal, setVerificationModal}:SignInModalProps) => {
    const {register, formState: {errors}, handleSubmit, watch} = useForm();
    const [showPass, setShowPass]  = useState(false);
    const [loading,  setLoading] = useState(false)
    const [forgotPassword, setForgotPassword] = useState(false);
    const { setUser, setAccessToken, setIsLoggedIn}:any = useCommonStore();
    const email = watch('email');

 
    const onSubmit = async (inpData:any) => {
        setLoading(true)
        const data = await fetch('/api/sign-in', {
            method: 'POST',
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify(inpData)
        })

        const res = await data.json();
        setLoading(false);
        if(res.status === true){
            showModal(false);
            setIsLoggedIn(true)
            setUser(res?.data?.user)
            setAccessToken(res?.data?.accessToken)
            toast.success('SignIn Successfull');
        }else{
            toast.error(res?.message);
            if(res?.data?.isVerified !== undefined && !res?.data?.isVerified){
                showModal(false)
                setVerificationModal(true)
            }
            
        }
    }

  if(forgotPassword) return <ForgotPasswordModal showModal={showModal} userEmail={email} setVerificationModal={setVerificationModal} />

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[700px] rounded-[13px] backdrop-blur-[42px] bg-transparent p-[20px] m-[10px] flex flex-col gap-[20px] relative'>
        <button onClick={() => showModal(false)} className='absolute right-[20px] top-[30px] cursor-pointer hover:text-pdc-red'><FaTimes size={25} /></button>
        <h2 className='mb-3 font-extralight text-white text-[20px] md:text-[40px]'>Sign In</h2>
        <InputField 
            name={'email'}
            label={'Email Address'}
            type='email'
            errors={errors}
            required={true}
            register={register}
            placeHolder={'Email Address'}
        />
        <div className="relative">
            <InputField 
                name={'password'}
                type={showPass ? "text": 'password'}
                label={'Password'}
                errors={errors}
                required={true}
                register={register}
                placeHolder={'Password'}
            />
            <button className='absolute z-2 right-[5px] top-[35px] text-[40px]' onClick={() => setShowPass(!showPass)}>{showPass ? <IoIosEyeOff /> : <IoIosEye /> }</button>
        </div>
        <div className="">
            <button onClick={() => setForgotPassword(true)} className='text-pdc-red block w-fit ml-auto mt-[5px] hover:underline cursor-pointer transition-all'>Forgot Password?</button>
        </div>
        <Button 
            label='Sign In'
            type='submit'
            className='block mx-auto px-[60px]'
            loading={loading}
        />
    </form>
  )
}

export default SignInModal