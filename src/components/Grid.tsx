"use client";
import { projects } from "@/data";
import Link from "next/link";
import Title from "./Title";
import Card from "./Card";
import { useTranslation } from "./Usetranslation";

const Grid = () => {
  const { t, isArabic, dir } = useTranslation();
  const localePrefix = isArabic ? "/ar" : "/en";

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-20 md:py-32 overflow-hidden bg-[#080810]"
      dir={dir}
    >
      {/* Floating Orbs matching Hero */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <Title
          subtitle={t.grid.subtitle}
          title1={t.grid.title1}
          title2={t.grid.title2}
          description={t.grid.description}
          title3={null}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 auto-rows-[400px] md:auto-rows-[450px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${index === 0 || index === 3 ? "md:col-span-8" : "md:col-span-4"} h-full`}
            >
              <Card project={project} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative mt-32 md:mt-48">
          {/* Creative Background Glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-12">
            <div className="space-y-4">
              <h3 className="font-syne text-4xl md:text-6xl font-extrabold -tighter text-white leading-none">
                {t.grid.cta.heading}
              </h3>
              <p className="text-gray-400 text-lg max-w-xl mx-auto font-medium">
                {t.grid.cta.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link
                href={`${localePrefix}#contact`}
                className="group/cta relative inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-white text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95"
              >
                <span className="font-syne text-xl font-black uppercase -tight">
                  {t.grid.cta.startProject}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform group-hover/cta:translate-x-1">
                  <svg
                    className={`h-5 w-5 ${isArabic ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </Link>

              <Link
                href={`${localePrefix}#about`}
                className="font-syne text-lg font-bold text-gray-400 transition-colors hover:text-white flex items-center gap-2 group/sec"
              >
                {t.grid.cta.viewMore}
                <span className="h-px w-0 bg-white transition-all group-hover/sec:w-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
};

export default Grid;
