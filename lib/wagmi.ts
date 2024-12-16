'use client'

import {
  rabbyWallet,
  rainbowWallet,
  coinbaseWallet,
  injectedWallet,
  metaMaskWallet,
  walletConnectWallet,
  safeWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { mainnet, optimism, base } from 'wagmi/chains'
import { type Chain, connectorsForWallets } from '@rainbow-me/rainbowkit'
import { http, createStorage, cookieStorage, createConfig } from 'wagmi'
import { APP_DESCRIPTION, APP_NAME, APP_URL } from '../constants'

// Define the connectors for the app
// Purposely using only these for now because of a localStorage error with the Coinbase Wallet connector
const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [
        coinbaseWallet,
        rainbowWallet,
        metaMaskWallet,
        rabbyWallet,
        safeWallet,
        walletConnectWallet,
        injectedWallet,
      ],
    },
  ],
  {
    appName: APP_NAME,
    // @ts-expect-error WalletConnect project ID is parsed as an environment variable
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    appDescription: APP_DESCRIPTION,
    appUrl: APP_URL,
    appIcon: 'https://ethfollow.xyz/logo.png',
  }
)

export type ChainWithDetails = Chain & {
  iconBackground?: string
  iconUrl?: string
  custom: {
    chainDetail?: string
    gasFeeDetail?: string
  }
}

const config = createConfig({
  ssr: true,
  connectors,
  chains: [mainnet, optimism, base],
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [mainnet.id]: http(`https://mainnet.infura.io/v3/`, {
      batch: true,
    }),
    [optimism.id]: http(`https://mainnet.optimism.io`, {
      batch: true,
    }),

    [base.id]: http('https://mainnet.base.org/', { batch: true }),
  },
})

export default config
