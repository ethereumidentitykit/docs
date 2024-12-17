import Image from 'next/image'
import logo from '/public/logo.svg'
import Link from 'next/link'
import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { truncateAddress } from '@encrypteddegen/identity-kit'

const Navigation = () => {
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { isConnected, address } = useAccount()

  return (
    <div className="navigation flex fixed top-0 border-b-2 border-white/30 backdrop-blur-lg bg-[#111111]/50 left-0 right-0 h-20 z-[1000] items-center max-w-[1700px] mx-auto justify-between w-full px-4 md:px-12 2xl:px-16">
      <div>
        <Image src={logo} alt="Ethereum Identity Kit" width={50} height={50} />
      </div>
      <div className="flex items-center gap-4 md:gap-12">
        <Link href="/docs" className="text-white/70 hover:text-white cursor-pointer transition-all text-lg font-bold">
          Docs
        </Link>
        {isConnected ? (
          <button
            onClick={() => openAccountModal?.()}
            className="text-white border-white hover:bg-white hover:text-[#222222] transition-all border-2 rounded-lg h-[50px] font-bold w-44"
          >
            {truncateAddress(address)}
          </button>
        ) : (
          <button
            onClick={() => openConnectModal?.()}
            className="text-white border-white hover:bg-white hover:text-[#222222] transition-all border-2 rounded-lg h-[50px] font-bold w-44"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  )
}

export default Navigation
