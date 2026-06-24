import { Link } from "react-router-dom";
import { Award, ShieldCheck, FileCheck, Globe, Microscope } from "lucide-react";
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";
import SectionHeading from "../components/ui/SectionHeading";
import PageCTA from "../components/ui/PageCTA";
import SEOHead from "../components/seo/SEOHead";
import { MotionSection, staggerContainer, staggerItem } from "../components/ui/Motion";
import { getPageMeta } from "../seo/pageMeta";
import { organizationSchema, breadcrumbSchema } from "../seo/schemas";

const pageMeta = getPageMeta("certifications");

const certifications = [
  {
    icon: Award,
    title: "ISO Quality Management",
    text: "Structured quality systems ensuring consistent EC, moisture, pH, and impurity parameters across all export batches.",
  },
  {
    icon: Microscope,
    title: "In-House Laboratory Testing",
    text: "Multi-stage QC at raw material intake, processing, compression, and pre-shipment stages with documented batch records.",
  },
  {
    icon: FileCheck,
    title: "Export Compliance",
    text: "Phytosanitary certificates, fumigation, certificate of origin, and third-party inspection coordination (SGS, Bureau Veritas).",
  },
  {
    icon: ShieldCheck,
    title: "Buyer Specification Adherence",
    text: "Custom EC grades, block sizes, packaging, and labeling to meet country-specific import and agricultural standards.",
  },
  {
    icon: Globe,
    title: "International Market Ready",
    text: "Products tested and shipped to 40+ countries meeting EU, US, Australian, and Middle Eastern import requirements.",
  },
];

const CertificationsPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Certifications", href: null },
  ];

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Certifications", url: "/certifications" },
  ];

  return (
    <>
      <SEOHead
        title={pageMeta.title}
        description={pageMeta.description}
        keywords={pageMeta.keywords}
        canonical={pageMeta.canonical}
        jsonLd={[organizationSchema(), breadcrumbSchema(crumbs)]}
      />

      <div className="space-y-16 md:space-y-20">
        <Breadcrumb
          items={breadcrumbItems}
          title="Certifications & Quality"
          subtitle="Export-grade quality systems for coco peat, coir fiber, and grow bag shipments worldwide."
        />

        <MotionSection>
          <SectionHeading
            eyebrow="Quality Assurance"
            title="Certified Coir Export Standards"
            subtitle="Every Lumicos shipment is backed by rigorous testing, documented QC, and full export compliance support."
          />

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-primary/5 shadow-premium"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </MotionSection>

        <MotionSection className="rounded-2xl bg-white dark:bg-gray-900 p-8 border border-primary/5">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Quality Parameters We Test
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
            {[
              "Electrical Conductivity (EC) — low EC washed & high EC grades",
              "Moisture content — export-specified ranges per product",
              "pH levels — typically 5.2 to 6.8 for coco peat products",
              "Fiber length, impurity & sand content for coir fiber",
              "Compression ratio & expansion volume for pith blocks",
              "Visual inspection, packaging integrity & pallet stability",
            ].map((item) => (
              <p key={item} className="flex gap-2">
                <span className="text-accent">✓</span> {item}
              </p>
            ))}
          </div>
          <p className="mt-6 text-sm">
            <Link to="/contact-us" className="text-primary font-semibold hover:underline">
              Request our full quality specification sheet →
            </Link>
          </p>
        </MotionSection>

        <PageCTA
          title="Need certification documents for your import?"
          subtitle="Our export team provides COA, phytosanitary certificates, and inspection reports with every shipment."
        />
      </div>
    </>
  );
};

export default CertificationsPage;
