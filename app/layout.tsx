import type { Metadata } from "next";
import { Roboto, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import { PageTransition } from "@/components/PageTransition";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Passport Legend - Citizenship & Residence by Investment",
  description:
    "Unlock citizenship and residence opportunities worldwide. Expert guidance for investment-based immigration.",
  metadataBase: new URL("https://passport-legend.com"),
  icons: {
    icon: "/assets/Logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://passport-legend.com",
    siteName: "Passport Legend",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0c2043" />
      </head>
      <body
        className={`${roboto.variable} min-h-screen bg-white text-primary-500 antialiased`}
      >
        <PageTransition>{children}</PageTransition>
        <WhatsAppButton />
      </body>
    </html>
  );
}
