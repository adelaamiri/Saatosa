import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import dashCircle from "../assets/sec11.png";
import dashBar from "../assets/one.svg";

export default function Section11CTA() {
  return (
    <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-20">
        <div className="relative min-h-[420px] overflow-hidden rounded-[24px] bg-gradient-to-r from-[#0B0F15] via-[#132C7A] to-[#2B7CFF] shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
          <div className="relative z-10 grid grid-cols-1 items-center gap-10 p-6 sm:p-8 md:p-12 lg:grid-cols-2 lg:gap-14">
            <div className="text-center text-white lg:text-left">
              <span className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white/85">
                Get Started
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-tight sm:mt-6 sm:text-3xl md:text-4xl">
                Ready To Get 14 days of free Trial!
              </h3>

              <p className="mx-auto mt-4 max-w-md text-white/75 sm:mt-5 lg:mx-0">
                The financial reports and insights have given me a much clearer
                picture of my spending habits.
              </p>

              <div className="mt-7 flex justify-center sm:mt-8 lg:justify-start">
                <button className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#2B7CFF] px-6 py-3 font-semibold transition-all duration-300 hover:bg-white hover:text-[#2B7CFF]">
                  Start 14-days Free Trial <FiArrowUpRight />
                </button>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative h-[280px] w-full max-w-[520px] sm:h-[320px] md:h-[360px] lg:h-[330px]">
                <div className="absolute right-1/2 top-0 w-[230px] translate-x-1/2 sm:w-[280px] md:w-[320px] lg:right-0 lg:translate-x-0">
                  <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_35px_90px_rgba(0,0,0,0.25)]">
                    <img
                      src={dashCircle}
                      alt="Dashboard"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute bottom-2 left-1/2 w-[200px] -translate-x-1/2 sm:bottom-4 sm:w-[240px] md:w-[260px] lg:left-2 lg:translate-x-0">
                  <div className="overflow-hidden rounded-[14px] bg-white shadow-[0_35px_90px_rgba(0,0,0,0.22)]">
                    <img
                      src={dashBar}
                      alt="Bar chart"
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.14),transparent_55%)]" />
        </div>
      </div>
    </section>
  );
}
