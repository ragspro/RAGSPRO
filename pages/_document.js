import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="RAGSPRO - Premium Web Development & AI Solutions by Raghav Shah" />
        <meta property="og:title" content="RAGSPRO - Code. Create. Dominate." />
        <meta property="og:description" content="Delhi-based Full Stack Developer offering premium web development, AI tools, and digital products." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ragspro.in" />
        <meta property="og:image" content="https://ragspro.in/images/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}