import Image from 'next/image'
import logo from '/public/logo.svg'

export default {
  logo: <Image src={logo} alt="Ethereum Identity Kit" width={48} height={48} />,
  project: {
    link: 'https://github.com/ethereumidentitykit/docs',
  },
  // ... other theme options
}
