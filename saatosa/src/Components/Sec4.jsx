import React from "react";
import { solutionCards } from "../data/siteContent";

const FeaturesSection = () => {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-6 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {solutionCards.map((card) => (
          <article
            key={card.title}
            className={`${card.className} flex min-h-[460px] flex-col justify-between rounded-2xl p-6 sm:p-8`}
          >
            <div>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                {card.title}
              </h2>
              <p className={`${card.textClassName} max-w-md text-sm md:text-base`}>
                {card.description}
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
