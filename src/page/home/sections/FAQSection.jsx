import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We provide end-to-end agricultural solutions including soil testing, crop consultation, and customized seed recommendations."
  },
  {
    question: "How can I contact your support team?",
    answer:
      "You can reach us through our contact form or call our support line between 9AM–6PM on weekdays."
  },
  {
    question: "Do you offer bulk purchase discounts?",
    answer:
      "Yes, we offer discounts for bulk orders. Contact our sales team for custom pricing."
  },
  {
    question: "Where are your offices located?",
    answer:
      "Our headquarters is located in Tamil Nadu, and we have regional offices across South India."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-purple-100 p-8 rounded-3xl">
      <div>
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer transition duration-300 hover:shadow-lg"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-orange-600" />
                ) : (
                  <ChevronDown className="text-orange-600" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
