import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
