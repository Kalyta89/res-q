import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-theme-blue">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
