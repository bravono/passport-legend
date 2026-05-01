import type { Metadata } from 'next';
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Passport Legend - Citizenship & Residence by Investment',
  description: 'Unlock citizenship and residence opportunities worldwide. Expert guidance for investment-based immigration.',
  metadataBase: new URL('https://passport-legend.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://passport-legend.com',
    siteName: 'Passport Legend',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1b365d" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
