import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../../InputField'
import Button from '../../Button'
import { FaTimes } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { toast } from 'react-toastify';

interface SignupModalProps{
    showModal?: (boolean) => void;
    setVerificationModal?: (boolean) => void;
}

const SignupModal = ({showModal, setVerificationModal}: SignupModalProps) => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [showPass, setShowPass]  = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (inpData:any) => {
        setLoading(true);
        const data = await fetch('/api/sign-up', {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(inpData)
        })

        const res = await data.json();
        setLoading(false)
        if(res.status === true){
            showModal(false);
            toast.success('Signup Successfull');
            setVerificationModal(true);
        }else{
            toast.error(res?.message);
        }
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[700px] rounded-[13px] backdrop-blur-[42px] bg-transparent p-[20px] m-[10px] flex flex-col gap-[20px] relative'>
        <button onClick={() => showModal(false)} className='absolute right-[20px] top-[20px] cursor-pointer hover:text-pdc-red'><FaTimes size={25} /></button>
        <h2 className='mb-3 font-extralight text-white text-[20px] md:text-[40px]'>Sign Up</h2>
        <div className="flex items-center gap-[10px]">
            <InputField 
                name={'firstName'}
                label={'First Name'}
                errors={errors}
                required={true}
                register={register}
                placeHolder={'First Name'}
            />
            <InputField 
                name={'lastName'}
                label={'Last Name'}
                errors={errors}
                required={true}
                register={register}
                placeHolder={'Last Name'}
                classNames={{
                    input: `border-gray-500`,
                    label: `font-bold`
                }}
            />
        </div>
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
                    type={showPass ? 'text' : 'password'}
                    label={'Password'}
                    errors={errors}
                    required={true}
                    register={register}
                    placeHolder={'Password'}
            />
            <button type='button' className='absolute z-2 right-[5px] top-[35px] text-[40px]' onClick={() => setShowPass(!showPass)}>{showPass ? <IoIosEyeOff /> : <IoIosEye /> }</button>
        </div>
        <Button 
            label='Signup'
            type='submit'
            className='block mx-auto px-[60px]'
            loading={loading}
        />
    </form>
  )
}

export default SignupModal