import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/footer";
import Metrics from "./metrics";

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
