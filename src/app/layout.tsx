import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Favicon from "./favicon.png";
import Script from "next/script";

const Satooshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000"
      : "https://yacouri.com"
  ),
  title: {
    default: "Yacouri",
    template: "%s | Yacouri",
  },
  description:
    "Yacouri Zouhir, a Frontend developer & self-taught UI/UX Designer. Interested in IndieHackers world & building in public",
  openGraph: {
    images: "/og-image.png",
  },
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16753628996"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16753628996');
          `}
        </Script>
      </head>
      <body className={Satooshi.className}>
        <div
          style={{
            background:
              "linear-gradient(93deg, rgba(154, 154, 154, 0.20) 50%, rgba(25, 29, 35, 0.00) 100%)",
            filter: "blur(154.5454559326172px)",
            zIndex: -1,
          }}
          className="fixed w-[300px] h-[300px] rounded-[600px] top-[-100px] right-0 md:w-[600px] md:h-[600px]"
        ></div>
        <div className="max-w-[700px] mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
