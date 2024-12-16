'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { ProfileCard, ProfileStats } from '@encrypteddegen/identity-kit'
import efp from '/public/assets/efp.png'
import ens from '/public/assets/ens.png'
import siwe from '/public/assets/siwe.png'
import Copy from '/public/assets/icons/copy.svg'
import EFPLogo from '/public/assets/efp-logo.svg'
import Check from '/public/assets/icons/check.svg'
import Navigation from '../components/navigation'

const Home = () => {
  const [copied, setCopied] = useState(false)

  return (
    <>
      <Navigation />
      <main className="h-[50rem] px-16 w-full min-h-screen dark:bg-[#222222] text-white bg-white bg-repeat dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 dark:bg-[#222222] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,#222222cc_80%)]" />
        <div className="max-w-[1700px] mx-auto flex itmes-center justify-between z-50 pt-36">
          <div className="flex flex-col gap-8 z-50 mt-16">
            <h1 className="text-6xl sm:text-8xl font-bold max-w-[700px] relative z-20">Ethereum Identity Kit</h1>
            <p className="text-3xl font-bold max-w-[700px] relative z-20">
              Complete your dapp <br />
              with the <span className="text-primary">Ethereum identity stack</span>.
            </p>
            <div
              className="flex items-center gap-6 px-8 py-5 w-fit rounded-lg group bg-[#444444]/80 cursor-pointer"
              onClick={() => {
                setCopied(true)
                navigator.clipboard.writeText('npm install ethereum-identity-kit')
                setTimeout(() => {
                  setCopied(false)
                }, 3000)
              }}
            >
              <p className="text-white font-bold">npm install ethereum-identity-kit</p>
              {copied ? (
                <Image src={Check} alt="copy" width={20} height={20} className="translate-x-1" />
              ) : (
                <Image
                  src={Copy}
                  alt="copy"
                  width={20}
                  height={20}
                  className="translate-x-1 group-hover:opacity-100 opacity-50 transition-all"
                />
              )}
            </div>
            <div className="flex items-center gap-4">
              <button className="text-white border-white hover:bg-white hover:text-[#222222] transition-all border-2 rounded-lg h-[54px] font-bold text-lg w-44">
                Get started
              </button>
              <button className="text-[#222222] bg-primary hover:bg-primaryHover transition-all rounded-lg h-[54px] font-bold text-lg w-44">
                Playground
              </button>
            </div>
          </div>
          <div className="z-50 flex flex-col items-center w-1/2 gap-24">
            <div className="flex items-start">
              <div className="px-8 py-4 translate-x-14 translate-y-20 z-50 w-fit relative rounded-xl border-[3px] text-white bg-[#333] shadow-lg shadow-white/30 border-[#444] font-sans">
                <Image src={EFPLogo} alt="EFP Logo" width={42} height={42} className="absolute -left-5 -top-4" />
                <ProfileStats addressOrName="brantly.eth" />
              </div>
              <ProfileCard addressOrName="brantly.eth" darkMode={true} />
            </div>
            <div className="flex items-center justify-between w-full">
              <Image src={ens} alt="ENS" width={156} height={42} />
              <Image src={efp} alt="EFP" width={156} height={42} />
              <Image src={siwe} alt="SIWE" width={156} height={42} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
