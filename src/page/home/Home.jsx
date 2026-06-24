import AboutUsSection from "./sections/AboutUsSection";
import CertificationsSection from "./sections/CertificationsSection";
import ContactUsSection from "./sections/ContactUsSection";
import FAQSection from "./sections/FAQSection";
import GlobalExportSection from "./sections/GlobalExportSection";
import HeroSection from "./sections/HeroSection";
import IndustriesSection from "./sections/IndustriesSection";
import ManufacturingProcessSection from "./sections/ManufacturingProcessSection";
import OurProductSection from "./sections/OurProductSection";
import QualityAssuranceSection from "./sections/QualityAssuranceSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import WhyUsSection from "./sections/WhyUsSection";
import SEOHead from "../../components/seo/SEOHead";
import { getPageMeta } from "../../seo/pageMeta";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  faqSchema,
} from "../../seo/schemas";
import { faqData } from "../../seo/faqData";

const pageMeta = getPageMeta("home");

const Home = () => (
  <>
    <SEOHead
      title={pageMeta.title}
      description={pageMeta.description}
      keywords={pageMeta.keywords}
      canonical={pageMeta.canonical}
      jsonLd={[
        organizationSchema(),
        localBusinessSchema(),
        websiteSchema(),
        faqSchema(faqData),
      ]}
    />
    <div className="flex flex-col">
      <HeroSection />
      <AboutUsSection />
      <OurProductSection />
      <IndustriesSection />
      <ManufacturingProcessSection />
      <QualityAssuranceSection />
      <GlobalExportSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CertificationsSection />
      <FAQSection />
      <ContactUsSection />
    </div>
  </>
);

export default Home;
