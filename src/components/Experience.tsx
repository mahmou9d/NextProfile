"use client";
import React, { useContext } from "react";
import { workExperience } from "@/data";
import { LocaleContext } from "./LocaleContext";
import Image from "next/image";

const Experience = () => {
  const { locale } = useContext(LocaleContext);
  const isAr = locale === "AR";

  return (
    <section
      id="services"
      className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
      dir={isAr ? "rtl" : "ltr"}
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
                {isAr ? "خبراتنا" : "Our Expertise"}
              </span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500" />
          </div>

          {/* Main Title */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            <span className="gradient-text inline-block bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent">
              {isAr ? "حلول ويب" : "Proven"}
            </span>
            <br />
            <span className="gradient-text-x inline-block bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {isAr ? "مثبتة وفعّالة" : "Web Solutions"}
            </span>
          </h2>

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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {workExperience.map((card, index) => (
            <article
              key={card.id}
              className="group relative opacity-0 translate-y-8 transition-all duration-700 animate-fade-in"
              style={{
                transitionDelay: `${index * 150}ms`,
                animation: `fadeIn 0.7s ease-out ${index * 150}ms forwards`,
              }}
            >
              {/* Card Container */}
              <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-2xl border border-gray-700/50 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="border-gradient absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-blue-500/20" />
                </div>

                {/* Top Glow Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="flex flex-col lg:flex-row items-center p-8 gap-6">
                  {/* Image Section */}
                  <div className="relative flex-shrink-0">
                    {/* Glow Behind Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                    {/* Image Container */}
                    <div className="relative w-32 h-32 lg:w-36 lg:h-36 rounded-2xl overflow-hidden border-2 border-gray-700/50 group-hover:border-blue-500/60 transition-all duration-500">
                      <Image
                        src={card.thumbnail!}
                        alt={card.title.EN}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        unoptimized
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white font-black text-lg shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 text-center lg:text-start space-y-3">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-black leading-tight">
                      <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-pink-300 group-hover:to-blue-300 transition-all duration-500">
                        {isAr && card.title.AR ? card.title.AR : card.title.EN}
                      </span>
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {isAr && card.desc.AR ? card.desc.AR : card.desc.EN}
                    </p>

                    {/* Decorative Bar */}
                    <div className="pt-2">
                      <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 opacity-0 group-hover:opacity-100 group-hover:w-32 transition-all duration-500" />
                    </div>
                  </div>
                </div>

                {/* Bottom Corner Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 via-pink-500/5 to-transparent rounded-tl-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

export default Experience;
