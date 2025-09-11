'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useAccount } from 'wagmi'
import React, { useState } from 'react'
import { ProfileCard, SignInWithEthereum } from 'ethereum-identity-kit'

import efp from '/public/assets/efp.png'
import ens from '/public/assets/ens.png'
import siwe from '/public/assets/siwe.png'
import FollowButton from './follow-button'
import Copy from '/public/assets/icons/copy.svg'
import Check from '/public/assets/icons/check.svg'
import ArrowDown from '/public/assets/icons/arrow-down.svg'
import { generateClientSideNonce } from '@/utils/siwe'

const Home = () => {
  const [copied, setCopied] = useState(false)
  const { address: connectedAddress } = useAccount()

  return (
    <main className="landing-page px-4 md:px-12 2xl:px-16 overflow-x-hidden w-full min-h-screen h-full bg-[#111111] text-white bg-repeat bg-grid-white/[0.1] relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none h-full inset-0 bg-[#111111] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,#111111cc_80%)]" />
      <div className="max-w-[1440px] mx-auto items-center flex xl:flex-row flex-col justify-between z-50 gap-14 xl:gap-2 pt-14 xl:pt-28 pb-12 xl:pb-0">
        <div className="flex flex-col items-center xl:items-start xl:text-left text-center gap-4 sm:gap-8 z-50 mt-10">
          <h1 className="text-5xl xs:text-6xl sm:text-7xl xl:text-[86px] font-bold max-w-[700px] relative z-20">
            Ethereum Identity Kit
          </h1>
          <p className="text-xl xs:text-2xl sm:text-3xl md:text-3xl font-bold max-w-[700px] relative z-20">
            Complete your dapp <br className="hidden sm:block" />
            with the <span className="text-primary">Ethereum identity stack</span>.
          </p>
          <div
            className="flex items-center gap-2 sm:gap-6 px-4 sm:px-8 py-3 sm:py-5 w-fit rounded-sm sm:rounded-sm group bg-[#444444]/80 cursor-pointer"
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
              <button className="text-white border-white hover:bg-white hover:text-[#111111] transition-all border-2 rounded-sm h-12 sm:h-[54px] font-bold text-base sm:text-lg w-[156px] sm:w-44">
                Get started
              </button>
            </Link>
            <Link
              href="https://playground.ethidentitykit.com/?path=/docs/organisms-profile-card--component-docs"
              target="_blank"
            >
              <button className="text-[#111111] bg-primary hover:bg-primaryHover transition-all rounded-sm h-12 sm:h-[54px] font-bold text-base sm:text-lg w-[156px] sm:w-44">
                Playground
              </button>
            </Link>
          </div>
        </div>
        <div className="z-50 flex flex-col items-center xl:items-end w-full xl:w-1/2 gap-24 sm:gap-32 xl:gap-36">
          <div className="flex items-start">
            <div className="flex flex-col items-end translate-x-0 sm:translate-x-8 translate-y-14 z-50">
              <div className="siwe-container bg-[#444] w-[320px] flex flex-col items-center gap-4 p-4 rounded-sm font-sans">
                <SignInWithEthereum
                  message="Ethereum Identity Kit says hi!"
                  onSignInSuccess={() => {}}
                  onSignInError={() => {}}
                  getNonce={generateClientSideNonce}
                  verifySignature={() => {
                    console.log('signature verified')
                  }}
                  darkMode={true}
                />
                <div className="bg-[#222] p-4 w-full flex text-sm font-medium rounded-sm flex-col gap-4">
                  <div className="flex items-center justify-between w-full">
                    <p className="font-bold">Message</p>
                    <Image src={ArrowDown} alt="Arrow Down" width={12} height={12} className="-translate-y-0.5" />
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-bold">URL</p>
                    <p>https://ethidentitykit.com</p>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-bold">Network</p>
                    <p>Ethereum</p>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-bold">Account</p>
                    <p>vitalik.eth</p>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-bold">Chain ID</p>
                    <p>1</p>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-bold">Nonce</p>
                    <p>10c534ea1f3b5</p>
                  </div>
                </div>
                <button className="text-[#111111] bg-primary active:scale-95 hover:bg-primaryHover transition-all rounded-sm h-[54px] font-bold text-lg w-44">
                  Sign Message
                </button>
              </div>
            </div>
            <ProfileCard
              addressOrName="0xd63c2582b071f41090e89d975f738e87e7b8da50"
              connectedAddress={connectedAddress}
              darkMode={true}
              onProfileClick={() => window.open('https://efp.app/0xd63c2582b071f41090e89d975f738e87e7b8da50', '_blank')}
              style={{ paddingBottom: '12px', gap: '12px', boxShadow: '2px 2px 10px 0px rgba(255,255,255,0.2)' }}
              className="-translate-x-12 sm:translate-x-0 z-50"
              hasCommonFollowersModal={false}
              extraOptions={{
                customFollowButton: <FollowButton lookupAddress="0xd63c2582b071f41090e89d975f738e87e7b8da50" />,
              }}
            />
          </div>
          <div className="flex items-center flex-wrap xl:flex-nowrap justify-center xl:justify-between w-full gap-10 sm:gap-14 md:gap-20">
            <Link href="https://ens.domains" target="_blank">
              <Image
                src={ens}
                alt="ENS"
                width={156}
                height={42}
                className="sm:w-[156px] w-[120px] grayscale hover:grayscale-0 transition-all duration-300 brightness-200 hover:brightness-100"
              />
            </Link>
            <Link href="https://efp.app" target="_blank">
              <Image
                src={efp}
                alt="EFP"
                width={156}
                height={42}
                className="sm:w-[156px] w-[120px] grayscale hover:grayscale-0 transition-all duration-300"
              />
            </Link>
            <Link href="https://login.xyz" target="_blank">
              <Image
                src={siwe}
                alt="SIWE"
                width={156}
                height={42}
                className="sm:w-[156px] w-[120px] grayscale hover:grayscale-0 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
