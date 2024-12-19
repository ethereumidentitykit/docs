'use client'

import React from 'react'
import { ProfileCard } from 'ethereum-identity-kit'
import { useAccount } from 'wagmi'

const DocsProfileCard = () => {
  const { address: connectedAddress } = useAccount()

  return (
    <ProfileCard
      addressOrName={connectedAddress || 'vitalik.eth'}
      darkMode={true}
      connectedAddress={connectedAddress}
    />
  )
}

export default DocsProfileCard
