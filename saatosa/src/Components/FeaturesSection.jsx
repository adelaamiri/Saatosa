import React from "react";
import { motion } from "framer-motion";

import card1 from "../assets/sec1.png"; // کارت سمت چپ
import card2 from "../assets/sec2.png"; // کارت وسط
import card3 from "../assets/sec4.png"; // کارت راست

/* ================= TEXT ANIMATION (TOP → DOWN) ================= */
const fadeDown = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* ================= CARD ANIMATION (BOTTOM → UP) ================= */
const fadeUpCard = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay: i * 0.15, // حرکت منظم کارت‌ها
    },
  }),
};

export default function FeaturesSection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block mb-6 px-4 py-2 rounded-lg bg-blue-100 text-gray-600 text-sm font-medium"
        >
          Core Features
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
        >
          Advanced Security Features
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-slate-500 mb-20"
        >
          SaaS (Software as a Service) website provides businesses with
          cloud-based solutions that streamline operations, enhance
          productivity, and reduce the need.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={fadeUpCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0B0F15] rounded-3xl p-10 h-[460px] flex items-center justify-center"
          >
            <img
              src={card1}
              alt="feature"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={fadeUpCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#EDF2F7] rounded-3xl p-10 h-[460px] flex items-center justify-center"
          >
            <img
              src={card2}
              alt="feature"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={fadeUpCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#3498DB] rounded-3xl p-10 h-[460px] flex items-center justify-center"
          >
            <img
              src={card3}
              alt="feature"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
