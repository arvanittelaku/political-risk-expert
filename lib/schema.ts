import { SITE_EMAIL, SITE_URL, LINKEDIN_URL } from "./constants";
import { services } from "@/data/services";

export type FAQ = { question: string; answer: string };
export type BreadcrumbItem = { name: string; href?: string };

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(
  items: ({ name?: string; label?: string; href?: string })[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name ?? item.label ?? "",
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Political Risk Expert",
    url: SITE_URL,
    email: SITE_EMAIL,
    address: { "@type": "PostalAddress", addressCountry: "GB" },
    areaServed: ["United Kingdom", "International"],
    sameAs: [LINKEDIN_URL],
  };
}

export function professionalServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professional-service`,
    name: "Political Risk Expert Witness Services",
    url: SITE_URL,
    serviceType: "Political Risk Expert Witness",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "United Kingdom",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Political Risk Expert Witness Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  };
}

export function homepageGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), professionalServiceSchema()],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Political Risk Expert",
    url: SITE_URL,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/glossary?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceNode(id: string, name: string, description: string) {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/services#${id}`,
    name,
    description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "United Kingdom",
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished = "2025-06-01",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}${path}`,
    inLanguage: "en-GB",
  };
}

export function personSchema({
  id,
  name,
  jobTitle,
  description,
  knowsAbout,
}: {
  id: string;
  name: string;
  jobTitle: string;
  description: string;
  knowsAbout: string[];
}) {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/experts#${id}`,
    name,
    jobTitle,
    description,
    knowsAbout,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/experts`,
  };
}
