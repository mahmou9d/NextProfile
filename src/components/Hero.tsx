"use client";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import { useContext } from "react";
import { LocaleContext } from "./LocaleContext";
import Link from "next/link";
import Title from "./Title";

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

        <Title
          subtitle={
            locale === "EN" ? "Cutting-Edge Solutions" : "حلول برمجية متطورة"
          }
          title1={locale === "EN" ? "We Build" : "نقوم ببناء"}
          title2={locale === "EN" ? "Next-Level" : "منصات من"}
          title3={locale === "EN" ? "Platforms" : "مستوى جديد"}
          description={
            locale === "EN"
              ? "Modern web, mobile, and cloud solutions designed to scale. Professional websites built to increase your visibility, sales, and customer trust by 180%"
              : "حلول ويب وموبايل وسحابة حديثة مصممة للتوسع. مواقع احترافية مصممة لزيادة ظهورك ومبيعاتك وثقة العملاء بنسبة 180%"
          }
        />
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
