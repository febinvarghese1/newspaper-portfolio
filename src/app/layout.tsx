import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Febin Varghese - UI/UX Developer & Frontend Specialist",
  description: "Portfolio of Febin Varghese, a passionate UI/UX developer and frontend specialist. Crafting compelling interfaces and experiences with modern web technologies.",
  keywords: [
    "UI Developer",
    "UX Developer", 
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
    "UI/UX Design",
    "Frontend Development"
  ],
  authors: [{ name: "Febin Varghese" }],
  creator: "Febin Varghese",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://febinvarghese.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://febinvarghese.dev',
    siteName: 'Febin Varghese Portfolio',
    title: 'Febin Varghese - UI/UX Developer & Frontend Specialist',
    description: 'Portfolio of Febin Varghese, a passionate UI/UX developer and frontend specialist.',
    images: [
      {
        url: '/name-logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Febin Varghese Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Febin Varghese - UI/UX Developer & Frontend Specialist',
    description: 'Portfolio of Febin Varghese, a passionate UI/UX developer and frontend specialist.',
    images: ['/name-logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'standard',
      'max-snippet': -1,
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
      <head>
        <link rel="icon" href="/name-logo.ico" sizes="any" />
        <link rel="icon" href="/name-logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f5f5dc" />
        <meta name="msapplication-TileColor" content="#f5f5dc" />
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    
        {children}
      </body>
    </html>
  );
}
