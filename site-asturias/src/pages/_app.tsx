
import { Footer } from '@/components/Footer'
import { NavigationHeader } from '@/components/NavigationHeader'
import { defaultTheme } from '@/styles/default'
import { GlobalStyle } from '@/styles/global'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <AnimatePresence>
          <NavigationHeader />
          <Component {...pageProps} />
          <Footer />
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}
