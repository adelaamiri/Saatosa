import React from "react";
import { FaStar } from "react-icons/fa";

import mainImg from "../assets/section9.png"; // ✅ عکس اصلی (همان عکس اول که داری)
import profileImg from "../assets/profileSec9.png"; // ✅ عکس پروفایل (اضافه کن)

export default function Section9() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="relative overflow-hidden rounded-[28px] bg-[#031B2A] shadow-[0_30px_80px_rgba(0,0,0,0.18)] min-h-[520px]">
          {/* Left overlay shape */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-[58%]">
            <div className="absolute -left-40 top-24 h-[560px] w-[560px] rounded-full bg-white/10 blur-[0px]" />
            <div className="absolute left-10 top-28 h-[620px] w-[620px] rounded-full bg-white/5" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch p-8 sm:p-12">
            {/* LEFT */}
            <div className="relative z-10 flex flex-col justify-center text-white">
              {/* Profile row */}
              <div className="flex items-center gap-4 mb-10">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-white/15"
                />
                <div>
                  <h3 className="text-2xl font-bold leading-tight">
                    Dennis J. Lester
                  </h3>
                  <p className="text-white/75 font-medium">CEO &amp; Founder</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-xl sm:text-2xl leading-relaxed text-white/95 max-w-xl font-semibold">
                The financial reports and insights have given me a much clearer
                picture of my spending habits. I used to think I was budgeting
                properly, but this platform helped me identify areas where I
                could save more. It&apos;s a game-changer.
              </p>

              {/* Rating */}
              <div className="mt-12">
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-11 h-11 rounded-lg bg-[#1E78D8] flex items-center justify-center shadow-[0_10px_30px_rgba(30,120,216,0.25)]"
                    >
                      <FaStar className="text-white text-lg" />
                    </div>
                  ))}
                </div>

                <p className="text-white/90 text-xl font-bold">
                  4.7/5 on Trustp
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[620px]">
                {/* Image card */}
                <div className="relative rounded-[22px] overflow-hidden shadow-[0_35px_90px_rgba(0,0,0,0.35)]">
                  <img
                    src={mainImg}
                    alt="Workspace"
                    className="w-full h-[420px] sm:h-[460px] lg:h-[520px] object-cover"
                  />
                </div>

                {/* Slight top overlap like reference */}
                <div className="pointer-events-none absolute -top-8 right-6 h-10 w-[70%] rounded-[18px] bg-white/8 blur-[0.5px]" />
              </div>
            </div>
          </div>

          {/* Bottom rounded padding illusion */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[#031B2A]" />
        </div>
      </div>
    </section>
  );
}
