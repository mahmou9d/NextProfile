"use client";
import { useContext, useRef, useEffect } from "react";
import { projects } from "@/data";
import { LocaleContext } from "./LocaleContext";
import Image from "next/image";
import Link from "next/link";

const Grid = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
      dir={locale === "AR" ? "rtl" : "ltr"}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20 md:mb-28 space-y-6">
          {/* Subtitle with Badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-pink-500/10 border border-blue-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {locale === "AR" ? "أعمالنا المميزة" : "Featured Work"}
              </span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500" />
          </div>

          {/* Main Title */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            <span className="gradient-text inline-block bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent">
              {locale === "AR" ? "مشاريع" : "Premium"}
            </span>
            <br />
            <span className="gradient-text-x inline-block bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {locale === "AR" ? "احترافية" : "Projects"}
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {locale === "AR"
              ? "اكتشف مجموعة من المشاريع المبتكرة التي صممناها وطورناها باحترافية عالية"
              : "Discover a collection of innovative projects designed and developed with high professionalism"}
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 pt-6">
            <div className="pulse-line h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="relative">
              <div className="absolute inset-0 animate-ping">
                <div className="w-4 h-4 rounded-full bg-blue-500/50" />
              </div>
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500" />
            </div>
            <div className="pulse-line h-1 w-20 rounded-full bg-gradient-to-l from-transparent via-pink-500 to-transparent" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={` group relative ${
                index % 3 === 0 ? "lg:col-span-1" : ""
              }`}
            >
              {/* Card Container */}
              <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-2xl border border-gray-700/50 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="border-gradient absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-blue-500/20" />
                </div>

                {/* Top Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Section */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <Image
                    src={project.img}
                    alt={locale === "AR" ? project.title.AR : project.title.EN}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

                  {/* Project Number Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white font-black text-2xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="px-4 py-2 rounded-full bg-green-500/20 border border-green-500/50 backdrop-blur-md">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="text-xs font-bold text-green-300 uppercase tracking-wider">
                          {locale === "AR" ? "متاح" : "Live"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-6 md:p-8 space-y-4">
                  {/* Category Tag */}
                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30">
                      <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                        {index < 4
                          ? locale === "AR"
                            ? "تجارة إلكترونية"
                            : "E-Commerce"
                          : locale === "AR"
                            ? "ويب آب"
                            : "Web App"}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-pink-300 group-hover:to-blue-300 transition-all duration-500">
                      {locale === "AR" ? project.title.AR : project.title.EN}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                    {locale === "AR"
                      ? project.description.AR
                      : project.description.EN}
                  </p>

                  {/* Tech Stack Pills (Optional - you can add this to your data) */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["React", "Next.js", "TypeScript"].map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-lg bg-gray-800/50 text-gray-400 border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 rounded-xl opacity-0 group-hover/btn:opacity-100 blur transition-opacity duration-300" />
                      <div className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
                        <span>
                          {locale === "AR" ? "عرض المشروع" : "View Project"}
                        </span>
                        <svg
                          className={`w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300 ${
                            locale === "AR" ? "rotate-180" : ""
                          }`}
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
                    </a>

                    {/* Preview Button */}
                    <button className="p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300 group/preview">
                      <svg
                        className="w-6 h-6 text-gray-400 group-hover/preview:text-blue-400 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Bottom Corner Accent */}
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-500/10 via-pink-500/5 to-transparent rounded-tl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-24 md:mt-32 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {locale === "AR"
                ? "هل لديك مشروع في ذهنك؟"
                : "Have a project in mind?"}
            </h3>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              {locale === "AR"
                ? "دعنا نحول فكرتك إلى واقع رقمي مبهر"
                : "Let's turn your idea into an amazing digital reality"}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href={"#contact"}
              className="group/cta relative px-8 py-4 overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 group-hover/cta:opacity-100 blur-xl transition-opacity duration-300" />
              <div className="relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
                <span>
                  {locale === "AR" ? "ابدأ مشروعك" : "Start Your Project"}
                </span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </Link>

            <Link
              href={"#about"}
              className="px-8 py-4 rounded-full bg-gray-800/50 border border-gray-700/50 text-white font-bold text-lg hover:border-blue-500/50 hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
            >
              {locale === "AR" ? "تصفح المزيد" : "View More"}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
};

export default Grid;
