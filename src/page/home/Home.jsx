import AboutUsSection from "./sections/AboutUsSection";
import ContactUsSection from "./sections/ContactUsSection";
import FAQSection from "./sections/FAQSection";
import HeroSection from "./sections/HeroSection";
import InfraSection from "./sections/InfraSection";
import OurProductSection from "./sections/OurProductSection";
import WhyUsSection from "./sections/WhyUsSection";

const Home = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-24">
      <HeroSection />
      <AboutUsSection />
      <OurProductSection />
      <InfraSection />
      <WhyUsSection />
      <FAQSection />
      <ContactUsSection />
    </div>
  );
};

export default Home;
