import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

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
      <body className={customFont.className}>{children}</body>
    </html>
  );
}
