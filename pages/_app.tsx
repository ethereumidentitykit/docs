import { Metadata } from 'next'
import { Chivo_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import Providers from './providers'
import { Production } from './production'
import { sharedMetadata } from '../lib/metadata'

import './global.css'
import 'ethereum-identity-kit/css'
import '@rainbow-me/rainbowkit/styles.css'

export const metadata: Metadata = sharedMetadata

const ChivoMono = Chivo_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

interface AppProps {
  Component: React.ComponentType<any>
  pageProps: any
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={`${ChivoMono.className}`}>
      <Providers>
        <Component {...pageProps} />{' '}
      </Providers>
      <Production>
        <Analytics />
      </Production>
    </div>
  )
}

export default App
