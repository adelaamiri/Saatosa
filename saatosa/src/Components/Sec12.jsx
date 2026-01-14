import React from "react";
import { FiChevronUp } from "react-icons/fi";

import footerLogo from "../assets/logo.png"; // لوگوی Saatosa

export default function Section12Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0B0F15] text-white pt-14 sm:pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-14 border-b border-white/10">
          {/* Newsletter */}
          <div className="lg:col-span-5">
            <h4 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6">
              Get Our Newsletters
            </h4>

            <div className="w-full max-w-[560px]">
              <div className="flex flex-col sm:flex-row sm:items-center bg-white rounded-xl overflow-hidden">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 text-slate-700 outline-none"
                />
                <button className="m-2 px-6 py-2 rounded-lg bg-[#2B7CFF] text-white font-semibold hover:bg-[#1f66d7] transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Link */}
          <div className="lg:col-span-2">
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">
              Quick Link
            </h4>
            <ul className="space-y-3 text-white/75 text-sm sm:text-base">
              <li className="hover:text-white transition cursor-pointer">
                Features
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Pricing Plan
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>
              <li className="hover:text-white transition cursor-pointer">
                404
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">
              Resources
            </h4>
            <ul className="space-y-3 text-white/75 text-sm sm:text-base">
              <li className="hover:text-white transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Changelog
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Blog
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Terms &amp; Condition
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div className="lg:col-span-3">
            <h4 className="text-base sm:text-lg font-bold mb-5 sm:mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-white/75 text-sm sm:text-base">
              <li className="hover:text-white transition cursor-pointer">
                hello@pentaclay.com
              </li>
              <li className="leading-relaxed">
                55 main Street, 2nd blockMelbourne, Australia
              </li>
              <li className="hover:text-white transition cursor-pointer">
                +000 (123) 456 88
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 py-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={footerLogo} alt="Saatosa" className="w-9 h-9" />
            <span className="text-2xl font-bold">Saatosa</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollTop}
            className="absolute left-1/2 -translate-x-1/2 -top-7 md:top-auto md:static md:translate-x-0 w-12 h-12 rounded-xl bg-[#2B7CFF] flex items-center justify-center shadow-[0_22px_60px_rgba(43,124,255,0.35)] hover:bg-white hover:text-[#2B7CFF] transition-all duration-300"
            aria-label="Back to top"
          >
            <FiChevronUp className="text-2xl" />
          </button>

          {/* Copyright */}
          <p className="text-white/70 text-sm text-center md:text-right">
            Copyright <span className="text-[#2B7CFF]">@2025</span> Saatosa All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
