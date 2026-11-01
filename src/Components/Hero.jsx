import React from "react";
import { motion as Motion } from "framer-motion";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

import logo from "../assets/logo.png";
import card1 from "../assets/one.svg";
import card2 from "../assets/two.svg";
import card3 from "../assets/three.svg";
import { brands, navLinks } from "../data/siteContent";

export default function Hero() {
  const marqueeBrands = [...brands, ...brands];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#05080F] via-[#0B1230] to-[#2B3CFF] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-6 lg:px-20">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Saatosa" className="h-8 w-8 shrink-0" />
          <span className="text-lg font-semibold">Saatosa</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {navLinks.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-white transition-colors duration-300"
            >
              {item}
            </li>
          ))}
        </ul>

        <button className="hidden min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-blue-600 sm:inline-flex">
          <span>Contact</span>
          <FiArrowUpRight />
        </button>
      </nav>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-5 pt-12 sm:px-6 md:pt-16 lg:grid-cols-2 lg:gap-20 lg:px-20 lg:pt-20">
        <div className="w-full max-w-[20rem] min-w-0 sm:max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1 text-sm">
            Introducing Saatosa
          </span>

          <h1 className="mb-6 max-w-full text-3xl font-bold leading-tight sm:text-5xl xl:text-6xl">
            Ultimate Guide to the Right Tool
          </h1>

          <p className="mb-8 max-w-[20rem] text-white/70 sm:max-w-md">
            Transform the way you manage customer relationships with our
            AI-powered CRM platform.
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <button className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 font-medium text-white transition-all duration-300 hover:bg-white hover:text-blue-600 sm:px-6">
              Try 14-days Free Trial <FiArrowUpRight />
            </button>

            <button className="inline-flex min-h-11 items-center gap-2 text-white/80 transition-all duration-300 hover:text-white">
              <FiPlay /> Watch Demo
            </button>

            <span className="inline-flex items-center gap-1 text-sm text-white/70">
              <FaStar className="text-yellow-400" />
              4.8 (520+) Reviews
            </span>
          </div>
        </div>

        <div className="relative mx-auto flex h-[340px] w-full max-w-[620px] items-center justify-center sm:h-[460px] lg:h-[560px]">
          <Motion.img
            src={card1}
            alt="Dashboard summary card"
            className="absolute left-0 top-8 w-[46%] max-w-[280px] rounded-2xl shadow-2xl sm:top-16"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <Motion.img
            src={card2}
            alt="CRM analytics dashboard"
            className="relative z-20 w-[58%] max-w-[360px] rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <Motion.img
            src={card3}
            alt="Growth insights card"
            className="absolute bottom-8 right-0 w-[43%] max-w-[260px] rounded-2xl shadow-xl sm:bottom-16"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl overflow-hidden px-5 pb-16 sm:px-6 lg:mt-20 lg:px-20 lg:pb-20">
        <p className="mb-10 text-center text-white/60 sm:mb-12">
          Trusted by companies around the world
        </p>

        <div className="relative w-full overflow-hidden">
          <Motion.div
            className="flex gap-14 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            {marqueeBrands.map((brand, index) => (
              <Brand key={`${brand.name}-${index}`} {...brand} />
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

function Brand({ icon, name }) {
  const Icon = icon;

  return (
    <div className="flex min-w-max items-center gap-2 text-sm text-white/80">
      <Icon className="text-lg" />
      <span>{name}</span>
    </div>
  );
}
