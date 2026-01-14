import React, { useState } from "react";
import { FiCheck, FiX, FiArrowUpRight } from "react-icons/fi";

const PricingSection = () => {
  const [billing, setBilling] = useState("monthly");

  const prices = {
    monthly: {
      regular: 15,
      standard: 29,
      premium: 49,
    },
    yearly: {
      regular: 150,
      standard: 290,
      premium: 490,
    },
  };

  return (
    <section className="relative w-full px-4 md:px-8 lg:px-16 py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#05080F] via-[#0B1230] to-[#2B3CFF]" />

      <div className="max-w-7xl mx-auto text-center text-white">
        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/10">
          Core Features
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Easy to Start, Easy to Scale
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 max-w-xl mx-auto mb-12">
          We take pride in our attention to detail and commitment to customer
          satisfaction.
        </p>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={billing === "monthly" ? "" : "opacity-60"}>
            Monthly
          </span>

          <button
            onClick={() =>
              setBilling(billing === "monthly" ? "yearly" : "monthly")
            }
            className="w-12 h-6 bg-blue-500 rounded-full relative transition"
          >
            <span
              className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                billing === "yearly" ? "translate-x-6" : ""
              }`}
            />
          </button>

          <span className={billing === "yearly" ? "" : "opacity-60"}>
            Yearly
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Regular */}
          <div
            className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg flex flex-col h-full text-left
"
          >
            <h3 className="text-lg font-semibold mb-2">Regular Plan</h3>

            <p className="text-4xl font-bold mb-1">
              ${prices[billing].regular}
              <span className="text-sm font-normal text-gray-500">
                {billing === "monthly" ? " / Per month" : " / Per year"}
              </span>
            </p>

            <p className="text-gray-500 mb-6">Free for personal use</p>

            <ul className="space-y-4 text-sm flex-grow">
              <li className="flex items-center gap-3">
                <FiCheck /> 2 Limited sites available
              </li>
              <li className="flex items-center gap-3">
                <FiCheck /> 1 GB storage per site
              </li>
              <li className="flex items-center gap-3">
                <FiCheck /> Up to 5 pages per site
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiX /> Free SSL for custom domain
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiX /> Connect custom domain
              </li>
            </ul>

            <button className="mt-8 w-full py-3 rounded-xl bg-black text-white font-medium flex items-center justify-center gap-2">
              Choose Plan <FiArrowUpRight />
            </button>
          </div>

          {/* Standard */}
          <div
            className="bg-blue-500 text-white rounded-2xl p-8 shadow-xl flex flex-col h-full text-left
"
          >
            <h3 className="text-lg font-semibold mb-2">Standard Plan</h3>

            <p className="text-4xl font-bold mb-1">
              ${prices[billing].standard}
              <span className="text-sm font-normal">
                {billing === "monthly" ? " / Per month" : " / Per year"}
              </span>
            </p>

            <p className="mb-6">For startups, billed monthly</p>

            <ul className="space-y-4 text-sm flex-grow">
              <li className="flex items-center gap-3">
                <FiCheck /> 5 Limited sites available
              </li>
              <li className="flex items-center gap-3">
                <FiCheck /> 5 GB storage per site
              </li>
              <li className="flex items-center gap-3">
                <FiCheck /> Up to 15 pages per site
              </li>
              <li className="flex items-center gap-3">
                <FiCheck /> Free SSL for custom domain
              </li>
              <li className="flex items-center gap-3 opacity-70">
                <FiX /> Connect custom domain
              </li>
            </ul>

            <button className="mt-8 w-full py-3 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-2">
              Choose Plan <FiArrowUpRight />
            </button>
          </div>

          {/* Premium */}
          <div
            className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg flex flex-col h-full text-left
"
          >
            <h3 className="text-lg font-semibold mb-2">Premium Plan</h3>

            <p className="text-4xl font-bold mb-1">
              ${prices[billing].premium}
              <span className="text-sm font-normal text-gray-500">
                {billing === "monthly" ? " / Per month" : " / Per year"}
              </span>
            </p>

            <p className="text-gray-500 mb-6">For scaling, billed monthly</p>

            <ul className="space-y-4 text-sm flex-grow">
              <li className="flex items-center gap-3">
                <FiCheck /> 10 Limited sites available
              </li>
              <li className="flex items-center gap-3">
                <FiCheck /> 10 GB storage per site
              </li>
              <li className="flex items-center gap-3">
                <FiCheck /> Up to 20 pages per site
              </li>
              <li className="flex items-center gap-3">
                <FiCheck /> Free SSL for custom domain
              </li>
              <li className="flex items-center gap-3">
                <FiCheck /> Connect custom domain
              </li>
            </ul>

            <button className="mt-8 w-full py-3 rounded-xl bg-black text-white font-medium flex items-center justify-center gap-2">
              Choose Plan <FiArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
