import Image from 'next/image'
import logo from '/public/assets/logo-no-bg.svg'

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
    defaultMenuCollapseLevel: 2,
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
  // navbar: {
  //   component: <Navigation />,
  // },
  // ... other theme options
}
