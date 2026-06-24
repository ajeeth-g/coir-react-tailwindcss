/** 50+ SEO blog topic ideas organized by category */
export const blogCategories = [
  {
    id: "coco-peat-uses",
    label: "Coco Peat Uses",
    topics: [
      "10 Benefits of Coco Peat for Commercial Nurseries",
      "Coco Peat vs Peat Moss: A Complete Comparison for Growers",
      "How to Rehydrate Coir Pith Blocks for Maximum Expansion",
      "Low EC vs High EC Coco Peat: Which Should You Import?",
      "Coco Peat for Seed Starting: Best Practices for Exporters",
      "Using Coco Peat as a Soil Amendment in Arid Climates",
      "Coco Peat Block Sizes: 5 kg vs 650 kg — Buying Guide",
      "Moisture Retention Properties of Coir Pith Explained",
      "Coco Peat in Potting Mix Formulations: Ratios That Work",
      "Sustainable Sourcing: Why Indian Coco Peat Leads Global Supply",
    ],
  },
  {
    id: "hydroponics",
    label: "Hydroponics",
    topics: [
      "Best Coir Substrates for Hydroponic Tomato Production",
      "Grow Bags vs Slabs: Choosing Coir Media for Greenhouses",
      "Managing EC and pH in Coco-Based Hydroponic Systems",
      "Drain-to-Waste vs Recirculating: Coir in Modern Hydroponics",
      "Coco Chips and Peat Blends for Berry Cultivation",
      "How Top Greenhouses Source Coir Grow Bags from India",
      "Irrigation Strategies for Coco Peat Grow Bags",
      "Preventing Salt Buildup in Hydroponic Coir Systems",
    ],
  },
  {
    id: "organic-farming",
    label: "Organic Farming",
    topics: [
      "Coco Peat as an Organic Soil Conditioner for Field Crops",
      "Biodegradable Coir Pots for Organic Certification Programs",
      "Natural Coir Mulch for Weed Suppression and Moisture",
      "Integrating Coir Products into Organic Farm Inputs",
      "Composting Spent Coco Peat: Circular Agriculture Guide",
      "Coir-Based Growing Media for Organic Vegetable Farms",
    ],
  },
  {
    id: "horticulture",
    label: "Horticulture",
    topics: [
      "Coir Substrates for Orchid Cultivation: Chips vs Peat",
      "Nursery Coins and Pellets: Accelerating Seedling Production",
      "Coir Grow Bags for Cut Flower Production",
      "Landscaping with Coir Erosion Control Mats",
      "Seasonal Demand Trends for Coir in Global Horticulture",
      "Quality Parameters Buyers Should Test in Imported Coco Peat",
      "Pollachi Coir Cluster: Why Location Matters for Quality",
    ],
  },
  {
    id: "export-industry",
    label: "Export Industry",
    topics: [
      "How to Choose a Reliable Coir Exporter in India",
      "Coir Export Documentation: COO, Phytosanitary & Fumigation",
      "FOB vs CIF: Shipping Coir Products from Indian Ports",
      "Container Loading Guide for Coir Pith Blocks",
      "Top Import Markets for Indian Coco Peat in 2025",
      "MOQ and Pricing Models for B2B Coir Buyers",
      "Third-Party Inspection for Coir Export Orders",
      "Incoterms Explained for International Coir Trade",
      "Building Long-Term Supplier Relationships with Indian Coir Manufacturers",
      "Customs Tariff Codes for Coco Peat and Coir Fiber Imports",
      "Letter of Credit vs Advance Payment for Coir Export Orders",
      "Freight Cost Optimization for Coir Pith Block Shipments",
      "Quality Dispute Resolution in International Coir Trade",
    ],
  },
  {
    id: "sustainable-agriculture",
    label: "Sustainable Agriculture",
    topics: [
      "Coconut Coir: A Renewable Alternative to Peat Extraction",
      "Carbon Footprint of Coir Products vs Synthetic Substrates",
      "Zero-Waste Processing in Modern Coir Manufacturing",
      "Coir in Regenerative Agriculture and Soil Health Programs",
      "Biodegradable Coir Products for Plastic-Free Gardening",
      "How Coir Supports UN Sustainable Development Goals in Agriculture",
    ],
  },
];

export const totalBlogTopics = blogCategories.reduce(
  (sum, cat) => sum + cat.topics.length,
  0
);
