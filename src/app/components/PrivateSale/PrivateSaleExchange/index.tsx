import React, { useContext, useEffect, useState } from 'react'
import Button from '../../common/Button'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'
import { PrivateSaleContext } from '../../../../context/privateSaleContext'
import { IoIosArrowDown } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";

const PrivateSaleExchange = () => {
    const {DepositCoins, minAmount, maxAmount, coin, setCoin, txnLoading, balance, txnHash} = useContext(PrivateSaleContext)
    const {open}  = useWeb3Modal()
    const [showCoins, setShowCoins] = useState(false)
    const {isConnected, address} = useAccount();
    const [amount, setAmount] = useState<any>("")
    const [pdc, setPdc] = useState(0)
    const [disable, setDisable] = useState(false)
    

    const handleCoinChange = (coin:string) => {
        setCoin(coin)
        setShowCoins(false)
    }

    useEffect(() => {
        setPdc(amount/10)
        if(amount >= minAmount && amount <= maxAmount){
            setDisable(false)
        }else{
            if(amount > 0){
                setDisable(true)
            }else{
                setDisable(false)
            }
        }
    },[amount])


  return (
    <div className='w-full max-w-[700px] mx-auto my-[10px] rounded backdrop-blur-[42px] bg-[#ffffff0a] p-[20px] flex flex-col  gap-[15px]' suppressHydrationWarning>
        <div className="mb-[20px]">
        <h2 className='text-[20px] md:text-[30px]'>Buy $PDC</h2>
        <span className='text-gray-500 text-[12px]'>Min: {minAmount} - Max: {maxAmount}</span>
        </div>
        <div className="">
        <div className={`bg-gray-900 rounded py-[5px] px-[20px] relative ${disable ? 'border border-red-500': ""}`}>
            <div className="flex items-center justify-between">
                <span className='text-gray-500 text-[14px]'>From:</span>
                <button onClick={() => setAmount(balance)} className={`cursor-pointer text-gray-500 text-[14px]`}>Balance: {balance}</button>
            </div>
            <div className="flex items-center justify-between ">
                <input value={amount} onChange={(e) => !isNaN(Number(e.target.value)) && setAmount(Number(e.target.value))} type="text" placeholder='0' className='bg-transparent w-full text-[20px] ' />
                <button onClick={() => setShowCoins(!showCoins)} className='flex gap-1 items-center'>
                    <img src={`/images/${coin}.png`} className='h-[20px]' />
                    <span className='uppercase cursor-pointer'>{coin}</span>
                    <IoIosArrowDown className='text-gray-500 text-[40px]' />
                </button>
                {showCoins && (
                    <ul className="absolute w-[150px] bg-gray-600 right-[25px] top-[60px] rounded p-[7px] text-[14px]">
                        <li className='transition-all cursor-pointer flex items-center gap-[7px] hover:bg-gray-700 rounded p-[10px]' onClick={() => handleCoinChange('usdt')}>
                            <img src="/images/usdt.png" className='h-[20px]' />
                            USDT
                        </li>
                        <li className='transition-all cursor-pointer flex items-center gap-[7px] hover:bg-gray-700 rounded p-[10px]' onClick={() => handleCoinChange('usdc')}>
                        <img src="/images/usdc.png" className='h-[20px]' />
                            USDC
                        </li>
                    </ul>
                )}
            </div>
        </div>
        {disable && (
            <span className='text-[14px] text-red-500'>{amount < minAmount ? `* Your amount is less than ${minAmount}` : amount > maxAmount ? `* Your amount is greater than ${maxAmount}` : ``}</span>
        )}
        </div>
        <div className="bg-gray-900 rounded py-[5px] px-[20px]">
            <div className="flex items-center justify-between text-gray-500 text-[14px]">
                <span>To:</span>
                <span>1 PDC = $10</span>
            </div>
            <div className="flex items-center justify-between">
                <input value={pdc}  type="number" placeholder='0' disabled className='bg-transparent w-full text-[20px]' />
                <span className='flex gap-1 items-center'>
                <img src={`/images/pdc.webp`} className='h-[20px]' />
                PDC
                </span>
            </div>
        </div>
        {isConnected ? (
            <Button 
            label={'Buy $PDC'}
            className={`flex justify-center ${disable ? '!opacity-50 !cursor-not-allowed' : 'opacity-100'} w-full max-w-[300px] mx-auto`}
            onClick={() => disable ? {} : DepositCoins(amount)}
            loading={txnLoading}
        />
        ): (
            <Button 
            label='Connect Wallet'
            className='flex justify-center w-full max-w-[300px] mx-auto'
            onClick={() => open()}
        />
        // <w3m-button />
        )}
        {txnHash && (
            <a target='_blank' href={`https://polygonscan.com/tx/${txnHash}`} className='flex items-center opacity-50 hover:opacity-100 gap-[5px] hover:underline cursor-pointer mx-auto my-[10px] text-center'>View on Blockchain <GoLinkExternal /></a>
        )}
    </div>
  )
}

export default PrivateSaleExchange