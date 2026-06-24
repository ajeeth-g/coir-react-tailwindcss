import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Users,
  Award,
  Globe2,
  Factory,
  Target,
  Sprout,
  Eye,
  Flag,
} from "lucide-react";
import aboutUs from "../assets/About_1.jpg";
import aboutImg from "../assets/About_Us_2.jpg";
import Breadcrumb from "../components/Breadcrumb";
import SectionHeading from "../components/ui/SectionHeading";
import { MotionSection, staggerContainer, staggerItem } from "../components/ui/Motion";
import ImageWithSkeleton from "../components/ui/ImageWithSkeleton";
import PageCTA from "../components/ui/PageCTA";
import SEOHead from "../components/seo/SEOHead";
import { whyChooseUs } from "../data/homeData";
import { getPageMeta } from "../seo/pageMeta";
import { organizationSchema, breadcrumbSchema } from "../seo/schemas";

const pageMeta = getPageMeta("about");

const pillars = [
  {
    icon: Sprout,
    title: "Our Journey",
    text: "From our humble start in 2008 as SSS Global to becoming Lumicos LLP, we've grown into one of India's top coir exporters, driven by precision, trust, and sustainable innovation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the world's most reliable and forward-thinking supplier of eco-friendly coir products — driving agricultural and industrial sustainability through innovation, automation, and integrity.",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver consistent, high-quality coir solutions that meet global standards, exceed customer expectations, and empower our partners through trust, transparency, and long-term value.",
  },
  {
    icon: Flag,
    title: "Our Goal",
    text: "To expand Lumicos into a globally recognized coir brand by scaling automated production, entering new markets, and setting new benchmarks for quality, service, and environmental responsibility.",
  },
];

const highlights = [
  {
    icon: Users,
    title: "Expert Team",
    text: "Led by experienced professionals and skilled technicians, our team drives excellence through deep industry knowledge and hands-on execution.",
  },
  {
    icon: Rocket,
    title: "Innovation Driven",
    text: "Rooted in consistency and global benchmarks, our quality approach ensures every product meets the highest international standards.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    text: "We believe in honest practices, open communication, and long-term relationships built on reliability, clarity, and mutual respect.",
  },
];

const strengths = [
  {
    icon: Award,
    title: "Export Excellence",
    text: "Among India's top 5 coir exporters with $7M+ annual turnover.",
  },
  {
    icon: Factory,
    title: "Integrated Manufacturing",
    text: "Coir liners and metal baskets under one roof — fully integrated B2B export solutions.",
  },
  {
    icon: Globe2,
    title: "Global Footprint",
    text: "Serving wholesale buyers across 40+ countries in horticulture and garden markets.",
  },
];

const AboutPage = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: null },
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
            { name: "About Us", url: "/about-us" },
          ]),
        ]}
      />
    <div className="space-y-16 md:space-y-20">
      <Breadcrumb
        items={breadcrumbItems}
        title="About Us"
        bgImage={aboutUs}
        subtitle="18+ years of coir export excellence from Pollachi, India — now Lumicos LLP."
      />

      {/* Intro */}
      <MotionSection>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
            <ImageWithSkeleton
              src={aboutImg}
              alt="Lumicos coir manufacturing facility"
              className="relative w-full h-[360px] lg:h-[480px] object-cover rounded-2xl shadow-premium-lg"
              containerClassName="relative rounded-2xl"
            />
            <div className="absolute -bottom-5 -right-2 sm:right-4 glass-card rounded-2xl p-4 sm:p-5 shadow-premium-lg">
              <p className="text-2xl sm:text-3xl font-bold text-primary">Since 2008</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                SSS Global → Lumicos LLP
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Who We Are"
              title="India's Trusted Coir Export Manufacturer"
              subtitle="Founded in 2008 as SSS Global, we began as a trading firm with a modest turnover of USD 0.2 million."
              align="left"
            />

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed -mt-6 mb-8">
              <p>
                Over the years, with a strong commitment to quality and customer
                satisfaction, we have grown into one of India's top 5 coir exporters,
                now achieving a turnover of over USD 7 million and a solid footprint
                in global horticulture and garden markets.
              </p>
              <p>
                As part of our evolution, we became one of the few companies in India
                to manufacture both coir liners and metal baskets under one roof,
                offering fully integrated B2B export solutions to international buyers.
              </p>
              <p className="font-semibold text-primary dark:text-primary-300">
                SSS Global is now rebranded as Lumicos LLP — a name that reflects our
                forward-thinking approach and our commitment to automation,
                sustainability, and manufacturing excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {whyChooseUs.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-primary/5 shadow-premium"
                >
                  <p className="text-xl font-bold text-primary">{item.value}</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {strengths.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Pillars */}
      <MotionSection className="section-padding bg-white dark:bg-gray-950 rounded-2xl sm:rounded-3xl -mx-0">
        <SectionHeading
          eyebrow="Our Foundation"
          title="Built on Purpose, Driven by Quality"
          subtitle="Every shipment reflects our commitment to sustainable manufacturing and long-term buyer partnerships."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pillars.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="p-6 rounded-2xl bg-beige-100 dark:bg-gray-900 border border-primary/5 text-center hover:shadow-premium transition-shadow duration-300"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center mb-4">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </MotionSection>

      {/* Why Choose Us */}
      <MotionSection>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Your Reliable Export Partner"
          subtitle="Precision-driven processes and scalable capacity to serve high-demand markets with reliability and consistency."
        />

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {highlights.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="group p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-premium hover:shadow-premium-lg border border-primary/5 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center mb-5 group-hover:from-accent group-hover:to-accent-500 transition-all duration-300">
                <Icon size={26} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link to="/our-infra" className="btn-outline">
            Explore Our Infrastructure
          </Link>
        </div>
      </MotionSection>

      <PageCTA />
    </div>
    </>
  );
};

export default AboutPage;
