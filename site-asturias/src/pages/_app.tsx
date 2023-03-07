import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import { Footer } from '@/components/Footer'
import { NavigationHeader } from '@/components/NavigationHeader'
import { defaultTheme } from '@/styles/default'
import { GlobalStyle } from '@/styles/global'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link rel="icon" href="favicon.ico" />
        <meta 
          name="description" 
          content="Igreja Presbiteriana Astúrias. Uma igreja que valoriza os relacionamentos em Cristo Jesus. " 
        />        
        <meta
          name="keywords"
          content="Igreja, Presbiteriana, Piracicaba, Igreja Reformada" 
        />
        <link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,700;1,400;1,700&family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" />
      </Head>
      
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
