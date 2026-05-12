import React from "react";
import { FaStar } from "react-icons/fa";

import mainImg from "../assets/section9.png";
import profileImg from "../assets/profileSec9.png";

export default function Section9() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-20">
        <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-[#031B2A] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
          <div className="relative grid grid-cols-1 items-stretch gap-10 p-6 sm:p-8 md:p-12 lg:grid-cols-2">
            <div className="relative z-10 flex flex-col justify-center text-white">
              <div className="mb-8 flex items-center gap-4 sm:mb-10">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="h-14 w-14 rounded-full object-cover ring-4 ring-white/15"
                />
                <div>
                  <h3 className="text-2xl font-bold leading-tight">
                    Dennis J. Lester
                  </h3>
                  <p className="font-medium text-white/75">CEO &amp; Founder</p>
                </div>
              </div>

              <p className="max-w-xl text-lg font-semibold leading-relaxed text-white/95 sm:text-xl lg:text-2xl">
                The financial reports and insights have given me a much clearer
                picture of my spending habits. I used to think I was budgeting
                properly, but this platform helped me identify areas where I
                could save more. It&apos;s a game-changer.
              </p>

              <div className="mt-10 sm:mt-12">
                <div className="mb-4 flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1E78D8] shadow-[0_10px_30px_rgba(30,120,216,0.25)] sm:h-11 sm:w-11"
                    >
                      <FaStar className="text-lg text-white" />
                    </div>
                  ))}
                </div>

                <p className="text-xl font-bold text-white/90">
                  4.7/5 on Trustp
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[620px]">
                <div className="relative overflow-hidden rounded-[22px] shadow-[0_35px_90px_rgba(0,0,0,0.35)]">
                  <img
                    src={mainImg}
                    alt="Workspace"
                    className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[520px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
