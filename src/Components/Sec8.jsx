import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { faqs } from "../data/siteContent";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center sm:mb-14">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
            FAQs
          </span>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50"
            >
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                aria-expanded={activeIndex === index}
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>

                <Motion.span
                  animate={{ rotate: activeIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-gray-500"
                >
                  <FiChevronRight />
                </Motion.span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <Motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </Motion.div>
                )}
              </AnimatePresence>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
