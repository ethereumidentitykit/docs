'use client'

import React from 'react'
import { ProfileCard } from '@encrypteddegen/identity-kit'
import { useAccount } from 'wagmi'

const DocsProfileCard = () => {
  const { address: connectedAddress } = useAccount()

  return (
    <ProfileCard
      addressOrName={connectedAddress || 'brantly.eth'}
      darkMode={true}
      connectedAddress={connectedAddress}
    />
  )
}

export default DocsProfileCard
