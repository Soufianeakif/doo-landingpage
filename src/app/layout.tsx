import type { Metadata } from "next";
import { Source_Sans_3, Manrope } from "next/font/google";
import Script from 'next/script';

import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  keywords: ['home services', 'morocco', 'plumber', 'electrician', 'cleaning', 'rabat', 'harhoura', 'salé', 'témara', 'on-demand', ' professionals', 'maâlems'],
  authors: [{ name: 'AKIF Soufiane' }],
  creator: 'Doo.ma',
  publisher: 'Doo.ma',
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
  alternates: {
    canonical: siteDetails.siteUrl,
    languages: {
      'en': `${siteDetails.siteUrl}/en`,
      'fr': `${siteDetails.siteUrl}/fr`,
      'ar': `${siteDetails.siteUrl}/ar`,
    },
  },
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    locale: 'en_US',
    siteName: siteDetails.siteName,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    site: '@dooma',
    creator: '@akifsoufiane',
    images: ['/images/twitter-image.jpg'],
  },
  verification: {
    google: 'G-HRBTR3NFNC',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        {/* Preload critical font files to reduce render blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics - deferred to reduce main-thread work */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${siteDetails.googleAnalyticsId}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteDetails.googleAnalyticsId}');
          `}
        </Script>
      </head>
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
