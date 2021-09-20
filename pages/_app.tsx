import { AppProps } from 'next/app'
import Header from '../components/header'

import 'tailwindcss/tailwind.css'
import '../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default App
