import { siteConfig } from "@/lib/site-config";

const orgId = `${siteConfig.domain}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": orgId,
    name: siteConfig.businessName,
    image: `${siteConfig.domain}/images/real-wedding-ambiance/ALP-147.jpg`,
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.primaryCity,
      addressRegion: siteConfig.primaryState,
      addressCountry: "US",
    },
    areaServed: siteConfig.areaServed.map((a) => ({
      "@type": "City",
      name: a,
    })),
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.pinterest,
    ],
    founder: {
      "@type": "Person",
      name: siteConfig.founderName,
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.founderName,
    jobTitle: "Founder & Lead Wedding Planner",
    worksFor: {
      "@id": orgId,
    },
    description: siteConfig.founderCredentials,
    url: `${siteConfig.domain}/about`,
  };
}

export function serviceSchema({
  city,
  serviceName,
  description,
}: {
  city: string;
  serviceName: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    name: `${serviceName} in ${city}`,
    description,
    provider: {
      "@id": orgId,
    },
    areaServed: {
      "@type": "City",
      name: city,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function blogPostingSchema({
  title,
  description,
  slug,
  publishDate,
  heroImage,
}: {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  heroImage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: `${siteConfig.domain}${heroImage}`,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      "@type": "Person",
      name: siteConfig.founderName,
    },
    publisher: {
      "@id": orgId,
      name: siteConfig.businessName,
    },
    mainEntityOfPage: `${siteConfig.domain}/blog/${slug}`,
  };
}
