import { motion } from "framer-motion";
import SectionHeading from "../../../components/ui/SectionHeading";
import DynamicIcon from "../../../components/ui/DynamicIcon";
import { MotionSection, staggerContainer, staggerItem } from "../../../components/ui/Motion";
import { qualityPoints } from "../../../data/homeData";
import ImageWithSkeleton from "../../../components/ui/ImageWithSkeleton";
import qualityImg from "../../../assets/Infra_9.jpg";

const QualityAssuranceSection = () => {
  return (
    <MotionSection
      id="quality"
      className="section-padding bg-beige-100 dark:bg-gray-900"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Quality Assurance"
              title="Export Quality You Can Trust"
              subtitle="Every product undergoes rigorous testing and compliance checks before leaving our facility — ensuring your buyers receive consistent, specification-grade coir products."
              align="left"
            />

            <motion.div
              className="space-y-4 -mt-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {qualityPoints.map((point) => (
                <motion.div
                  key={point.title}
                  variants={staggerItem}
                  className="flex gap-4 p-4 rounded-xl bg-white dark:bg-gray-950 border border-primary/5 hover:shadow-premium transition-shadow"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <DynamicIcon
                      name={point.icon}
                      size={22}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {point.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <ImageWithSkeleton
              src={qualityImg}
              alt="Quality inspection at Lumicos facility"
              className="w-full h-[480px] object-cover rounded-2xl shadow-premium-lg"
              containerClassName="rounded-2xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-5"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { val: "100%", label: "QC Tested" },
                  { val: "ISO", label: "Certified" },
                  { val: "0", label: "Compromise" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-bold text-primary">{s.val}</p>
                    <p className="text-xs text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default QualityAssuranceSection;
