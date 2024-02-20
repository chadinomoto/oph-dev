import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='apple-touch-icon'
          href='https://openhouse.mwit.ac.th//favicon.ico'
        />
        <meta name='theme-color' content='#fcf4a0' />
        <link rel='icon' href='https://openhouse.mwit.ac.th//favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}