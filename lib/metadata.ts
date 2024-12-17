import type { Metadata } from 'next'

export const metadataBaseUrl = new URL('https://ethid.org')

export const metadataTitle = 'Ethereum Identity Kit'
export const metadataSiteName = 'Ethereum Identity Kit'
export const metadataDescription = 'Complete your dapp with the Ethereum identity stack.'

export const sharedMetadataIcons: Metadata['icons'] = [
  {
    rel: 'icon',
    url: 'https://ethid.org/favicon.ico',
  },
]

export const sharedMetadataOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  title: metadataTitle,
  description: metadataDescription,
  locale: 'en_US',
  siteName: metadataSiteName,
  url: 'https://ethid.org',
  emails: ['contact@ethid.org'],
  // images: [
  //   {
  //     url: 'https://ethfollow.xyz/assets/banner.png'
  //   }
  // ]
}

export const sharedMetadataTwitter: Metadata['twitter'] = {
  card: 'summary_large_image',
  site: '@ethidkit',
  creator: '@ethidkit',
  description: metadataDescription,
}

export const sharedMetadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  applicationName: metadataSiteName,
  keywords: ['ethereum identity kit', 'ethereum identity', 'ethereum', 'identity', 'kit', 'ethereum identity stack'],
  icons: sharedMetadataIcons,
  openGraph: sharedMetadataOpenGraph,
  authors: {
    name: 'Ethereum Identity Kit',
    url: 'https://ethid.org',
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    noimageindex: false,
    notranslate: false,
  },
  metadataBase: metadataBaseUrl,
}
