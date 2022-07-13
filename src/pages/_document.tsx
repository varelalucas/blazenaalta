import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx)

    return initalProps
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <base href="/" />
          <meta name="robots" content="index,nofollow" />
          <meta name="author" content="AtomCodes (atomcodes#7973)" />
          <meta name="copyright" content="AtomCodes" />
          <meta name="designer" content="AtomCodes (atomcodes#7973)" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="keywords"
            content="Blaze robo pix robozinho telegram dinheiro aposta"
          />
          <meta property="og:title" content="Blaze Na Alta" />
          <meta
            property="og:description"
            content="Nós somos a Blaze Na Alta, uma equipe de desenvolvimento focado em cassinos e apostas trazendo o que há de mais novo em tecnologias para os nossos clientes lucrarem apostando."
          />
          <meta property="og:url" content="https://blazenaalta.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:image" content="/logo.png" />
          <meta property="twitter:image" content="/logo.png" />
          <meta property="twitter:card" content="summary" />
          <meta name="theme-color" content="#FF0C36" />
          <meta
            name="abstract"
            content="Nós somos a Blaze Na Alta, uma equipe de desenvolvimento focado em cassinos e apostas trazendo o que há de mais novo em tecnologias para os nossos clientes lucrarem apostando."
          />
          <meta
            name="description"
            content="Nós somos a Blaze Na Alta, uma equipe de desenvolvimento focado em cassinos e apostas trazendo o que há de mais novo em tecnologias para os nossos clientes lucrarem apostando."
          />
          <link rel="shortcut icon" href="/logo.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
