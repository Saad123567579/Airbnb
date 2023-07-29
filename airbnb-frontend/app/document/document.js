import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
            {/* Add the Font Awesome kit script here */}
            <script src="https://kit.fontawesome.com/54788d0589.js" crossOrigin="anonymous" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
  