import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import dashCircle from "../assets/sec11.png"; // کارت دایره‌ای بزرگ
import dashBar from "../assets/one.svg"; // کارت بارچارت کوچک (2h20m)

export default function Section11CTA() {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20">
        <div className="relative overflow-hidden rounded-[24px] min-h-[420px] lg:min-h-[420px] bg-gradient-to-r from-[#0B0F15] via-[#132C7A] to-[#2B7CFF] shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center p-6 sm:p-8 md:p-12">
            {/* Left content */}
            <div className="text-white text-center lg:text-left">
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 text-white/85 text-sm font-medium">
                Get Started
              </span>

              <h3 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Ready To Get 14 days of <br className="hidden sm:block" />
                free Trail!
              </h3>

              <p className="mt-4 sm:mt-5 text-white/75 max-w-md mx-auto lg:mx-0">
                The financial reports and insights have given me a much clearer
                picture of my spending habits.
              </p>

              <div className="mt-7 sm:mt-8 flex justify-center lg:justify-start">
                <button className="inline-flex items-center gap-2 bg-[#2B7CFF] hover:bg-white hover:text-[#2B7CFF] transition-all duration-300 px-6 py-3 rounded-xl font-semibold">
                  Start 14-days Free Trial <FiArrowUpRight />
                </button>
              </div>
            </div>

            {/* Right visuals */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* wrapper heights responsive */}
              <div className="relative w-full max-w-[520px] h-[280px] sm:h-[320px] md:h-[360px] lg:h-[330px]">
                {/* Big circle card */}
                <div className="absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 top-0 w-[240px] sm:w-[280px] md:w-[320px]">
                  <div className="rounded-[18px] bg-white shadow-[0_35px_90px_rgba(0,0,0,0.25)] overflow-hidden">
                    <img
                      src={dashCircle}
                      alt="Dashboard"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                {/* Small bar chart */}
                <div className="absolute left-1/2 -translate-x-1/2 lg:left-2 lg:translate-x-0 bottom-2 sm:bottom-4 w-[210px] sm:w-[240px] md:w-[260px]">
                  <div className="rounded-[14px] bg-white shadow-[0_35px_90px_rgba(0,0,0,0.22)] overflow-hidden">
                    <img
                      src={dashBar}
                      alt="Bar chart"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* subtle overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.14),transparent_55%)]" />
        </div>
      </div>
    </section>
  );
}
