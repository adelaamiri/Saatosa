import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiLayers } from "react-icons/fi";

import person from "../assets/man.avif";
import watchlist from "../assets/card.png";

export default function OptimizeSection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT ================= */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-2 rounded-lg bg-blue-100 text-gray-600 text-sm font-medium"
          >
            Advance Solutions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Optimize Interaction <br /> with Advanced AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-xl mb-14"
          >
            AI CRM solutions offer a powerful enhance customer satisfaction and
            drive business growth making data-driven decisions.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <FiClock className="text-blue-500 text-3xl mb-4" />
              <h4 className="font-semibold text-lg mb-2">Real-Time Insights</h4>
              <p className="text-slate-500">
                AI tools can generate high quality content optimize keywords.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FiLayers className="text-blue-500 text-3xl mb-4" />
              <h4 className="font-semibold text-lg mb-2">
                User-Friendly Experience
              </h4>
              <p className="text-slate-500">
                User-Friendly Experience focuses creating products.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative flex justify-center h-full min-h-[520px]">
          {/* Person Image */}
          <motion.img
            src={person}
            alt="person"
            className="rounded-3xl w-full max-w-lg h-full object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          {/* Floating Card */}
          <motion.img
            src={watchlist}
            alt="watchlist"
            className="absolute bottom-10 -left-10 w-56 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 1.5,
            }}
          />
        </div>
      </div>
    </section>
  );
}
