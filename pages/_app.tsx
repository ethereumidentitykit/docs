import './global.css'

interface AppProps {
  Component: React.ComponentType<any>
  pageProps: any
}

const App = ({ Component, pageProps }: AppProps) => {
  return <body className="bg-black text-white"><Component {...pageProps} /> </body>
}

export default App
