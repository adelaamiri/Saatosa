import React from "react";

/* --------- Images (Local) --------- */
import invoiceImg from "../assets/img1.png";
import statsImg from "../assets/img2.png";

const FeaturesSection = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* -------- Left Card -------- */}
        <div className="bg-blue-500 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Scalable Solutions
            </h2>
            <p className="text-white/90 text-sm md:text-base max-w-md">
              Scalable Solutions Grow with Your Business refers the ability of
              SaaS platform to expand and adapt a changing needs.
            </p>
          </div>

          {/* White Card Image */}
          <div className="mt-8 flex justify-center">
            <img
              src={invoiceImg}
              alt="Invoice Statistics"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* -------- Right Card -------- */}
        <div className="bg-black text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Automated Workflow
            </h2>
            <p className="text-white/80 text-sm md:text-base max-w-md">
              Automated Workflows for Increased Efficiency refers the use of
              technology to streamline repetitive tasks.
            </p>
          </div>

          {/* White Card Image */}
          <div className="mt-8 flex justify-center">
            <img
              src={statsImg}
              alt="Website Stats Activity"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
