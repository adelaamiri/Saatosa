import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

import person from "../assets/man2.avif";
import watchlist from "../assets/card22.png";

export default function OptimizeSection() {
  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* ================= LEFT (IMAGE + FLOATING CARD) ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Person Image */}
          <motion.img
            src={person}
            alt="person"
            className="rounded-3xl w-full max-w-lg object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          {/* Floating Card */}
          <motion.img
            src={watchlist}
            alt="watchlist"
            className="absolute -bottom-1 -right-10 w-56 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: -30, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.8,
            }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* ================= RIGHT (CONTENT) ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            Collaboration Tools for <br />
            Productivity
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-xl mb-10"
          >
            Collaboration Tools for Team Productivity are designed to enable
            seamless communication and cooperation among team members, matter
            where they are located. In a SaaS platform, these tools
          </motion.p>

          {/* ================= CHECK LIST ================= */}
          <div className="space-y-6 mb-12">
            {[
              "User-Friendly Interface for Effortless Navigation",
              "Customizable Dashboards Tailored to Your Needs",
              "Flexible Pricing Plans to Fit Any Budget",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <FiCheckCircle className="text-blue-500 text-2xl mt-1" />
                <p className="text-slate-600">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* ================= BUTTON ================= */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="px-8 py-4 rounded-xl bg-blue-600 text-white font-medium shadow-lg
                       transition-all duration-300 ease-out
                       hover:bg-black hover:text-white hover:scale-[1.04]"
          >
            Start 14-days freeTrial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
