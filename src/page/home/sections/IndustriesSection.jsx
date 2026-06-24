import { motion } from "framer-motion";
import SectionHeading from "../../../components/ui/SectionHeading";
import DynamicIcon from "../../../components/ui/DynamicIcon";
import { MotionSection, staggerContainer, staggerItem } from "../../../components/ui/Motion";
import { industries } from "../../../data/homeData";

const IndustriesSection = () => {
  return (
    <MotionSection id="industries" className="section-padding bg-white dark:bg-gray-950">
      <div className="section-container">
        <SectionHeading
          eyebrow="Industries Served"
          title="Coir Solutions for Every Sector"
          subtitle="From greenhouse cultivation to large-scale agriculture, our products power industries worldwide with sustainable, high-performance natural fiber solutions."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={staggerItem}
              className="group p-6 rounded-2xl bg-beige-100 dark:bg-gray-900 border border-transparent hover:border-primary/20 hover:shadow-premium transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-300">
                <DynamicIcon
                  name={industry.icon}
                  size={26}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default IndustriesSection;
