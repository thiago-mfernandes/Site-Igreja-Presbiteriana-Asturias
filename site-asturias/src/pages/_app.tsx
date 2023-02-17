import { ThemeProvider } from "styled-components";
import type { AppProps } from 'next/app'
import { defaultTheme } from "@/styles/default";
import { GlobalStyle } from "@/styles/global";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>      
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta charSet="UTF-8" />
        <meta 
          name="description" 
          content="Igreja Presbiteriana Astúrias. Uma igreja que valoriza os relacionamentos em Cristo Jesus. " 
        />        
        <meta
          name="keywords"
          content="Igreja, Presbiteriana, Piracicaba, Igreja Reformada" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
  
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" />
      </Head>
      
      
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        
        <Component {...pageProps} />    
      </ThemeProvider>
    </>
  );
}
