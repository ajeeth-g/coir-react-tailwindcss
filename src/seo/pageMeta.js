import { SITE } from "./siteConfig";
import { ALL_PRODUCT_SLUGS } from "./productSlugs";

const truncate = (str, max) =>
  str.length <= max ? str : `${str.slice(0, max - 1).trim()}…`;

export const PAGE_META = {
  home: {
    title: "Coir Products Exporter India | Lumicos LLP",
    description:
      "Lumicos LLP — leading coir products manufacturer & exporter from Pollachi, India. Coco peat blocks, coir fiber, grow bags to 40+ countries. Request a quote.",
    keywords:
      "coir products manufacturer, coir products exporter, coco peat supplier, coco peat exporter, coir export company India, coconut coir products",
    path: "/",
  },
  about: {
    title: "About Lumicos | Coir Export Company India",
    description:
      "Since 2008, Lumicos LLP has grown into a top 5 coir exporter in India with $7M+ turnover. Learn about our Pollachi manufacturing and global B2B export services.",
    keywords:
      "coir export company India, coir manufacturer Pollachi, coco peat exporter India, Lumicos LLP about",
    path: "/about-us",
  },
  products: {
    title: "Coir Products Catalog | Wholesale Export Supplier",
    description:
      "Browse export-grade coir pith blocks, coco peat grow bags, coir fiber, twisted rope, nursery products & garden articles. Bulk B2B pricing from Lumicos India.",
    keywords:
      "coir products, coco peat supplier, coir grow bags supplier, coir fiber exporter, wholesale coir products",
    path: "/products",
  },
  infra: {
    title: "Coir Manufacturing Infrastructure | Lumicos Pollachi",
    description:
      "Tour Lumicos LLP's integrated coir production units in Pollachi — husk processing, fiber bales, pith blocks, grow bags & export packaging facilities.",
    keywords:
      "coir manufacturing India, coir factory Pollachi, coco peat manufacturer India, coir production facility",
    path: "/our-infra",
  },
  portfolio: {
    title: "Coir Products Portfolio | Export Quality Gallery",
    description:
      "View real export shipments — coir fiber, coco peat blocks, grow bags, nursery coins & garden articles supplied to buyers in 40+ countries worldwide.",
    keywords:
      "coir products portfolio, coco peat export, coir fiber images, coconut coir products gallery",
    path: "/our-portfolio",
  },
  contact: {
    title: "Contact Coir Exporter | Request Quote | Lumicos",
    description:
      "Contact Lumicos LLP for coir export quotes, samples & MOQ details. Pollachi, Tamil Nadu, India. Phone +91 99654 05999 · gaurav@lumicos.com",
    keywords:
      "coir exporter contact, coco peat quote, coir supplier India contact, Lumicos enquiry",
    path: "/contact-us",
  },
  certifications: {
    title: "Coir Export Certifications & Quality Standards",
    description:
      "Lumicos LLP maintains ISO-certified quality systems, export compliance, and rigorous EC/moisture testing for coco peat and coir fiber shipped globally.",
    keywords:
      "coir export certification, coco peat quality standards, ISO coir manufacturer, coir export compliance",
    path: "/certifications",
  },
  exportCountries: {
    title: "Coir Export Countries | Global Shipping Network",
    description:
      "Lumicos exports coir products to 40+ countries — USA, Europe, Australia, Asia & Middle East. Reliable container shipping from Chennai & Tuticorin ports.",
    keywords:
      "coir export countries, coco peat exporter USA, coir supplier Europe, coir export India global",
    path: "/export-countries",
  },
  blog: {
    title: "Coir Industry Blog | Coco Peat & Export Insights",
    description:
      "Expert articles on coco peat uses, hydroponics, organic farming, horticulture & coir export industry trends from India's leading coir manufacturer.",
    keywords:
      "coco peat blog, coir industry news, hydroponics coir, organic farming coco peat, horticulture substrate",
    path: "/blog",
  },
};

export const PRODUCT_META = {
  "coir-fiber": {
    title: "Coir Fiber Exporter | Coconut Fibre Supplier",
    description:
      "Export-grade coir fiber — mattress, bristle & mixed fibre from Lumicos India. Bulk bales for bedding, geotextiles & industrial use. Request wholesale quote.",
    keywords:
      "coir fiber exporter, coconut fibre supplier, coir fiber manufacturer India, mattress coir fibre",
  },
  "coir-rope": {
    title: "Twisted Coir Fibre & Coir Rope Exporter India",
    description:
      "Twisted coir fibre coils (20–100 kg) for mattresses, rubberized coir & ropes. Leading coir rope supplier from Pollachi. Export MOQ & specs available.",
    keywords:
      "coir rope exporter, twisted coir fibre, coir rope manufacturer India, coir fibre coils",
  },
  "coir-pith-blocks": {
    title: "Coir Pith Block Manufacturer | Coco Peat Supplier",
    description:
      "Coir pith blocks & coco peat — 5 kg blocks, 650 kg bales & bulk bags. Low EC washed grades for horticulture. Top coco peat exporter from India.",
    keywords:
      "coir pith block manufacturer, coco peat supplier, coco peat exporter, coir peat blocks India",
  },
  "coco-peat-grow-bags": {
    title: "Coir Grow Bags Supplier | Coco Peat Grow Bags",
    description:
      "Coco peat grow bags for greenhouse & hydroponic farming. Open-top & naked grow bag formats. Custom media ratios. Export from Lumicos LLP India.",
    keywords:
      "coir grow bags supplier, coco peat grow bags, greenhouse grow bags exporter, hydroponic coir bags",
  },
  "coco-chips": {
    title: "Coco Chips Exporter | Coconut Coir Chips Supplier",
    description:
      "Low EC coco chips for orchids, hydroponics & potting mixes. Sustainable coconut coir chips exported worldwide from Lumicos Pollachi manufacturing unit.",
    keywords:
      "coco chips exporter, coconut coir chips, coir chips supplier India, orchid growing medium",
  },
  "nursery-coir-products": {
    title: "Coir Nursery Products | Coins, Pellets & Cubes",
    description:
      "Coir nursery coins, pellets & cubes for seed germination and propagation. Biodegradable coco peat starters for commercial nurseries. Export MOQ available.",
    keywords:
      "coir nursery products, coco peat coins, coir pellets exporter, seed germination coir",
  },
  "rubberised-coir": {
    title: "Rubberised Coir Sheets | Mattress Coir Exporter",
    description:
      "Rubberised coir sheets bonded with natural latex for mattresses, cushions & upholstery. Export-grade quality from Lumicos LLP, Pollachi, India.",
    keywords:
      "rubberised coir exporter, coir mattress material, latex bonded coir India",
  },
  "coir-garden-articles": {
    title: "Coir Garden Articles | Baskets, Mats & Hooks",
    description:
      "Coir hanging baskets, liners, hooks & garden accessories. Eco-friendly coconut coir products for landscaping and retail. Wholesale export from India.",
    keywords:
      "coir mats supplier, coir garden articles, coir baskets exporter, coconut coir products garden",
  },
};

export const getPageMeta = (key) => {
  const meta = PAGE_META[key];
  if (!meta) return null;
  return {
    ...meta,
    title: truncate(meta.title, 60),
    description: truncate(meta.description, 160),
    canonical: `${SITE.url}${meta.path}`,
  };
};

export const getProductPageMeta = (slug, productTitle) => {
  const meta = PRODUCT_META[slug] || {
    title: `${productTitle} | Coir Exporter India`,
    description: `Export-grade ${productTitle} from Lumicos LLP — leading coir products manufacturer in Pollachi, India. Request B2B quote & specifications.`,
    keywords: `${productTitle}, coir exporter, coco peat supplier India`,
  };
  return {
    ...meta,
    title: truncate(meta.title, 60),
    description: truncate(meta.description, 160),
    canonical: `${SITE.url}/products/${slug}`,
    path: `/products/${slug}`,
  };
};

export const SITEMAP_PATHS = [
  ...Object.values(PAGE_META).map((p) => p.path),
  ...ALL_PRODUCT_SLUGS.map((s) => `/products/${s}`),
];
