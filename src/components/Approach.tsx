"use client";
import React, { useContext } from "react";
import { LocaleContext } from "./LocaleContext";
import Title from "./Title";

const Approach = () => {
  const { locale } = useContext(LocaleContext);
  const isAr = locale === "AR";

  // Data for the cards
  const cards = [
    {
      title: isAr ? "التخطيط والاستراتيجية" : "Planning & Strategy",
      description: isAr
        ? "نحدد أهداف موقعك وجمهورك ونرتب المحتوى والهيكل لضمان أساس قوي."
        : "We define your website goals, audience, and information structure.",
      iconText: isAr ? "تخطيط" : "Planning",
      number: "01",
    },
    {
      title: isAr ? "التطوير والتحديث المستمر" : "Development & Updates",
      description: isAr
        ? "نحوّل التصميم إلى كود تفاعلي ونعطيك تحديثات مستمرة طوال العمل."
        : "We convert designs into interactive code with continuous updates.",
      iconText: isAr ? "تطوير" : "Development",
      number: "02",
    },
    {
      title: isAr ? "الاختبار والإطلاق" : "Testing & Launch",
      description: isAr
        ? "نختبر الموقع ونحسّن الأداء ونطلقه بأفضل جودة وتجربة للمستخدم."
        : "We test, optimize, and launch your website for best performance.",
      iconText: isAr ? "إطلاق" : "Launch",
      number: "03",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}

        <Title
          subtitle={isAr ? "كيف نعمل" : "How We Work"}
          title1={isAr ? "منهجيتي" : "My"}
          title2={isAr ? "في العمل" : "Approach"}
          description={null}
          title3={null}
        />
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <article key={index} className="group relative">
              {/* Card Container */}
              <div className="relative h-full min-h-[450px] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 border border-gray-700/50 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Top Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white font-black text-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-3  duration-300">
                      {card.number}
                    </div>
                  </div>
                </div>

                {/* Content - Default State */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 group-hover:opacity-0">
                  <div className="relative">
                    {/* Icon Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-pink-500/30 rounded-full" />
                    {/* Icon */}
                    <div className="relative rounded-full px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
                      <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        {card.iconText}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content - Hover State */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 space-y-6">
                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                      {card.title}
                    </span>
                  </h3>

                  {/* Divider */}
                  <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-pink-500" />

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                    {card.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="mt-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Corner Accent */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-500/10 via-pink-500/5 to-transparent rounded-tl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
};

export default Approach;
