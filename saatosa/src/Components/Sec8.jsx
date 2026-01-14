import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does your pricing work?",
    answer:
      "Our pricing is subscription-based, offering different plans depending on the features and services you need. You can choose monthly or yearly subscriptions, and custom plans are also available.",
  },
  { question: "Can I integrate your software with other tools?" },
  { question: "Is my data secure on your platform?" },
  { question: "Do you offer a free trial?" },
  { question: "How often is the software updated?" },
  { question: "What kind of customer support do you offer?" },
  { question: "Can I cancel my subscription anytime?" },
  { question: "Is there a limit to the number of users?" },
  { question: "How do I get started with your platform?" },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 text-sm font-medium bg-blue-100 text-blue-600 rounded-full mb-4">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-gray-900 font-medium">
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: activeIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500"
                >
                  ▶
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && faq.answer && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="px-5 pb-5 text-gray-600 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
