'use client';
import React from 'react'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { arbitrum, mainnet, polygon } from 'viem/chains'
import { WagmiConfig } from 'wagmi';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'a7458902667813558015749f6f2ee2c6'

// 2. Create wagmiConfig
const metadata = {
  name: 'Pandemic',
  description: 'Pandemic',
  url: 'https://pandemiccoin.io',
  icons: ['https://ninjawarriors.sgp1.cdn.digitaloceanspaces.com/Website/ninjaWarriorsIcon_b18qok.png']
}

const chains = [mainnet, arbitrum, polygon]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

const Web3ModalWrapper = ({children}) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      {children}
    </WagmiConfig>
  )
}

export default Web3ModalWrapper