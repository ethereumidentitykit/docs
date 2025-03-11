'use client'

import React from 'react'
import { base, mainnet, optimism } from 'viem/chains'
import { TransactionModal, TransactionProvider } from 'ethereum-identity-kit'
import { createConfig, http, WagmiProvider } from 'wagmi'
import { connectorsForWallets, darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  rabbyWallet,
  rainbowWallet,
  coinbaseWallet,
  injectedWallet,
  metaMaskWallet,
  walletConnectWallet,
  safeWallet,
} from '@rainbow-me/rainbowkit/wallets'

const queryClient = new QueryClient()

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [coinbaseWallet, injectedWallet],
    },
    {
      groupName: 'Popular',
      wallets: [rainbowWallet, metaMaskWallet, walletConnectWallet],
    },
    {
      groupName: 'Other',
      wallets: [rabbyWallet, safeWallet],
    },
  ],
  {
    appName: 'Ethereum Identity Kit - Docs',
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    appDescription: 'Ethereum Identity Kit - Docs',
    appUrl: 'https://docs.ethidentitykit.com',
    appIcon: 'https://ethidentitykit.com/logo.png',
  }
)

const config = createConfig({
  chains: [mainnet, base, optimism],
  connectors,
  transports: {
    [mainnet.id]: http(
      process.env.NEXT_PUBLIC_MAINNET_ALCHEMY_ID
        ? `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_MAINNET_ALCHEMY_ID}`
        : 'https://mainnet.infura.io/v3/'
    ),
    [base.id]: http(
      process.env.NEXT_PUBLIC_BASE_ALCHEMY_ID
        ? `https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_BASE_ALCHEMY_ID}`
        : 'https://mainnet.base.org'
    ),
    [optimism.id]: http(
      process.env.NEXT_PUBLIC_OPTIMISM_ALCHEMY_ID
        ? `https://opt-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_OPTIMISM_ALCHEMY_ID}`
        : 'https://mainnet.optimism.io'
    ),
  },
})

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider theme={darkTheme()}>
          <TransactionProvider>
            {children}
            <TransactionModal />
          </TransactionProvider>
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  )
}

export default Providers
