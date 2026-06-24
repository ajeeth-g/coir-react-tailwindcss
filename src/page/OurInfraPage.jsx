import image1 from "../assets/Infra_18.jpg";
import image2 from "../assets/Infra_17.jpg";
import image3 from "../assets/Infra_19.jpg";
import image4 from "../assets/Infra_20.jpg";
import image5 from "../assets/Infra_21.jpg";
import image6 from "../assets/Infra_6.jpg";
import image7 from "../assets/Infra_7.jpg";
import image8 from "../assets/Infra_8.jpg";
import image9 from "../assets/Infra_22.jpg";
import image10 from "../assets/Infra_14.jpg";
import image11 from "../assets/Infra_23.jpg";
import image12 from "../assets/Infra_24.jpg";
import image13 from "../assets/Infra_11.jpg";
import image14 from "../assets/Infra_12.jpg";
import image15 from "../assets/Infra_13.jpg";
import image16 from "../assets/Infra_9.jpg";
import image17 from "../assets/Infra_10.jpg";
import image18 from "../assets/Infra_15.jpg";
import image19 from "../assets/Infra_16.jpg";
import infraHero from "../assets/Infra_18.jpg";
import Breadcrumb from "../components/Breadcrumb";
import SectionHeading from "../components/ui/SectionHeading";
import ImageCarousel from "../components/ui/ImageCarousel";
import PageCTA from "../components/ui/PageCTA";
import SEOHead from "../components/seo/SEOHead";
import { MotionSection } from "../components/ui/Motion";
import { getPageMeta } from "../seo/pageMeta";
import { organizationSchema, breadcrumbSchema } from "../seo/schemas";

const pageMeta = getPageMeta("infra");

const infraUnits = [
  {
    title: "Coconut Husk Unit",
    eyebrow: "Raw Material Processing",
    images: [image1, image2, image3],
    imagePosition: "left",
    points: [
      "Coconut husk is extracted from the outer surface of the coconut — a valuable by-product of the coconut tree.",
      "Our husk processing unit handles large volumes with consistent quality for downstream fiber and pith production.",
      "The chemical composition includes cellulose, lignin, pyroligneous acid, charcoal, tar, tannin, and potassium.",
      "Predominantly used for direct combustion to make charcoal; we maximize value through structured processing.",
    ],
  },
  {
    title: "Coconut Fibre Bale Unit",
    eyebrow: "Fiber Production",
    images: [image4, image5, image6, image7, image8],
    imagePosition: "right",
    points: [
      "Coconut coir is made from the external hard shell of the coconut fruit — now a major global industry.",
      "Coir fiber offers excellent tensile strength for dragging, lifting, and industrial applications.",
      "Ropes are thicker and stronger than cord, string, and twine — constructed from natural or synthetic fibers.",
      "Our baled fiber is export-ready with standardized moisture and compression for international shipping.",
    ],
  },
  {
    title: "Coconut Pith Block Unit",
    eyebrow: "Coco Peat Manufacturing",
    images: [image9, image10, image11, image12],
    imagePosition: "left",
    points: [
      "Coir pith binds coconut fiber in the husk — an excellent soil conditioner and soil-less growing medium.",
      "Available in raw form or converted into organic manure for agri-horticultural applications.",
      "Used by potting mix suppliers, seedling nurseries, hydroponic growers, and golf green constructors.",
      "Organic compounds in pith promote strong root growth and offer natural resistance to plant diseases.",
    ],
  },
  {
    title: "Coconut Chips Unit",
    eyebrow: "Growing Media",
    images: [image13, image14, image15],
    imagePosition: "right",
    points: [
      "Coco coir husk chips are an organic, sustainable mulch made from coconut shells.",
      "Durable chips withstand inclement weather and break down at a measured, even rate.",
      "High-quality chips absorb and retain water, slowly releasing it — ideal for orchids and landscaping.",
      "Commonly blended with coco peat to improve aeration and water flow for diverse crop needs.",
    ],
  },
  {
    title: "Twisted Fibre Unit",
    eyebrow: "Value-Added Fiber",
    images: [image16, image17],
    imagePosition: "left",
    points: [
      "Twisted fibre transports mattress and mix fibre in compact coils — 20 kg, 50 kg, or 100 kg sizes.",
      "Twisting gives fibers a curling effect essential for latex penetration in mattress manufacturing.",
      "Our twisting machinery produces consistent coils for export and domestic industrial buyers.",
      "Known for quality across India — widely used in latex mattresses, cushions, and industrial applications.",
    ],
  },
  {
    title: "Garden Articles Unit",
    eyebrow: "Finished Products",
    images: [image18, image19],
    imagePosition: "right",
    points: [
      "Coir pots and baskets made from natural coconut fiber and rubberized binding for durability.",
      "100% eco-friendly — transforms into organic matter on decomposing; supplied in custom sizes.",
      "Air pruning through pot walls encourages strong root systems for healthier plants.",
      "From poles to hanging baskets — coir makes every essential accessory for modern gardening.",
    ],
  },
];

const OurInfraPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Infrastructure", href: null },
  ];

  return (
    <>
      <SEOHead
        title={pageMeta.title}
        description={pageMeta.description}
        keywords={pageMeta.keywords}
        canonical={pageMeta.canonical}
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Infrastructure", url: "/our-infra" },
          ]),
        ]}
      />
    <div className="space-y-16 md:space-y-24">
      <Breadcrumb
        items={breadcrumbItems}
        title="Our Infrastructure"
        bgImage={infraHero}
        subtitle="State-of-the-art manufacturing units in Pollachi — the heart of India's coir industry."
      />

      <MotionSection>
        <SectionHeading
          eyebrow="Manufacturing Excellence"
          title="Integrated Coir Production Facilities"
          subtitle="From raw husk to finished export products — every stage under one roof with automated processing and strict quality control."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 md:mb-20">
          {[
            { value: "6+", label: "Production Units" },
            { value: "500+", label: "Shipments / Year" },
            { value: "40+", label: "Export Countries" },
            { value: "18+", label: "Years Experience" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-2xl bg-white dark:bg-gray-900 border border-primary/5 shadow-premium"
            >
              <p className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </MotionSection>

      {infraUnits.map((unit, index) => (
        <MotionSection key={unit.title} delay={index * 0.05}>
          <div
            className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
              unit.imagePosition === "right" ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <ImageCarousel
              images={unit.images}
              altPrefix={unit.title}
              className="w-full"
            />

            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-2">
                {unit.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {unit.title}
              </h2>
              <ul className="space-y-3">
                {unit.points.map((point) => (
                  <li
                    key={point.slice(0, 40)}
                    className="flex gap-3 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base"
                  >
                    <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {index < infraUnits.length - 1 && (
            <hr className="mt-16 md:mt-24 border-primary/10 dark:border-gray-800" />
          )}
        </MotionSection>
      ))}

      <PageCTA
        title="Tour our facility virtually"
        subtitle="Schedule a call with our export team to discuss capacity, certifications, and custom manufacturing requirements."
        primaryLabel="Contact Export Team"
        secondaryLabel="View Product Range"
      />
    </div>
    </>
  );
};

export default OurInfraPage;
