import React from "react";

import blog1 from "../assets/sec101.png"; // عکس لپتاپ
import blog2 from "../assets/sec102.png"; // عکس میز/قهوه

export default function Section10Blog() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-100 text-blue-700 text-sm font-medium">
            Blog Insight
          </span>

          <h2 className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            SaaS is Revolutionizing Modern <br className="hidden md:block" />
            Business Operations
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1 */}
          <article className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col sm:flex-row gap-5 sm:gap-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] hover:shadow-[0_28px_70px_rgba(15,23,42,0.10)] transition-shadow duration-300">
            {/* Image */}
            <div className="w-full sm:w-[220px]">
              <div className="rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={blog1}
                  alt="Blog"
                  className="w-full h-[190px] sm:h-[160px] object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col justify-center text-left sm:text-left">
              <span className="inline-flex w-fit px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-medium">
                Software
              </span>

              <h3 className="mt-4 text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug">
                Scaling Your Business to with <br />
                SaaS Guide Growth and <br />
                Flexibility
              </h3>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 flex flex-col sm:flex-row gap-5 sm:gap-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] hover:shadow-[0_28px_70px_rgba(15,23,42,0.10)] transition-shadow duration-300">
            {/* Image */}
            <div className="w-full sm:w-[220px]">
              <div className="rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={blog2}
                  alt="Blog"
                  className="w-full h-[190px] sm:h-[160px] object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col justify-center text-left sm:text-left">
              <span className="inline-flex w-fit px-3 py-1 rounded-md bg-blue-100 text-blue-700 text-xs font-medium">
                Software
              </span>

              <h3 className="mt-4 text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug">
                How SaaS Solutions Are <br />
                Transforming Business <br />
                Efficiency in 2024
              </h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
