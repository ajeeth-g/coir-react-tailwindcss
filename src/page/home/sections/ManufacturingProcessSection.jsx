import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../../../components/ui/SectionHeading";
import DynamicIcon from "../../../components/ui/DynamicIcon";
import { MotionSection } from "../../../components/ui/Motion";
import { manufacturingSteps } from "../../../data/homeData";

const ManufacturingProcessSection = () => {
  return (
    <MotionSection
      id="process"
      className="section-padding bg-primary-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <SectionHeading
          eyebrow="Manufacturing Process"
          title="From Coconut Husk to Global Export"
          subtitle="Our end-to-end production pipeline ensures consistent quality, sustainable practices, and on-time delivery for every international order."
          light
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {manufacturingSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                    index > 0 ? "lg:mt-12" : ""
                  }`}
                >
                  <div
                    className={`${isEven ? "lg:order-1 lg:text-right" : "lg:order-2"} mb-4 lg:mb-0`}
                  >
                    <div
                      className={`inline-block p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-md ${
                        isEven ? "lg:ml-auto" : ""
                      }`}
                    >
                      <span className="text-accent font-bold text-sm tracking-widest">
                        STEP {step.step}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex items-center gap-4 ${
                      isEven ? "lg:order-2" : "lg:order-1 lg:justify-end"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                      <DynamicIcon
                        name={step.icon}
                        size={28}
                        className="text-accent"
                      />
                    </div>
                    <div className="lg:hidden flex-1 h-px bg-white/20" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/our-infra"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-white transition-colors"
          >
            Tour Our Infrastructure
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </MotionSection>
  );
};

export default ManufacturingProcessSection;
