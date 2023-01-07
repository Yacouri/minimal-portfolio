import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "layouts";
import Seo from "components/shared/SEO";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Seo />
      <Component {...pageProps} />
    </Layout>
  );
}
