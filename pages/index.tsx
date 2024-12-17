'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useAccount } from 'wagmi'
import React, { useState } from 'react'
import { ProfileCard, ProfileStats, truncateAddress } from '@encrypteddegen/identity-kit'

import Navigation from '../components/navigation'
import efp from '/public/assets/efp.png'
import ens from '/public/assets/ens.png'
import siwe from '/public/assets/siwe.png'
import Copy from '/public/assets/icons/copy.svg'
import EFPLogo from '/public/assets/efp-logo.svg'
import Check from '/public/assets/icons/check.svg'
import Ethereum from '/public/assets/icons/ethereum.svg'
import ArrowDown from '/public/assets/icons/arrow-down.svg'

const Home = () => {
  const [copied, setCopied] = useState(false)
  const { address: connectedAddress } = useAccount()

  return (
    <>
      <Navigation />
      <main className="landing-page px-4 md:px-12 2xl:px-16 overflow-x-hidden w-full min-h-screen h-full bg-[#111111] text-white bg-repeat bg-grid-white/[0.1] relative">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none h-full inset-0 bg-[#111111] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,#111111cc_80%)]" />
        <div className="max-w-[1700px] mx-auto items-center flex xl:flex-row flex-col justify-between z-50 gap-20 xl:gap-6 pt-4 xs:pt-8 xl:pt-28 pb-12 xl:pb-0">
          <div className="flex flex-col items-center xl:items-start xl:text-left text-center gap-4 sm:gap-8 z-50 mt-24">
            <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-bold max-w-[700px] relative z-20">Ethereum Identity Kit</h1>
            <p className="text-xl xs:text-2xl sm:text-3xl md:text-3xl font-bold max-w-[700px] relative z-20">
              Complete your dapp <br className='hidden xs:block' />
              with the <span className="text-primary">Ethereum identity stack</span>.
            </p>
            <div
              className="flex items-center gap-2 sm:gap-6 px-4 sm:px-8 py-3 sm:py-5 w-fit rounded-md sm:rounded-lg group bg-[#444444]/80 cursor-pointer"
              onClick={() => {
                setCopied(true)
                navigator.clipboard.writeText('npm install ethereum-identity-kit')
                setTimeout(() => {
                  setCopied(false)
                }, 3000)
              }}
            >
              <p className="text-white font-bold text-sm sm:text-base">npm install ethereum-identity-kit</p>
              {copied ? (
                <Image src={Check} alt="copy" width={20} height={20} className="translate-x-1 w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Image
                  src={Copy}
                  alt="copy"
                  width={20}
                  height={20}
                  className="translate-x-1 group-hover:opacity-100 opacity-50 transition-all w-4 h-4 sm:w-5 sm:h-5"
                />
              )}
            </div>
            <div className="flex items-center gap-4">
              <Link href="/docs">
                <button className="text-white border-white hover:bg-white hover:text-[#111111] transition-all border-2 rounded-lg h-12 sm:h-[54px] font-bold text-base sm:text-lg w-[156px] sm:w-44">
                  Get started
                </button>
              </Link>
              <Link href="https://ethereumidentitykit.github.io/ethereum-identity-kit/" target="_blank">
                <button className="text-[#111111] bg-primary hover:bg-primaryHover transition-all rounded-lg h-12 sm:h-[54px] font-bold text-base sm:text-lg w-[156px] sm:w-44">
                  Playground
                </button>
              </Link>
            </div>
          </div>
          <div className="z-50 flex flex-col items-center w-full xl:w-1/2 gap-24 sm:gap-32 xl:gap-24">
            <div className="flex items-start">
              <div className="flex flex-col items-end translate-x-6 sm:translate-x-2 translate-y-10 z-50">
                <div className="px-8 py-4 translate-x-10 translate-y-2 w-fit relative rounded-xl border-[3px] text-white bg-[#333] shadow-lg shadow-white/30 border-[#444] font-sans">
                  <Image src={EFPLogo} alt="EFP Logo" width={42} height={42} className="absolute -left-5 -top-4" />
                  <ProfileStats addressOrName={connectedAddress || "brantly.eth"} />
                </div>
                <div className='bg-[#444] w-[340px] flex flex-col items-center gap-4 p-4 rounded-lg font-sans'>
                  <button className="flex items-center w-full justify-center gap-3 border-white group hover:bg-white text-white hover:text-black transition-all border-2 rounded-lg p-4" style={{
                    boxShadow: '3px 3px 1px 0px rgba(255, 255, 255, 0.8)'
                  }}>
                    <Image src={Ethereum} alt="EFP Logo" width={18} height={18} className='group-hover:invert transition-all' />
                    <p className=" font-bold text-xl">Sign-in with Ethereum</p>
                  </button>
                  <div className='bg-[#222] p-4 w-full flex text-sm font-medium rounded-lg flex-col gap-4'>
                    <div className='flex items-center justify-between w-full'>
                      <p className='font-bold'>Request From</p>
                      <p>https://example.com</p>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                      <p className='font-bold'>Signing in with</p>
                      <p>{truncateAddress(connectedAddress) || "brantly.eth"}</p>
                    </div>
                  </div>
                  <div className='bg-[#222] p-4 w-full flex text-sm font-medium rounded-lg flex-col gap-4'>
                    <div className='flex items-center justify-between w-full'>
                      <p className='font-bold'>Message</p>
                      <Image src={ArrowDown} alt="Arrow Down" width={12} height={12} className='-translate-y-0.5' />
                    </div>
                    <div className='flex items-center justify-between w-full'>
                      <p className='font-bold'>URL</p>
                      <p>https://example.com</p>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                      <p className='font-bold'>Network</p>
                      <p>Ethereum</p>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                      <p className='font-bold'>Chain ID</p>
                      <p>1</p>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                      <p className='font-bold'>Account</p>
                      <p>{truncateAddress(connectedAddress) || "brantly.eth"}</p>
                    </div>
                  </div>
                  <button className="text-[#111111] bg-primary hover:bg-primaryHover transition-all rounded-lg h-[54px] font-bold text-lg w-44">
                    Sign Message
                  </button>
                </div>
              </div>
              <ProfileCard addressOrName={connectedAddress || "brantly.eth"} darkMode={true} style={{ border: "3px solid #444" }} connectedAddress={connectedAddress} />
            </div>
            <div className="flex items-center flex-wrap justify-center xl:justify-between w-full gap-10 sm:gap-14 md:gap-20">
              <Image src={ens} alt="ENS" width={156} height={42} className='sm:w-[156px] w-[120px]' />
              <Image src={efp} alt="EFP" width={156} height={42} className='sm:w-[156px] w-[120px]' />
              <Image src={siwe} alt="SIWE" width={156} height={42} className='sm:w-[156px] w-[120px]' />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
