"use client";
import { useContext, useRef, useEffect } from "react";
import { projects } from "@/data";
import { LocaleContext } from "./LocaleContext";
import Image from "next/image";
import Link from "next/link";
import Title from "./Title";
import Cart from "./Cart";

const Grid = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-24 md: overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
      dir={locale === "AR" ? "rtl" : "ltr"}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <Title
          subtitle={locale === "AR" ? "أعمالنا المميزة" : "Featured Work"}
          title1={locale === "AR" ? "مشاريع" : "Premium"}
          title2={locale === "AR" ? "احترافية" : "Projects"}
          description={
            locale === "AR"
              ? "اكتشف مجموعة من المشاريع المبتكرة التي صممناها وطورناها باحترافية عالية"
              : "Discover a collection of innovative projects designed and developed with high professionalism"
          }
          title3={null}
        />
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Cart
              key={project.id}
              project={project}
              index={index}
              locale={locale}
            />
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
