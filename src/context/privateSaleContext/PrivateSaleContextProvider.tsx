'use client';
import React, { useEffect, useState } from 'react'
import { PrivateSaleContext } from '.'
import { ContractAbis, Contracts } from '../../data/contracts'
import { fetchBalance, readContract, readContracts, waitForTransaction, writeContract } from '@wagmi/core';
import { useAccount } from 'wagmi';
import { toast } from 'react-toastify';
import { polygon } from 'viem/chains';

const PrivateSaleContextProvider = ({children}:any) => {
    const [coin, setCoin] = useState("usdt")
    const {address, isConnected} = useAccount();
    const [tokensForSale, setTokensForSale] = useState(0)
    const [minAmount, setMinAmount]= useState(0)
    const [maxAmount, setMaxAmount]= useState(0)
    const [txnLoading, setTxnLoading] = useState(false)
    const [balance, setBalance] = useState(0);
    const [txnHash, setTxnHash] = useState<string | null>(null)



    const fetchContractData = async () => {
        const data = await readContracts({
            contracts: [
                {
                    abi: ContractAbis.privateSale,
                    address: Contracts.privateSale,
                    functionName:"maxBuyAmount",
                    args: [],
                    chainId: polygon.id
                },
                {
                    abi: ContractAbis.privateSale,
                    address: Contracts.privateSale,
                    functionName:"minBuyAmount",
                    args: [],
                    chainId: polygon.id
                }

            ]
        })
        setMaxAmount(Number(data?.at(0)?.result) / 1000000)
        setMinAmount(Number(data?.at(1)?.result) / 1000000)
    }


    const getUserBalance = async () => {
        const data:any = await fetchBalance({
            address: address,
            token: Contracts[coin],
            chainId: polygon.id,
        })
        setBalance(data?.formatted)
       
    }

    useEffect(() => {
        fetchContractData()
    }, [])


    useEffect(() => {
        if(isConnected){
            getUserBalance();
        }
    }, [isConnected, coin])


    const DepositCoins = async (amount) => {
        setTxnLoading(true)

        try {

            const allowanceData = await readContract({
                address: Contracts[coin],
                abi: ContractAbis[coin],
                functionName: 'allowance',
                args: [address, Contracts.privateSale],
                chainId: polygon.id
            })
    
            const allowanceAmount = Number(allowanceData) / 1000000
            if(amount > allowanceAmount){
                const approval = await writeContract({
                    address: Contracts[coin],
                    abi: ContractAbis[coin],
                    chainId: polygon.id,
                    functionName: 'approve',
                    args: [Contracts.privateSale, amount * 1000000]
                })

                const approveRes = await waitForTransaction({
                    hash: approval.hash
                })
            }
           
            const data = await writeContract({
                abi: ContractAbis.privateSale,
                address: Contracts.privateSale,
                functionName: "deposit",
                args: [ amount, Contracts[coin]],
                chainId: polygon.id
            })
            const res = await waitForTransaction({
                hash: data?.hash
            })
            setTxnHash(data?.hash)
            toast.success(`Purchase has been successful`)
            getUserBalance()
            // console.log('Transaction receipt ===>', res);
        } catch (error) {
            console.error('Error executing transaction', error);
            toast.error(error?.details)
        }
        setTxnLoading(false)
    }



    return (
        <PrivateSaleContext.Provider value={{
            maxAmount,
            minAmount,
            tokensForSale,
            coin,
            balance,
            txnLoading,
            txnHash, 
            setCoin,
            setTokensForSale,
            DepositCoins
        }}>
            {children}
        </PrivateSaleContext.Provider>
    )
}

export default PrivateSaleContextProvider