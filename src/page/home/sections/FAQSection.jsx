import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../../../components/ui/SectionHeading";
import { MotionSection } from "../../../components/ui/Motion";

import { faqData } from "../../../seo/faqData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <MotionSection id="faq" className="section-padding bg-white dark:bg-gray-950">
      <div className="section-container max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick answers for international buyers considering Lumicos as their coir export partner."
        />

        <div className="space-y-3 -mt-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? "border-primary/30 bg-beige-50 dark:bg-gray-900"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
                }`}
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
};

export default FAQSection;
