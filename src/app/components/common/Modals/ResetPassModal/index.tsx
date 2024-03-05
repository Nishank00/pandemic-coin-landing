import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../../InputField'
import Button from '../../Button'
import { FaTimes } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { toast } from 'react-toastify';
import { useCommonStore } from '../../../../../store/commonStore';

interface ResetPassModalProps{
    showModal?: (boolean) => void;
    setSignInModal?: (boolean) => void;
    verificationCode: number
}


const ResetPassModal = ({showModal, setSignInModal, verificationCode}:ResetPassModalProps) => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [showPass, setShowPass]  = useState(false);
    const [loading,  setLoading] = useState(false)

    const onSubmit = async (inpData:any) => {
        if(inpData?.password !== inpData?.confirm_pass) return toast.error("Password doesn't match!")
        setLoading(true)
        const data = await fetch('/api/reset-password', {
            method: 'POST',
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify({
                password: inpData?.password,
                verificationCode
            })
        })

        const res = await data.json();
        setLoading(false);
        if(res.status === true){
            toast.success(res.message);
            showModal(false)
            setSignInModal(true)
        }else{
            toast.error(res.message)
        }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[700px] rounded-[13px] backdrop-blur-[42px] bg-transparent p-[20px] m-[10px] flex flex-col gap-[20px] relative'>
        <button onClick={() => showModal(false)} className='absolute right-[20px] top-[30px] cursor-pointer hover:text-pdc-red'><FaTimes size={25} /></button>
        <h2 className='mb-3 font-extralight text-white text-[20px] md:text-[40px]'>Reset Password</h2>
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
        <div className="relative">
            <InputField 
                    name={'confirm_pass'}
                    type={showPass ? "text": 'password'}
                    label={'Confirm Password'}
                    errors={errors}
                    required={true}
                    register={register}
                    placeHolder={'Confirm Password'}
            />
            <button className='absolute z-2 right-[5px] top-[35px] text-[40px]' onClick={() => setShowPass(!showPass)}>{showPass ? <IoIosEyeOff /> : <IoIosEye /> }</button>
        </div>
        <Button 
            label='Reset Password'
            type='submit'
            className='block mx-auto px-[60px]'
            loading={loading}
        />
    </form>
  )
}

export default ResetPassModal