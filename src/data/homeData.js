export const companyStats = [
  { value: "18+", label: "Years Experience" },
  { value: "40+", label: "Export Countries" },
  { value: "$7M+", label: "Annual Turnover" },
  { value: "500+", label: "Shipments / Year" },
];

export const whyChooseUs = [
  { value: "Top 5", label: "Coir Exporter in India" },
  { value: "ISO", label: "Certified Quality Systems" },
  { value: "100%", label: "Export Compliance" },
  { value: "24/7", label: "Dedicated B2B Support" },
];

export const industries = [
  {
    title: "Agriculture",
    description: "Soil conditioning, crop substrates, and sustainable farming inputs.",
    icon: "Sprout",
  },
  {
    title: "Hydroponics",
    description: "Low EC grow media and precision substrates for controlled environments.",
    icon: "Droplets",
  },
  {
    title: "Landscaping",
    description: "Erosion control, mulch, and natural fiber solutions for outdoor projects.",
    icon: "Trees",
  },
  {
    title: "Horticulture",
    description: "Nursery propagation, potting mixes, and greenhouse-grade coir products.",
    icon: "Flower2",
  },
  {
    title: "Greenhouses",
    description: "Grow bags, coco peat blocks, and custom media for high-yield cultivation.",
    icon: "Warehouse",
  },
  {
    title: "Soil Conditioning",
    description: "Coco peat and chips to improve aeration, moisture, and soil structure.",
    icon: "Layers",
  },
];

export const manufacturingSteps = [
  {
    step: "01",
    title: "Raw Material Collection",
    description:
      "Premium coconut husks sourced from Pollachi, India's coir heartland, ensuring consistent fiber quality.",
    icon: "Leaf",
  },
  {
    step: "02",
    title: "Processing",
    description:
      "Automated defibering, washing, sieving, and compression using state-of-the-art machinery.",
    icon: "Cog",
  },
  {
    step: "03",
    title: "Quality Inspection",
    description:
      "Rigorous EC, moisture, pH, and impurity testing at every production stage.",
    icon: "Microscope",
  },
  {
    step: "04",
    title: "Packaging",
    description:
      "Export-grade packaging with custom labeling, palletization, and moisture protection.",
    icon: "Package",
  },
  {
    step: "05",
    title: "Export Logistics",
    description:
      "Efficient container loading, documentation, and timely global shipment delivery.",
    icon: "Ship",
  },
];

export const qualityPoints = [
  {
    title: "Multi-Stage Quality Checks",
    description: "Every batch tested for EC, moisture, pH, fiber length, and impurities.",
    icon: "ClipboardCheck",
  },
  {
    title: "International Standards",
    description: "Products meet global horticulture and agricultural specifications.",
    icon: "Globe2",
  },
  {
    title: "Export Compliance",
    description: "Full documentation, phytosanitary certificates, and customs readiness.",
    icon: "FileCheck",
  },
  {
    title: "Sustainable Manufacturing",
    description: "Eco-friendly processes, renewable raw materials, and zero-waste goals.",
    icon: "Recycle",
  },
];

export const exportCountries = [
  { name: "USA", x: 22, y: 38, shipments: 85 },
  { name: "Germany", x: 52, y: 28, shipments: 62 },
  { name: "Netherlands", x: 50, y: 26, shipments: 58 },
  { name: "Spain", x: 47, y: 34, shipments: 45 },
  { name: "Poland", x: 54, y: 27, shipments: 38 },
  { name: "Australia", x: 82, y: 72, shipments: 52 },
  { name: "China", x: 75, y: 36, shipments: 70 },
  { name: "South Korea", x: 80, y: 35, shipments: 40 },
  { name: "Brazil", x: 32, y: 65, shipments: 35 },
  { name: "UAE", x: 62, y: 42, shipments: 28 },
  { name: "India", x: 68, y: 42, shipments: 120 },
];

export const buyerBenefits = [
  {
    title: "Premium Quality",
    description: "Export-grade coir products with consistent specifications batch after batch.",
    icon: "Award",
  },
  {
    title: "Competitive Pricing",
    description: "Direct manufacturer pricing with volume discounts for wholesale buyers.",
    icon: "BadgeDollarSign",
  },
  {
    title: "Timely Delivery",
    description: "Reliable production schedules and on-time global shipment commitments.",
    icon: "Clock",
  },
  {
    title: "Custom Packaging",
    description: "Tailored block sizes, bag weights, labeling, and pallet configurations.",
    icon: "Box",
  },
  {
    title: "Bulk Supply Capacity",
    description: "Large-scale manufacturing to meet container-load and recurring orders.",
    icon: "Container",
  },
  {
    title: "Dedicated Support",
    description: "Single point of contact for quotes, samples, and order tracking.",
    icon: "Headphones",
  },
];

export const testimonials = [
  {
    company: "GreenGrow Horticulture BV",
    country: "Netherlands",
    rating: 5,
    review:
      "Lumicos has been our trusted coir supplier for 6 years. Consistent low-EC coco peat quality and reliable container deliveries every quarter.",
    name: "Jan van der Berg",
    role: "Procurement Director",
  },
  {
    company: "Pacific Agri Solutions",
    country: "Australia",
    rating: 5,
    review:
      "Their grow bags and coco chips meet our greenhouse standards perfectly. Professional documentation and responsive export team.",
    name: "Sarah Mitchell",
    role: "Operations Manager",
  },
  {
    company: "EuroCoir Trading GmbH",
    country: "Germany",
    rating: 5,
    review:
      "Top-tier manufacturing facility and transparent quality reports. We recommend Lumicos for serious B2B coir procurement.",
    name: "Klaus Weber",
    role: "Managing Director",
  },
  {
    company: "AgriNova Inc.",
    country: "USA",
    rating: 5,
    review:
      "Custom packaging and bulk supply capacity set them apart. Our hydroponic clients love the substrate consistency.",
    name: "Michael Torres",
    role: "Supply Chain Lead",
  },
];

export const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System certification for consistent manufacturing excellence.",
    icon: "ShieldCheck",
  },
  {
    title: "Organic Certified",
    description: "Eco-friendly, chemical-free processing for organic agriculture markets.",
    icon: "Leaf",
  },
  {
    title: "Export Licensed",
    description: "Registered export house with full international trade compliance.",
    icon: "BadgeCheck",
  },
  {
    title: "Phytosanitary Ready",
    description: "Products meet global plant health and import regulations.",
    icon: "FileBadge",
  },
];

// Product cards — synced with products.json via productCatalog
export { showcaseProducts, allCatalogProducts, getProductById } from "./productCatalog";
