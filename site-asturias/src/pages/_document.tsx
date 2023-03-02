import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDOcument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head >
          <meta charSet="UTF-8" />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
