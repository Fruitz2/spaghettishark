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
  title: "Spaghetti Shark - The Pasta-Powered Memecoin",
  description: "One shark. Infinite pasta. Zero survivors. Join the most carb-loaded memecoin in crypto.",
  openGraph: {
    title: "Spaghetti Shark - The Pasta-Powered Memecoin",
    description: "One shark. Infinite pasta. Zero survivors. Join the most carb-loaded memecoin in crypto.",
    url: "https://spaghettishark.xyz",
    siteName: "Spaghetti Shark",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Spaghetti Shark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spaghetti Shark - The Pasta-Powered Memecoin",
    description: "One shark. Infinite pasta. Zero survivors. Join the most carb-loaded memecoin in crypto.",
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
