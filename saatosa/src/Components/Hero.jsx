import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPlay } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import {
  FaGoogle,
  FaAmazon,
  FaSlack,
  FaSpotify,
  FaFirefoxBrowser,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import card1 from "../assets/one.svg";
import card2 from "../assets/two.svg";
import card3 from "../assets/three.svg";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#05080F] via-[#0B1230] to-[#2B3CFF] overflow-hidden text-white">
      {/* ================= NAVBAR ================= */}
      <nav className="max-w-7xl mx-auto px-12 lg:px-20 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="font-semibold text-lg">Saatosa</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {["Pages", "About us", "Features", "Pricing"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-white transition-colors duration-300"
            >
              {item}
            </li>
          ))}
        </ul>

        <button className="flex items-center gap-2 bg-blue-500 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 px-5 py-2 rounded-lg text-sm font-medium">
          Contact <FiArrowUpRight />
        </button>
      </nav>

      {/* ================= HERO ================= */}
      <div className="max-w-7xl mx-auto px-12 lg:px-20 pt-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* LEFT */}
        <div>
          <span className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 text-sm">
            Introducing Saatosa
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Ultimate Guide to <br className="hidden sm:block" /> the Right Tool
          </h1>

          <p className="text-white/70 max-w-md mb-8">
            Transform the way you manage customer relationships with our
            AI-powered CRM platform.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button className="flex items-center gap-2 bg-blue-500 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 px-6 py-3 rounded-xl font-medium">
              Try 14-days Free Trial <FiArrowUpRight />
            </button>

            <button className="flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300">
              <FiPlay /> Watch Demo
            </button>

            <span className="flex items-center gap-1 text-sm text-white/70">
              <FaStar className="text-yellow-400" />
              4.8 (520+) Reviews
            </span>
          </div>
        </div>

        {/* ================= RIGHT DASHBOARD CARDS ================= */}
        <div className="relative w-full h-[600px] flex justify-center items-center">
          {/* Card 1 */}
          <motion.img
            src={card1}
            alt=""
            className="absolute left-0 top-16 w-[280px] rounded-2xl shadow-2xl"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Card 2 (Main / Center) */}
          <motion.img
            src={card2}
            alt=""
            className="relative z-20 w-[360px] rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Card 3 */}
          <motion.img
            src={card3}
            alt=""
            className="absolute right-0 bottom-16 w-[260px] rounded-2xl shadow-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* ================= BRANDS SLIDER ================= */}
      <div className="max-w-7xl mx-auto px-12 lg:px-20 mt-32 pb-20 overflow-hidden">
        <p className="text-center text-white/60 mb-12">
          Trusted by companies around the world
        </p>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-14 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            <Brand icon={<FaFirefoxBrowser />} name="Radiyal" />
            <Brand icon={<FaSpotify />} name="UTOSIA" />
            <Brand icon={<FaGoogle />} name="goldline" />
            <Brand icon={<FaSlack />} name="amara" />
            <Brand icon={<FaAmazon />} name="FOXHUB" />

            <Brand icon={<FaFirefoxBrowser />} name="Radiyal" />
            <Brand icon={<FaSpotify />} name="UTOSIA" />
            <Brand icon={<FaGoogle />} name="goldline" />
            <Brand icon={<FaSlack />} name="amara" />
            <Brand icon={<FaAmazon />} name="FOXHUB" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================= BRAND ITEM ================= */
function Brand({ icon, name }) {
  return (
    <div className="flex items-center gap-2 text-white/80 text-sm min-w-max">
      <span className="text-lg">{icon}</span>
      <span>{name}</span>
    </div>
  );
}
