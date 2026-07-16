import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { StructuredData } from "@/components/StructuredData";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { localBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  // Every route sets its own complete title below (page topic + brand),
  // so no title.template is defined here — that would double-append the
  // brand suffix on top of each page's own string.
  title: `${siteConfig.primaryCity} Wedding Planner | ${siteConfig.shortName}`,
  description:
    "Full-service wedding planning and day-of coordination in Albuquerque, Santa Fe, and Taos, New Mexico. Stress-free, expertly designed, memorable weddings.",
  openGraph: {
    type: "website",
    siteName: siteConfig.businessName,
    images: [{ url: "/images/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <GoogleTagManager />
        <StructuredData data={localBusinessSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
        <Analytics />
      </body>
    </html>
  );
}
