import { motion } from "framer-motion";
import SectionHeading from "../../../components/ui/SectionHeading";
import DynamicIcon from "../../../components/ui/DynamicIcon";
import { MotionSection, staggerContainer, staggerItem } from "../../../components/ui/Motion";
import { buyerBenefits } from "../../../data/homeData";

const WhyUsSection = () => {
  return (
    <MotionSection
      id="why-us"
      className="section-padding bg-gradient-to-br from-primary-50 to-beige-100 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Why Global Buyers Choose Us"
          title="Your Reliable Coir Export Partner"
          subtitle="We combine manufacturing excellence, competitive pricing, and dedicated B2B support to help international buyers succeed in their markets."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {buyerBenefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-premium hover:shadow-premium-lg border border-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center mb-5 group-hover:from-accent group-hover:to-accent-500 transition-all duration-300">
                <DynamicIcon name={benefit.icon} size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default WhyUsSection;
