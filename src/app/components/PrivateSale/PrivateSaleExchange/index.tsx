import React from 'react'
import Button from '../../common/Button'

const PrivateSaleExchange = () => {
  return (
    <div className='w-full max-w-[500px] mx-auto my-[10px] rounded-[13px] backdrop-blur-[42px] bg-[#ffffff0a] p-[20px] flex flex-col  gap-[15px]'>
        <h2 className='text-[20px] md:text-[30px]'>Buy $PDC</h2>
        <div className="bg-gray-800 rounded py-[5px] px-[20px] ">
            <div className="flex items-center justify-between">
                <span className='text-gray-500 text-[14px]'>From:</span>
            </div>
            <div className="flex items-center justify-between">
                <input type="number" placeholder='0' className='bg-transparent w-full text-[20px]' />
                <span>USDT</span>
            </div>
        </div>
        <div className="bg-gray-800 rounded py-[5px] px-[20px]">
            <div className="flex items-center justify-between text-gray-500 text-[14px]">
                <span>To:</span>
                <span>1 PDC = $10</span>
            </div>
            <div className="flex items-center justify-between">
                <input type="number" placeholder='0' className='bg-transparent w-full text-[20px]' />
                <span>PDC</span>
            </div>
        </div>
        <Button 
            type='submit'
            label='Buy'
            className='flex justify-center'
        />
    </div>
  )
}

export default PrivateSaleExchange