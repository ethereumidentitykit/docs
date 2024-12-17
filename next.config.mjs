import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

export default withNextra({
  transpilePackages: ['@encrypteddegen/identity-kit'],
  async redirects() {
    return [
      {
        source: '/playground',
        destination: 'https://ethereumidentitykit.github.io/ethereum-identity-kit/',
        permanent: true,
      },
    ]
  },
})
