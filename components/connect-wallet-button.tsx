'use client'

import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useAccountModal } from '@rainbow-me/rainbowkit'
import { truncateAddress } from 'ethereum-identity-kit'

const ConnectWalletButton = () => {
  const { address } = useAccount()
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return address ? (
    <button
      onClick={() => openAccountModal?.()}
      className="text-white border-white hover:bg-white hover:text-[#222222] transition-all border-2 rounded-sm h-[48px] font-bold w-44"
    >
      {truncateAddress(address)}
    </button>
  ) : (
    <button
      onClick={() => openConnectModal?.()}
      className="text-white border-white hover:bg-white hover:text-[#222222] transition-all border-2 rounded-sm h-[48px] font-bold w-44"
    >
      Connect Wallet
    </button>
  )
}

export default ConnectWalletButton
