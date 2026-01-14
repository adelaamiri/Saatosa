import React from "react";
import { CheckCircle, Star, TrendingUp } from "lucide-react"; // یا از آیکون‌های دیگر استفاده کنید

const CollaborationCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ستون سمت چپ - محتوا */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Collaboration Tools for
                <span className="text-blue-600 block">Productivity</span>
              </h1>

              <p className="text-gray-600 text-lg mb-8">
                Collaboration Tools for Team Productivity are designed to enable
                seamless communication and cooperation among team members, no
                matter where they are located. In a SaaS platform, these tools
                empower teams to work efficiently.
              </p>
            </div>

            {/* لیست ویژگی‌ها */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    User-Friendly Interface
                  </h3>
                  <p className="text-gray-600">
                    Effortless Navigation and intuitive design
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Customizable Dashboards
                  </h3>
                  <p className="text-gray-600">
                    Tailored to Your Needs and preferences
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Flexible Pricing Plans
                  </h3>
                  <p className="text-gray-600">
                    To Fit Any Budget and team size
                  </p>
                </div>
              </div>
            </div>

            {/* دکمه‌ها */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl text-lg transition duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                Start 14-days Free Trial
              </button>
              <div className="flex items-center gap-2 text-gray-500">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.8</span>
                <span>(563k+ Reviews)</span>
              </div>
            </div>
          </div>

          {/* ستون سمت راست - امتیاز */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="flex flex-col items-center justify-center h-full">
              {/* هدر بخش امتیاز */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-blue-500/30 px-4 py-2 rounded-full mb-6">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">Performance Score</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Riz's Score</h2>
              </div>

              {/* دایره امتیاز */}
              <div className="relative mb-10">
                <div className="w-64 h-64 rounded-full border-8 border-blue-400/30 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full border-8 border-white flex flex-col items-center justify-center">
                    <span className="text-6xl font-bold">70</span>
                    <span className="text-blue-200">out of 100</span>
                  </div>
                </div>

                {/* نشانگر دایره */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full"></div>
              </div>

              {/* بخش نکات بهبود */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">
                  How to Improve Your Score
                </h3>
                <div className="space-y-4 text-left max-w-md mx-auto">
                  <div className="flex items-center gap-3 bg-blue-500/20 p-4 rounded-xl">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span>Increase team engagement with weekly meetings</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-500/20 p-4 rounded-xl">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span>Utilize all collaboration features available</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-500/20 p-4 rounded-xl">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span>Complete onboarding tutorial for new members</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationCard;
