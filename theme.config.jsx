import Image from 'next/image'
import logo from '/public/logo.svg'

export default {
  title: 'Ethereum Identity Kit',
  logo: <Image src={logo} alt="Ethereum Identity Kit" width={48} height={48} />,
  project: {
    link: 'https://github.com/ethereumidentitykit/docs',
  },
  darkMode: false,
  nextThemes: {
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
  // ... other theme options
}
