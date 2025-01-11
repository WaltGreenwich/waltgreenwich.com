import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags de Open Graph */}
        <meta property="og:title" content="Mi Portfolio" />
        <meta
          property="og:description"
          content="Este es mi portfolio donde muestro mis proyectos y habilidades como desarrollador web."
        />
        <meta
          property="og:image"
          content="https://waltgreenwich-com.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdeveloper-profile-1.933a1380.png&w=640&q=75"
        />
        <meta
          property="og:url"
          content="https://waltgreenwich-com.vercel.app"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
