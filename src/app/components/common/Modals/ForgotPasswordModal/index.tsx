import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../../InputField'
import Button from '../../Button'
import { FaTimes } from "react-icons/fa";
import { toast } from 'react-toastify';
import { AppContext } from '../../../../../context/appContext/appContext';

interface ForgotPasswordModalProps{
    showModal?: (boolean) => void;
    setVerificationModal?: (boolean) => void;
    userEmail?: string;

}


const ForgotPasswordModal = ({showModal,userEmail, setVerificationModal}:ForgotPasswordModalProps) => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [loading, setLoading] = useState(false);
    const {setIsResetPassword}  = useContext(AppContext)

    const onSubmit = async (inpData:any) => {
        setLoading(true)
        const data = await fetch('/api/forgot-password', {
            method: 'POST',
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify(inpData)
        })

        const res = await data.json();
        setLoading(false);
        if(res.status === true){
            toast.success(res.message)
            showModal(false);
            setIsResetPassword(true);
            setVerificationModal(true)
        }else{
            toast.error(res?.message);
        }
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[700px] rounded backdrop-blur-[42px] bg-transparent p-[20px] m-[10px] flex flex-col gap-[20px] relative'>
        <button onClick={() => showModal(false)} className='absolute right-[20px] top-[30px] cursor-pointer hover:text-pdc-red'><FaTimes size={25} /></button>
        <h2 className='mb-3 font-extralight text-white text-[20px] md:text-[40px]'>Forgot Password</h2>
        <InputField 
                name={'email'}
                label={'Email Address'}
                type='email'
                value={userEmail}
                errors={errors}
                required={true}
                register={register}
                placeHolder={'Email Address'}
        />
        <Button 
            label='Send Code'
            type='submit'
            className='block mx-auto px-[60px]'
            loading={loading}
        />
    </form>
  )
}

export default ForgotPasswordModal