import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Febin Varghese - UI/UX Developer & Frontend Specialist",
  description:
    "Portfolio of Febin Varghese, a passionate UI/UX developer and frontend specialist. Crafting compelling interfaces and experiences with modern web technologies.",
  keywords: [
    "UI Developer",
    "UX Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
    "UI/UX Design",
    "Frontend Development",
    "TypeScript",
    "Tailwind CSS"
  ],
  authors: [{ name: "Febin Varghese" }],
  robots: "index, follow",
  metadataBase: new URL("https://febinvarghese.dev"),
  openGraph: {
    type: "website",
    url: "https://febinvarghese.dev",
    title: "Febin Varghese - UI/UX Developer & Frontend Specialist",
    description:
      "Portfolio of Febin Varghese, a passionate UI/UX developer and frontend specialist.",
    images: [
      {
        url: "/images/name-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Febin Varghese Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Febin Varghese - UI/UX Developer & Frontend Specialist",
    description:
      "Portfolio of Febin Varghese, a passionate UI/UX developer and frontend specialist.",
    images: ["/images/name-logo.jpeg"]
  },
  icons: {
    icon: "/images/name-logo.ico"
  },
  other: {
    canonical: "https://febinvarghese.dev"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Febin Varghese",
              url: "https://febinvarghese.dev",
              image: "https://febinvarghese.dev/name-logo.jpeg",
              description:
                "Passionate UI/UX developer and frontend specialist crafting compelling interfaces and experiences.",
              jobTitle: "UI/UX Developer & Frontend Specialist",
              knowsAbout: [
                "UI/UX Design",
                "Frontend Development",
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS"
              ],
              sameAs: [
                "https://github.com/febinvarghese1",
                "https://linkedin.com/in/febinvarghese"
              ]
            })
          }}
        />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
