import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { billingPrices, priceIcons, pricingPlans } from "../data/siteContent";

const PricingSection = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative w-full overflow-hidden px-5 py-16 sm:px-6 md:px-8 lg:px-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#05080F] via-[#0B1230] to-[#2B3CFF]" />

      <div className="mx-auto max-w-7xl text-center text-white">
        <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm">
          Core Features
        </span>

        <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Easy to Start, Easy to Scale
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-gray-300 sm:mb-12">
          We take pride in our attention to detail and commitment to customer
          satisfaction.
        </p>

        <div className="mb-12 flex items-center justify-center gap-4 sm:mb-16">
          <span className={billing === "monthly" ? "" : "opacity-60"}>
            Monthly
          </span>

          <button
            type="button"
            aria-label="Toggle billing period"
            aria-pressed={billing === "yearly"}
            onClick={() =>
              setBilling((current) =>
                current === "monthly" ? "yearly" : "monthly"
              )
            }
            className="relative h-6 w-12 rounded-full bg-blue-500 transition"
          >
            <span
              className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                billing === "yearly" ? "translate-x-6" : ""
              }`}
            />
          </button>

          <span className={billing === "yearly" ? "" : "opacity-60"}>
            Yearly
          </span>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PlanCard
              key={plan.key}
              billing={billing}
              price={billingPrices[billing][plan.key]}
              plan={plan}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function PlanCard({ billing, price, plan }) {
  const cardClasses = plan.featured
    ? "bg-blue-500 text-white shadow-xl"
    : "bg-white text-gray-900 shadow-lg";
  const buttonClasses = plan.featured
    ? "bg-white text-black font-semibold"
    : "bg-black text-white font-medium";

  return (
    <article
      className={`${cardClasses} flex h-full flex-col rounded-2xl p-6 text-left sm:p-8`}
    >
      <h3 className="mb-2 text-lg font-semibold">{plan.name}</h3>

      <p className="mb-1 text-4xl font-bold">
        ${price}
        <span
          className={`text-sm font-normal ${
            plan.featured ? "text-white/85" : "text-gray-500"
          }`}
        >
          {billing === "monthly" ? " / Per month" : " / Per year"}
        </span>
      </p>

      <p className={`mb-6 ${plan.featured ? "text-white/85" : "text-gray-500"}`}>
        {plan.description}
      </p>

      <ul className="flex-grow space-y-4 text-sm">
        {plan.features.map((feature) => {
          const Icon = feature.included
            ? priceIcons.included
            : priceIcons.excluded;

          return (
            <li
              key={feature.label}
              className={`flex items-center gap-3 ${
                feature.included
                  ? ""
                  : plan.featured
                    ? "text-white/70"
                    : "text-gray-400"
              }`}
            >
              <Icon className="shrink-0" />
              <span>{feature.label}</span>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className={`mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-4 py-3 ${buttonClasses}`}
      >
        Choose Plan <FiArrowUpRight />
      </button>
    </article>
  );
}

export default PricingSection;
