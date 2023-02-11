import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
        {/* <script src="https://gw.alipayobjects.com/os/lib/antv/g2/4.2.8/dist/g2.min.js"></script> */}
        <script type="text/javascript" src="https://unpkg.com/@antv/g2plot@latest/dist/g2plot.min.js"></script>
      </Head>
      <body className={`bg-black bg-[url('/bg.png')] bg-top bg-no-repeat bg-cover`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
