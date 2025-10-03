import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What types of coir products do you offer?",
    answer:
      "We manufacture and export a wide range of coir products including coir fibre (mattress, bristle, twisted, mixed), coir peat blocks (5kg, 650g, bulk bags), coco chips, grow bags, nursery products (coins, pellets, cubes), rubberised coir, coir liners, and baskets.",
  },
  {
    question: "Which countries do you export to?",
    answer:
      "Our products are exported to over 10+ countries including China, Spain, Poland, Netherlands, Australia, South America, USA, Korea, and Germany, serving the global horticulture, agriculture, and industrial markets.",
  },
  {
    question: "Do you provide customization for bulk orders?",
    answer:
      "Yes. We specialize in tailored B2B solutions, offering product customization in size, packaging, and specifications to meet the unique needs of each market.",
  },
  {
    question: "How do you ensure the quality of your coir products?",
    answer:
      "Every product goes through strict quality checks — from raw material selection to processing and final packaging. With ISO & international certifications, modern automation, and skilled teams, we guarantee consistency, durability, and eco-friendly excellence.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-purple-100 p-4 sm:p-8 rounded-3xl">
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
