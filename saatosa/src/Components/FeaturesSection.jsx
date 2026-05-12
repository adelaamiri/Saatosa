import React from "react";
import { motion as Motion } from "framer-motion";
import { featureCards } from "../data/siteContent";

const fadeDown = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeUpCard = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
};

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-20">
        <Motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 inline-block rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-gray-600"
        >
          Core Features
        </Motion.div>

        <Motion.h2
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl"
        >
          Advanced Security Features
        </Motion.h2>

        <Motion.p
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-slate-500 sm:mb-16 lg:mb-20"
        >
          SaaS (Software as a Service) website provides businesses with
          cloud-based solutions that streamline operations, enhance
          productivity, and reduce the need.
        </Motion.p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featureCards.map((card, index) => (
            <Motion.div
              key={card.alt}
              custom={index}
              variants={fadeUpCard}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`${card.className} flex min-h-[320px] items-center justify-center rounded-3xl p-6 sm:min-h-[380px] sm:p-8 lg:min-h-[460px] lg:p-10`}
            >
              <img
                src={card.image}
                alt={card.alt}
                className="max-h-full max-w-full object-contain"
              />
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
