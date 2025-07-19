'use client';

import Script from 'next/script';

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Febin Varghese",
    "jobTitle": "UI/UX Developer & Frontend Specialist",
    "description": "Passionate UI/UX developer and frontend specialist crafting compelling interfaces and experiences.",
    "url": "https://febinvarghese.dev",
    "knowsAbout": [
      "UI/UX Design",
      "Frontend Development",
      "React",
      "Next.js",
      "Web Development"
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
    "author": {
      "@type": "Person",
      "name": "Febin Varghese"
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
    "url": "https://febinvarghese.dev"
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