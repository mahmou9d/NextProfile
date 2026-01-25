"use client";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import { useContext } from "react";
import { LocaleContext } from "./LocaleContext";
import Link from "next/link";

const Hero = () => {
  const { locale } = useContext(LocaleContext);
  const buttons = [
    {
      href: "#services",
      title: locale === "AR" ? "استكشف خدماتنا" : "Explore Our Services",
      icon: <FaLocationArrow className="w-5 h-5" />,
      variant: "primary",
    },
    {
      href: "#contact",
      title:
        locale === "AR"
          ? "ابنِ موقعك الاحترافي الآن"
          : "Build Your Professional Website Today",
      icon: <FaEnvelope className="w-5 h-5" />,
      variant: "secondary",
    },
  ];

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
      style={{
        direction: locale === "AR" ? "rtl" : "ltr",
      }}
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge - Same Style as Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-pink-500/10 border border-blue-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {locale === "EN"
                  ? "Cutting-Edge Solutions"
                  : "حلول برمجية متطورة"}
              </span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500" />
          </div>
        </div>

        {/* Main Title - Grid Style */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight mb-6">
          <span className="gradient-text inline-block bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent">
            {locale === "EN" ? "We Build" : "نقوم ببناء"}
          </span>
          <br />
          <span className="gradient-text-x inline-block bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {locale === "EN" ? "Next-Level" : "منصات من"}
          </span>
          <br />
          <span className="gradient-text inline-block bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent">
            {locale === "EN" ? "Platforms" : "مستوى جديد"}
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          {locale === "EN"
            ? "Modern web, mobile, and cloud solutions designed to scale. Professional websites built to increase your visibility, sales, and customer trust by 180%"
            : "حلول ويب وموبايل وسحابة حديثة مصممة للتوسع. مواقع احترافية مصممة لزيادة ظهورك ومبيعاتك وثقة العملاء بنسبة 180%"}
        </p>

        {/* Decorative Line - Same as Grid */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="pulse-line h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <div className="relative">
            <div className="absolute inset-0 animate-ping">
              <div className="w-4 h-4 rounded-full bg-blue-500/50" />
            </div>
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500" />
          </div>
          <div className="pulse-line h-1 w-20 rounded-full bg-gradient-to-l from-transparent via-pink-500 to-transparent" />
        </div>

        {/* Stats - Grid Style */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {[
            { value: "500+", label: locale === "EN" ? "Projects" : "مشروع" },
            { value: "98%", label: locale === "EN" ? "Satisfaction" : "رضا" },
            { value: "24/7", label: locale === "EN" ? "Support" : "دعم" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 min-w-[100px] px-6 py-4 rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-2xl border border-gray-700/50 hover:border-blue-500/60 transition-all duration-300"
            >
              <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons - Grid Style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          {buttons.map((btn, idx) => (
            <Link
              key={idx}
              href={btn.href}
              className={`group relative inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 w-full sm:w-auto ${
                btn.variant === "primary"
                  ? "bg-gradient-to-r from-blue-600 to-pink-600 text-white shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
                  : "bg-gray-800/50 border border-gray-700/50 text-white hover:border-blue-500/50 hover:bg-gray-800 transform hover:scale-105"
              }`}
            >
              {btn.variant === "primary" && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 rounded-xl" />
              )}
              <span className="relative z-10">{btn.title}</span>
              <span
                className={`relative z-10 transition-transform duration-300 ${
                  locale === "AR"
                    ? "group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              >
                {btn.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
};

export default Hero;
