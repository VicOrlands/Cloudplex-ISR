import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';

import Metrics from "./metrics";
import Header from "@/components/header/Header";
const Footer = dynamic(() => import("@/components/footer/footer"), { ssr: false });

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <Metrics />
      </body>
    </html>
  );
}
