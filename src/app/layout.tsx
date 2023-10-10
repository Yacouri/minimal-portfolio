import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Favicon from "./favicon.png";

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
  metadataBase: new URL("http://localhost:3000"),
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
      <body className={Satooshi.className}>
        <div
          style={{
            background:
              "linear-gradient(93deg, rgba(186, 238, 76, 0.60) 4.22%, rgba(65, 39, 223, 0.34) 36.37%, rgba(242, 4, 4, 0.10) 107.09%)",
            filter: "blur(154.5454559326172px)",
            zIndex: -1
          }}
          className="fixed w-[300px] h-[300px] rounded-[600px] top-[-100px] right-0 md:w-[600px] md:h-[600px]"
        ></div>
        <div className="max-w-3xl mx-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
