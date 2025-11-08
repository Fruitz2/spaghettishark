import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MobileBuyDock } from "@/components/MobileBuyDock";
import { ScrollProgress } from "@/components/ScrollProgress";
import strings from "@/content/spaghettishark/strings.json";
import links from "@/content/spaghettishark/links.json";
import { TooltipProvider } from "@/components/ui/tooltip";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: strings.metaTitle,
  description: strings.metaDescription,
  openGraph: {
    title: strings.metaTitle,
    description: strings.metaDescription,
    url: "https://spaghettishark.xyz",
    siteName: "Spaghetti Shark",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: strings.metaTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: strings.metaTitle,
    description: strings.metaDescription,
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} bg-black font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
