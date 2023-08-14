import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer";

const customFont = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "E-commerce store built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={customFont.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
