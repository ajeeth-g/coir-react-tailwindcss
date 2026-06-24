import { motion } from "framer-motion";
import SectionHeading from "../../../components/ui/SectionHeading";
import DynamicIcon from "../../../components/ui/DynamicIcon";
import { MotionSection, staggerContainer, staggerItem } from "../../../components/ui/Motion";
import { certifications } from "../../../data/homeData";

const CertificationsSection = () => {
  return (
    <MotionSection
      id="certifications"
      className="section-padding bg-white dark:bg-gray-950"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Internationally Recognized Standards"
          subtitle="Our commitment to quality, sustainability, and export compliance is backed by recognized certifications and rigorous quality management systems."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={staggerItem}
              className="text-center p-6 rounded-2xl border-2 border-dashed border-primary/20 hover:border-accent hover:bg-beige-50 dark:hover:bg-gray-900 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 group-hover:bg-accent/20 flex items-center justify-center mb-4 transition-colors">
                <DynamicIcon
                  name={cert.icon}
                  size={28}
                  className="text-primary group-hover:text-accent transition-colors"
                />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
};

export default CertificationsSection;
