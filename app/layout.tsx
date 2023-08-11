import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Progressbar from "@/components/layouts/Progressbar";
import Header from "@/components/layouts/Header";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Obii KriationZ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Progressbar />
        {children}
      </body>
    </html>
  );
}
