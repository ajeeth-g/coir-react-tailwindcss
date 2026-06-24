import { SITE, NAP } from "./siteConfig";

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/assets/Logo.png`,
  description:
    "Premium coir products manufacturer and exporter from Pollachi, India. Coco peat, coir fiber, grow bags and customized B2B solutions.",
  foundingDate: SITE.foundingDate,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    email: SITE.email,
    contactType: "sales",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#localbusiness`,
  name: SITE.name,
  image: `${SITE.url}/assets/Logo.png`,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.latitude,
    longitude: SITE.geo.longitude,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { "@id": `${SITE.url}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url}/products?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url ? `${SITE.url}${item.url}` : undefined,
  })),
});

export const productSchema = ({ name, description, image, slug, sku }) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  description,
  image: image?.startsWith("http") ? image : `${SITE.url}${image}`,
  sku: sku || slug,
  brand: {
    "@type": "Brand",
    name: SITE.name,
  },
  manufacturer: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    url: `${SITE.url}/products/${slug}`,
    seller: { "@id": `${SITE.url}/#organization` },
  },
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
});

export const contactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${SITE.name}`,
  url: `${SITE.url}/contact-us`,
  description: `Contact ${NAP.name} for coir export enquiries. ${NAP.address}`,
});

export const exportCountries = [
  { region: "North America", countries: ["United States", "Canada", "Mexico"] },
  { region: "Europe", countries: ["Germany", "Netherlands", "Spain", "Poland", "UK", "France", "Italy", "Belgium"] },
  { region: "Asia Pacific", countries: ["Australia", "China", "South Korea", "Japan", "Singapore", "Malaysia", "Vietnam"] },
  { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar", "Oman"] },
  { region: "South America", countries: ["Brazil", "Chile", "Colombia", "Peru"] },
  { region: "Africa", countries: ["South Africa", "Kenya", "Morocco"] },
];
