import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import SiteHeader from "@/components/Site/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StorySync",
  description: "Your best growth content partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="site-body">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
