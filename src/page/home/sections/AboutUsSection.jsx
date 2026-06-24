import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Globe2, Award, Users } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";
import { MotionSection } from "../../../components/ui/Motion";
import { whyChooseUs } from "../../../data/homeData";
import ImageWithSkeleton from "../../../components/ui/ImageWithSkeleton";
import aboutImg from "../../../assets/About_Us_2.jpg";

const features = [
  {
    icon: Award,
    title: "Export Excellence",
    text: "Among India's top 5 coir exporters with $7M+ annual turnover.",
  },
  {
    icon: Factory,
    title: "Manufacturing Scale",
    text: "Automated processing lines and large-scale production in Pollachi.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    text: "Serving buyers across USA, Europe, Australia, Asia, and South America.",
  },
  {
    icon: Users,
    title: "Dedicated B2B Support",
    text: "Single point of contact for quotes, samples, and order tracking.",
  },
];

const AboutUsSection = () => {
  return (
    <MotionSection id="about" className="section-padding bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
            <ImageWithSkeleton
              src={aboutImg}
              alt="Lumicos coir manufacturing facility"
              className="relative w-full h-[400px] lg:h-[520px] object-cover rounded-2xl shadow-premium-lg"
              containerClassName="relative rounded-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-4 sm:right-6 glass-card rounded-2xl p-5 shadow-premium-lg"
            >
              <p className="text-3xl font-bold text-primary">Since 2008</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Trusted Coir Export Partner
              </p>
            </motion.div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Company Introduction"
              title="Leading Coir Export Manufacturer from India"
              subtitle="Founded as SSS Global in 2008, Lumicos LLP has grown from a modest trading firm into one of India's most trusted coir exporters — delivering premium products to global horticulture and agriculture markets."
              align="left"
            />

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 -mt-8">
              With state-of-the-art infrastructure in Pollachi — the heart of
              India's coir industry — we combine traditional craftsmanship with
              modern automation to produce export-grade coco peat, coir fiber,
              grow bags, and customized solutions at scale.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {whyChooseUs.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-beige-100 dark:bg-gray-900 border border-primary/5"
                >
                  <p className="text-xl font-bold text-primary">{item.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map(({ icon: Icon, title, text }) => (
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

            <Link to="/about-us" className="btn-outline">
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default AboutUsSection;
