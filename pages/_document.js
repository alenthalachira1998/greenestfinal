import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
      
<link href="https://fonts.googleapis.com/css2?family=Metrophobic&family=Montserrat:ital,wght@0,200;0,400;0,500;1,100;1,200;1,500;1,600&display=swap" rel="stylesheet"/>

<link href="https://fonts.googleapis.com/css2?family=Londrina+Outline&family=Satisfy&family=Tourney:wght@300&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Caveat&family=Cedarville+Cursive&family=Londrina+Outline&family=Open+Sans:wght@300;400;500;600;700&family=Raleway:wght@100;200;300;400;500;700&family=Seaweed+Script&display=swap" rel="stylesheet"></link>

{/* <link
            rel="preload"
            href="/public/fonts/VTKSFLOWERSINOURSOUL.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/public/fonts/NellaSueDEMO.ttf"
            as="font"
            crossOrigin=""
          /> */}
          <link href="/fonts/Styles.css" rel="stylesheet"/>
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