'use client';

import Script from 'next/script';
import NameLogoJpeg from "@/assets/images/name-logo.jpeg";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Febin Varghese",
    "jobTitle": "UI/UX Developer & Frontend Specialist",
    "description": "Passionate UI/UX developer and frontend specialist crafting compelling interfaces and experiences.",
    "url": "https://febinvarghese.dev",
    "image": NameLogoJpeg.src,
    "sameAs": [
      "https://github.com/febinvarghese1",
      "https://linkedin.com/in/febinvarghese"
    ],
    "knowsAbout": [
      "UI/UX Design",
      "Frontend Development",
      "React",
      "Next.js",
      "Web Development",
      "TypeScript",
      "Tailwind CSS"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "UI/UX Developer",
      "description": "Creating user-centered digital experiences"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Febin Varghese Portfolio",
    "url": "https://febinvarghese.dev",
    "description": "Portfolio website showcasing UI/UX development work",
    "image": NameLogoJpeg.src,
    "author": {
      "@type": "Person",
      "name": "Febin Varghese"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://febinvarghese.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Febin Varghese Portfolio",
    "description": "A portfolio showcasing UI/UX development projects",
    "creator": {
      "@type": "Person",
      "name": "Febin Varghese"
    },
    "dateCreated": "2024",
    "genre": "Portfolio",
    "url": "https://febinvarghese.dev",
    "image": NameLogoJpeg.src,
    "keywords": "UI/UX, Frontend Development, React, Next.js, Portfolio"
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
} 