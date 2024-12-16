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
    <div className="flex fixed top-0 left-0 right-0 h-20 z-[1000] items-center max-w-[1700px] mx-auto justify-between w-full">
      <div>
        <Image src={logo} alt="Ethereum Identity Kit" width={50} height={50} />
      </div>
      <div className="flex items-center gap-12">
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
