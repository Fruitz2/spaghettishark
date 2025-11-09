import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  title: "Spaghetti Shark ($SHARK) - The Pasta-Powered Memecoin on Solana",
  description: "One shark. Infinite pasta. Zero survivors. Join the most carb-loaded memecoin in crypto. 100% LP burned, zero team tokens. Pure pasta power on Solana.",
  keywords: ["Spaghetti Shark", "$SHARK", "memecoin", "Solana", "crypto", "pasta", "shark", "pump.fun", "meme token"],
  authors: [{ name: "Spaghetti Shark Team" }],
  creator: "Spaghetti Shark",
  publisher: "Spaghetti Shark",
  openGraph: {
    title: "Spaghetti Shark ($SHARK) - The Pasta-Powered Memecoin",
    description: "One shark. Infinite pasta. Zero survivors. Join the most carb-loaded memecoin on Solana. 🦈🍝",
    url: "https://spaghettishark.xyz",
    siteName: "Spaghetti Shark",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://spaghettishark.xyz/transparentlogo.png",
        width: 1200,
        height: 1200,
        alt: "Spaghetti Shark Logo - A shark tangled in pasta",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@spaghettishark",
    creator: "@spaghettishark",
    title: "Spaghetti Shark ($SHARK) - The Pasta-Powered Memecoin",
    description: "One shark. Infinite pasta. Zero survivors. 🦈🍝 100% LP burned on Solana.",
    images: ["https://spaghettishark.xyz/transparentlogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/transparentlogo.png", sizes: "any" },
    ],
    apple: [
      { url: "/transparentlogo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL('https://spaghettishark.xyz'),
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
