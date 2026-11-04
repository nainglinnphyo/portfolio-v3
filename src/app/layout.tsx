import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Grain from "@/components/ui/Grain";
import PageTransition from "@/components/ui/PageTransition";
import "./globals.css";
import { Providers } from "./providers";

/* TODO(nlp): set NEXT_PUBLIC_SITE_URL to the real deployed origin — it is
   what Next resolves relative OG/Twitter URLs against. The fallback below is
   a placeholder, not a verified domain. */
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nainglinnphyo.dev";

const WudooMono = localFont({
  variable: "--font-wudoo",
  display: "swap",
  src: [
    { path: "../../public/fonts/WudooMono-Light.woff2", weight: "200", style: "normal" },
    { path: "../../public/fonts/WudooMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/WudooMono-Bold.woff2", weight: "700", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Naing Linn Phyo — Head of Department & Backend Engineer",
    template: "%s · Naing Linn Phyo",
  },
  description:
    "Head of Department at xsphere.co — owning the business logic layer across the product line and the product-management side of delivery. Backgrounded in TypeScript, Go, PHP and SQL.",
  keywords: [
    "Naing Linn Phyo",
    "head of department",
    "engineering manager",
    "backend developer",
    "TypeScript",
    "Golang",
    "NestJS",
    "microservices",
  ],
  authors: [{ name: "Naing Linn Phyo", url: SITE }],
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Naing Linn Phyo",
    title: "Naing Linn Phyo — Head of Department & Backend Engineer",
    description:
      "Owning the business logic layer and the delivery plan around it — TypeScript, Go, gRPC and event-driven systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naing Linn Phyo — Head of Department & Backend Engineer",
    description:
      "Owning the business logic layer and the delivery plan around it — TypeScript, Go, gRPC and event-driven systems.",
  },
  robots: { index: true, follow: true },
};

/* Matches the --bg token on each side so the browser chrome and the
   overscroll area never flash the wrong colour. */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#08090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={WudooMono.variable}>
      <body className="font-mono antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>

        <Providers>
          <Grain />

          {/* Content must dissolve under the floating nav, not collide with it. */}
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 top-0 z-30 h-24 bg-gradient-to-b from-bg via-bg/85 to-transparent"
          />

          <div className="relative mx-auto w-full max-w-3xl px-5 sm:px-8">
            <Navbar />
            <main id="content" className="pt-2">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
