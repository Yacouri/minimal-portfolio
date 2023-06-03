import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "layouts";
import Seo from "components/shared/components/SEO";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-81ZSD8WJDC"
      />

      <Script id="gtg" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-81ZSD8WJDC', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <Layout>
        <Seo />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
