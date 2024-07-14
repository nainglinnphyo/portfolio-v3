import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import localFont from 'next/font/local'
import Navbar from "../components/NavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const WudooMono = localFont({
  src: [
    {
      path: '../../public/fonts/WudooMono-Light.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/WudooMono-Light.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/fonts/WudooMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/WudooMono-Regular.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/WudooMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/WudooMono-Bold.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${WudooMono.className}`} >
        <main className="max-w-[50%] min-w-[50%] m-auto">
          <Providers>
            <Navbar />
            <div className="mt-8"></div>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
