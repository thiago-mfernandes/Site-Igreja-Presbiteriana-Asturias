import Document, { DocumentContext, Html, Main, NextScript } from 'next/document'
import Head from 'next/head'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

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
