import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/logo.svg'

const Navigation = () => {
  return (
    <div className="navigation fixed top-0 left-0 w-full border-b-2 border-white/30 backdrop-blur-md bg-[#111111]/75 h-20 z-[1000] items-center justify-between px-4 md:px-12 2xl:px-16">
      <div className="flex items-center justify-between max-w-[1700px] h-full mx-auto">
        <Link href="/">
          <Image src={logo} alt="Ethereum Identity Kit" width={50} height={50} />
        </Link>
        <div className="flex items-center gap-4 md:gap-12">
          <Link href="/" className="text-white/70 hover:text-white cursor-pointer transition-all text-lg font-bold">
            Home
          </Link>
          <Link href="/docs" className="text-white/70 hover:text-white cursor-pointer transition-all text-lg font-bold">
            Docs
          </Link>
          {/* <ConnectWalletButton /> */}
        </div>
      </div>
    </div>
  )
}

export default Navigation
