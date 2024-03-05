import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../../InputField'
import Button from '../../Button'
import { FaTimes } from "react-icons/fa";
import { toast } from 'react-toastify';
import { AppContext } from '../../../../../context/appContext/appContext';
import ResetPassModal from '../ResetPassModal';

interface VerificationModalProps{
    showModal?: (boolean) => void;
    setSignInModal?: (boolean) => void;
}


const VerificationModal = ({showModal, setSignInModal}:VerificationModalProps) => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const [loading, setLoading] = useState(false);
    const {isResetPassword,setIsResetPassword} = useContext(AppContext);
    const [showResetModal, setShowResetModal] = useState(false);
    const [verfCode, setVerfCode] = useState(0);

    const onSubmit = async (inpData:any) => {
        setLoading(true)
        const data = await fetch('/api/verify-code', {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(inpData)
        })

        const res = await data.json();
        setLoading(false)
        if(res.status === true){
            toast.success('Verified Successfull');
            
            if(isResetPassword){
                setIsResetPassword(false);
                setVerfCode(res?.data?.verificationCode)
                setShowResetModal(true);
            }else{
                showModal(false);
                setSignInModal(true)
            }
        }else{
            toast.error(res?.message);
        }
    }

    if(showResetModal) return <ResetPassModal showModal={showModal} verificationCode={verfCode} setSignInModal={setSignInModal} />
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[700px] rounded-[13px] backdrop-blur-[42px] bg-transparent p-[20px] m-[10px] flex flex-col gap-[20px] relative'>
        <button onClick={() => showModal(false)} className='absolute right-[20px] top-[30px] cursor-pointer hover:text-pdc-red'><FaTimes size={25} /></button>
        <h2 className='mb-3 font-extralight text-white text-[20px] md:text-[40px]'>Verify Account</h2>
        <InputField 
                name={'verificationCode'}
                label={'Enter Verfication Code'}
                type='number'
                max={999999}
                errors={errors}
                required={true}
                register={register}
                placeHolder={'XXXXXX'}
        />
        <Button 
            label='Verify Code'
            type='submit'
            className='block mx-auto px-[60px]'
            loading={loading}
        />
    </form>
  )
}

export default VerificationModal