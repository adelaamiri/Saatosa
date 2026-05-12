import React from "react";
import { blogPosts } from "../data/siteContent";

export default function Section10Blog() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-20">
        <div className="text-center">
          <span className="inline-flex items-center justify-center rounded-lg bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Blog Insight
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:mt-6 sm:text-4xl md:text-5xl">
            SaaS is Revolutionizing Modern Business Operations
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:gap-8 lg:mt-16 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(15,23,42,0.10)] sm:flex-row sm:gap-6 sm:p-6 md:p-7"
            >
              <div className="w-full sm:w-[220px] sm:shrink-0">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[190px] w-full object-cover sm:h-[160px]"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center text-left">
                <span className="inline-flex w-fit rounded-md bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  {post.category}
                </span>

                <h3 className="mt-4 text-base font-bold leading-snug text-slate-900 sm:text-lg md:text-xl">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
