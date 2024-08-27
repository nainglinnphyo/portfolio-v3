import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Launching Soon - Our Custom Map Service | Inspired by FaryTaxi",
  description:
    "Our new website is launching soon with an innovative custom map service, inspired by the FaryTaxi.com. Stay tuned for more!",
};

const WudooMono = localFont({
  src: [
    {
      path: "../../public/fonts/WudooMono-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/WudooMono-Light.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/WudooMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/WudooMono-Regular.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/WudooMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/WudooMono-Bold.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${WudooMono.className}`}>
        <main className="max-w-[45%] max-sm:max-w-[85%] m-auto max-h-screen">
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
