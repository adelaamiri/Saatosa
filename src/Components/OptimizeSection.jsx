import React from "react";
import { motion as Motion } from "framer-motion";

import person from "../assets/man.avif";
import watchlist from "../assets/card.png";
import { aiFeatures } from "../data/siteContent";

export default function OptimizeSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-20">
        <div>
          <Motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-2 rounded-lg bg-blue-100 text-gray-600 text-sm font-medium"
          >
            Advance Solutions
          </Motion.span>

          <Motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl"
          >
            Optimize Interaction with Advanced AI
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-xl mb-14"
          >
            AI CRM solutions offer a powerful enhance customer satisfaction and
            drive business growth making data-driven decisions.
          </Motion.p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <Motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="mb-4 text-3xl text-blue-500" />
                  <h4 className="mb-2 text-lg font-semibold">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500">{feature.description}</p>
                </Motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto flex h-full min-h-[420px] w-full max-w-lg justify-center sm:min-h-[520px]">
          <Motion.img
            src={person}
            alt="person"
            className="h-full w-full rounded-3xl object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          {/* Floating Card */}
          <Motion.img
            src={watchlist}
            alt="watchlist"
            className="absolute bottom-6 left-3 w-40 rounded-2xl shadow-2xl sm:bottom-10 sm:-left-10 sm:w-56"
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
