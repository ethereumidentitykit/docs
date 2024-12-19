import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

export default withNextra({
  transpilePackages: ['ethereum-identity-kit'],
  async redirects() {
    return [
      {
        source: '/playground',
        destination: 'https://playground.ethidentitykit.com',
        permanent: true,
      },
    ]
  },
})
