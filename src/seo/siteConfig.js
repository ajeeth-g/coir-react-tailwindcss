export const SITE = {
  name: "Lumicos LLP",
  legalName: "Lumicos LLP",
  url: "https://lumicos.com",
  defaultOgImage: "https://lumicos.com/assets/og-default.jpg",
  locale: "en_IN",
  language: "en",
  email: "gaurav@lumicos.com",
  phone: "+91-99654-05999",
  phoneDisplay: "+91 99654 05999",
  whatsapp: "919965405999",
  foundingDate: "2008",
  address: {
    street: "30 Sri MKK Enclave, Marapettai Street",
    city: "Pollachi",
    region: "Tamil Nadu",
    postalCode: "642001",
    country: "IN",
    countryName: "India",
  },
  geo: {
    latitude: 10.6589,
    longitude: 77.0083,
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  hreflang: [
    { lang: "en", href: "https://lumicos.com" },
    { lang: "en-IN", href: "https://lumicos.com" },
    { lang: "en-US", href: "https://lumicos.com" },
    { lang: "en-GB", href: "https://lumicos.com" },
    { lang: "x-default", href: "https://lumicos.com" },
  ],
};

export const NAP = {
  name: SITE.name,
  address: `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}, ${SITE.address.countryName}`,
  phone: SITE.phoneDisplay,
  email: SITE.email,
};
