"use client";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import Title from "./Title";
import { useTranslation } from "./Usetranslation";




const Hero = () => {
  const { t, isArabic, dir } = useTranslation();
  const localePrefix = isArabic ? "/ar" : "/en";

  const stats = [
    { value: "50+", label: t.hero.stats.projects },
    { value: "98%", label: t.hero.stats.satisfaction },
    { value: "24/7", label: t.hero.stats.support },
  ];

  const buttons = [
    {
      href: `${localePrefix}#services`,
      title: t.hero.buttons.exploreServices,
      icon: <FaLocationArrow className="w-4 h-4" />,
      variant: "primary" as const,
    },
    {
      href: `${localePrefix}#contact`,
      title: t.hero.buttons.buildWebsite,
      icon: <FaEnvelope className="w-4 h-4" />,
      variant: "secondary" as const,
    },
  ];

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white"
      dir={dir}
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title Section */}
        <Title
          subtitle={t.hero.subtitle}
          title1={t.hero.title1}
          title2={t.hero.title2}
          title3={t.hero.title3}
          description={t.hero.description}
        />

        {/* Stats - Clean Grid Style */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 px-6 py-3"
            >
              <span className="text-3xl md:text-4xl font-bold text-gray-900">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {buttons.map((btn, idx) => (
            <Link
              key={idx}
              href={btn.href}
              className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                btn.variant === "primary"
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/25"
                  : "border border-gray-300 text-gray-900 hover:border-emerald-600 hover:text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              <span>{btn.title}</span>
              {btn.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </section>
  );
};

export default Hero;
