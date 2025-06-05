import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Kelly Baldwin - Bay Area Real Estate Expert | eXp Realty",
  description:
    "Helping you go from stressed to sold in the Bay Area. Professional real estate services for buying, selling, and referrals with Kelly Baldwin at eXp Realty.",
  keywords:
    "Bay Area real estate, Kelly Baldwin, eXp Realty, home buying, home selling, real estate agent, California real estate",
  authors: [{ name: "Kelly Baldwin" }],
  creator: "Kelly Baldwin",
  publisher: "eXp Realty",
  openGraph: {
    title: "Kelly Baldwin - Bay Area Real Estate Expert",
    description: "Helping you go from stressed to sold in the Bay Area",
    url: "https://www.kellybaldwin.net/",
    siteName: "Kelly Baldwin Real Estate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelly Baldwin - Bay Area Real Estate Expert",
    description: "Helping you go from stressed to sold in the Bay Area",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-background overscroll-none relative font-sans`}
      >
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
