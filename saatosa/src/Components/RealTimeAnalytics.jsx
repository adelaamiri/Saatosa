import React from "react";
import { motion as Motion } from "framer-motion";
import { Check } from "lucide-react";

import chartImg from "../assets/chart.png";
import { analyticsItems } from "../data/siteContent";

const RealTimeAnalytics = () => {
  return (
    <section className="w-full px-5 py-16 sm:px-6 md:px-8 lg:px-16">
      <Motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="
          mx-auto max-w-7xl
          rounded-2xl sm:rounded-3xl
          bg-gradient-to-b from-white via-blue-50 to-blue-100
          p-6 md:p-10 lg:p-14
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Real-Time Analytics
            </h2>

            <p className="mb-8 max-w-xl text-base text-gray-600 md:text-lg">
              Real-Time Analytics at Your Fingertips refers the access
              up-to-the-minute data and insights instantly.
            </p>

            <ul className="space-y-5">
              {analyticsItems.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  <span className="text-sm text-gray-800 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={chartImg}
              alt="Revenue Overview"
              className="
                w-full max-w-md md:max-w-lg
                rounded-2xl
                shadow-xl
              "
            />
          </div>
        </div>
      </Motion.div>
    </section>
  );
};

export default RealTimeAnalytics;
