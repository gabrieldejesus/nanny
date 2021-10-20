import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
} from 'next/document';

export default class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />

          <noscript>
            <link href="./styles/aos-noscript.css" rel="stylesheet" />
          </noscript>
        </Head>

        <body>
          <noscript>
            You need to enable JavaScript in your browser for this application
            work.
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
