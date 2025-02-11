import type { Metadata } from 'next'

export const metadataBaseUrl = new URL('https://ethidentitykit.com')

export const metadataTitle = 'Ethereum Identity Kit'
export const metadataSiteName = 'Ethereum Identity Kit'
export const metadataDescription = 'Complete your dapp with the Ethereum identity stack.'

export const sharedMetadataIcons: Metadata['icons'] = [
  {
    rel: 'icon',
    url: 'https://ethidentitykit.com/favicon.ico',
  },
]

export const sharedMetadataOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  title: metadataTitle,
  description: metadataDescription,
  locale: 'en_US',
  siteName: metadataSiteName,
  url: 'https://ethidentitykit.com',
  emails: ['contact@ethidentitykit.com'],
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
    url: 'https://ethidentitykit.com',
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
