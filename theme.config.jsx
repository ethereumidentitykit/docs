import Link from 'next/link'
import Image from 'next/image'
import XIcon from '/public/assets/icons/x.svg'
import logo from '/public/assets/logo-no-bg.svg'
import packageJson from './package.json'

export default {
  head: (
    <>
      <title>Ethereum Identity Kit</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ethidkit" />
      <meta name="twitter:creator" content="@ethidkit" />
      <meta name="twitter:title" content="Ethereum Identity Kit" />
      <meta name="twitter:description" content="Complete your dapp with the Ethereum identity stack." />
      <meta name="twitter:image" content="https://ethereumidentitykit.com/og.png" />
    </>
  ),
  logo: <Image src={logo} alt="Ethereum Identity Kit" width={48} height={48} />,
  project: {
    link: 'https://github.com/ethereumidentitykit/docs',
  },
  chat: {
    link: 'https://discord.com/invite/ZUyG3mSXFD',
  },
  docsRepositoryBase: 'https://github.com/ethereumidentitykit/docs/blob/main',
  darkMode: false,
  nextThemes: {
    themes: ['dark'],
    defaultTheme: 'dark',
    enableSystem: false,
  },
  color: {
    hue: 58,
    saturation: 100,
    lightness: {
      dark: 75,
      light: 35,
    },
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    component: <div />,
  },
  search: {
    placeholder: 'Search',
  },
  editLink: {
    content: 'Edit this page on GitHub',
  },
  feedback: {
    content: 'Report an issue →',
  },
  navbar: {
    extraContent: (
      <div className="flex items-center gap-4">
        <Link href="https://x.com/ethidkit" target="_blank">
          <Image src={XIcon} alt="X" width={20} height={20} />
        </Link>
        <p>v{packageJson.dependencies['ethereum-identity-kit']}</p>
      </div>
    ),
  },
}
