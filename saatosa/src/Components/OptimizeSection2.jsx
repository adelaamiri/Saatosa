import React from "react";
import { motion as Motion } from "framer-motion";

import person from "../assets/man2.avif";
import watchlist from "../assets/card22.png";
import { collaborationItems } from "../data/siteContent";

export default function OptimizeSection() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-20">
        <Motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mx-auto flex w-full max-w-lg justify-center"
        >
          <Motion.img
            src={person}
            alt="person"
            className="w-full rounded-3xl object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          <Motion.img
            src={watchlist}
            alt="watchlist"
            className="absolute -bottom-3 right-3 w-40 rounded-2xl shadow-2xl sm:-right-10 sm:w-56"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: -30, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.8,
            }}
            viewport={{ once: true }}
          />
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Collaboration Tools for Productivity
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-xl mb-10"
          >
            Collaboration Tools for Team Productivity are designed to enable
            seamless communication and cooperation among team members, matter
            where they are located. In a SaaS platform, these tools
          </Motion.p>

          <div className="space-y-6 mb-12">
            {collaborationItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <Icon className="mt-1 shrink-0 text-2xl text-blue-500" />
                  <p className="text-slate-600">{item.label}</p>
                </Motion.div>
              );
            })}
          </div>

          <Motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="min-h-12 rounded-xl bg-blue-600 px-8 py-4 font-medium text-white shadow-lg
                       transition-all duration-300 ease-out
                       hover:bg-black hover:text-white hover:scale-[1.04]"
          >
            Start 14-days freeTrial
          </Motion.button>
        </Motion.div>
      </div>
    </section>
  );
}
