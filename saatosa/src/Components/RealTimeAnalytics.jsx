import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

/* Local Image */
import chartImg from "../assets/chart.png";

const RealTimeAnalytics = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="
          max-w-7xl mx-auto
          rounded-3xl
          bg-gradient-to-b from-white via-blue-50 to-blue-100
          p-6 md:p-10 lg:p-14
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* -------- Left Content -------- */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real-Time Analytics
            </h2>

            <p className="text-gray-600 text-base md:text-lg max-w-xl mb-8">
              Real-Time Analytics at Your Fingertips refers the access
              up-to-the-minute data and insights instantly.
            </p>

            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <span className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                  <Check className="text-white w-4 h-4" />
                </span>
                <span className="text-gray-800 text-sm md:text-base">
                  Seamless Integration with Existing Tools
                </span>
              </li>

              <li className="flex items-center gap-4">
                <span className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
                  <Check className="text-white w-4 h-4" />
                </span>
                <span className="text-gray-800 text-sm md:text-base">
                  User-Friendly Interface for Navigation
                </span>
              </li>
            </ul>
          </div>

          {/* -------- Right Image -------- */}
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
      </motion.div>
    </section>
  );
};

export default RealTimeAnalytics;
