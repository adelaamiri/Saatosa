import React from "react";
import { FiChevronUp } from "react-icons/fi";

import footerLogo from "../assets/logo.png";
import { footerColumns } from "../data/siteContent";

export default function Section12Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0B0F15] pt-14 text-white sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h4 className="mb-5 text-lg font-bold sm:mb-6 sm:text-xl">
              Get Our Newsletters
            </h4>

            <div className="w-full max-w-[560px]">
              <form className="flex flex-col overflow-hidden rounded-xl bg-white sm:flex-row sm:items-center">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 text-slate-700 outline-none"
                />
                <button
                  type="submit"
                  className="m-2 min-h-11 rounded-lg bg-[#2B7CFF] px-6 py-2 font-semibold text-white transition hover:bg-[#1f66d7]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div
              key={column.title}
              className={column.title === "Get In Touch" ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <h4 className="mb-5 text-base font-bold sm:mb-6 sm:text-lg">
                {column.title}
              </h4>
              <ul className="space-y-3 text-sm text-white/75 sm:text-base">
                {column.links.map((link) => (
                  <li
                    key={link}
                    className="leading-relaxed transition hover:text-white"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative flex flex-col items-center justify-between gap-6 py-10 sm:gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img src={footerLogo} alt="Saatosa" className="h-9 w-9" />
            <span className="text-2xl font-bold">Saatosa</span>
          </div>

          <button
            type="button"
            onClick={scrollTop}
            className="absolute -top-7 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-xl bg-[#2B7CFF] shadow-[0_22px_60px_rgba(43,124,255,0.35)] transition-all duration-300 hover:bg-white hover:text-[#2B7CFF] md:static md:translate-x-0"
            aria-label="Back to top"
          >
            <FiChevronUp className="text-2xl" />
          </button>

          <p className="text-center text-sm text-white/70 md:text-right">
            Copyright <span className="text-[#2B7CFF]">@2025</span> Saatosa All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
