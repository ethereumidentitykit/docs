import Image from 'next/image'
import logo from '/public/logo.svg'
import ConnectWalletButton from './components/connect-wallet-button'

export default {
  title: 'Ethereum Identity Kit',
  logo: <Image src={logo} alt="Ethereum Identity Kit" width={48} height={48} />,
  project: {
    link: 'https://github.com/ethereumidentitykit/docs',
  },
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
    defaultMenuCollapseLevel: Infinity,
  },
  footer: {
    component: <div />,
  },
  navbar: {
    extraContent: <ConnectWalletButton />,
  },
  // navbar: {
  //   component: <Navigation />,
  // },
  // ... other theme options
}
