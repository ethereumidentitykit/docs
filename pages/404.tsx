import Link from 'next/link'
import React from 'react'

export default function Error() {
  return (
    <div className="text-white bg-black h-screen w-screen flex flex-col gap-6 items-center justify-center">
      <p>Seems like you wandered off into the ether.</p>{' '}
      <Link href="/">
        <button className="text-white border-white hover:bg-white hover:text-[#111111] transition-all border-2 rounded-sm h-12 sm:h-[54px] font-bold text-base sm:text-lg px-6">
          Snap back to reality
        </button>
      </Link>
    </div>
  )
}
