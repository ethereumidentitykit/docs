'use client'

import React from 'react'
import { useAccount } from 'wagmi'
import { Address, FollowButton as FollowButtonComponent } from 'ethereum-identity-kit'
import { useConnectModal } from '@rainbow-me/rainbowkit'

const FollowButton = ({ lookupAddress }: { lookupAddress: Address }) => {
  const { openConnectModal } = useConnectModal()
  const { address: connectedAddress } = useAccount()

  return (
    <FollowButtonComponent
      connectedAddress={connectedAddress}
      lookupAddress={lookupAddress}
      onDisconnectedClick={() => openConnectModal?.()}
    />
  )
}

export default FollowButton
