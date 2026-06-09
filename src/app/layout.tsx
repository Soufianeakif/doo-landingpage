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
  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "Doo",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "HomeAndGarden",
    "price": "0",
    "description": siteDetails.metadata.description,
    "url": siteDetails.siteUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Doo app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Doo is Morocco's premier on-demand platform connecting you with trusted local professionals for home services including cleaning, plumbing, electrical work, painting, handyman repairs, and gardening — all bookable from your phone."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a home service on Doo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose the service you need, select your location and preferred time, see the upfront price, and book instantly. A verified professional will arrive at your door — you can track their arrival in real time."
        }
      },
      {
        "@type": "Question",
        "name": "Are Doo professionals verified and trusted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every professional on Doo undergoes rigorous identity and criminal background checks. They are also rated and reviewed by the community to maintain high-quality standards."
        }
      },
      {
        "@type": "Question",
        "name": "How does Doo's upfront pricing work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Doo provides estimated upfront pricing for most services before you book, so there are no hidden fees. For more complex tasks, you can get a detailed quote directly from the professional before work begins."
        }
      },
      {
        "@type": "Question",
        "name": "Can I track my service professional in real time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Once your booking is confirmed, you can watch your service provider's arrival on a live map directly in the Doo app, so you always know exactly when they'll arrive."
        }
      },
      {
        "@type": "Question",
        "name": "What home services can I book on Doo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Doo offers a wide range of home services including cleaning (regular, deep clean, move-in/out), plumbing (leaks, installs, emergencies), electrical (repairs, fittings, safety checks), painting (interior, exterior, touch-ups), handyman services (furniture, repairs, mounting), and gardening (lawn care, trimming, cleanup)."
        }
      }
    ]
  };

  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Google Analytics */}
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
