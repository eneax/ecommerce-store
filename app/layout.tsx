import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import Navbar from "@/components/navbar";
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
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
