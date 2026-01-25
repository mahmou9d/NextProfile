"use client";

import React, { useState, useEffect, useContext } from "react";
import { companies, testimonials } from "@/data";
import { LocaleContext } from "./LocaleContext";
import Image from "next/image";

const Clients = () => {
  const { locale } = useContext(LocaleContext);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="testimonials"
      className="relative w-full min-h-screen py-24 md:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
      // dir={locale === "AR" ? "rtl" : "ltr"}
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
                {locale === "AR" ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
              </span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500" />
          </div>

          {/* Main Title */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            <span className="gradient-text inline-block bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent">
              {locale === "AR" ? "كلمات طيبة من" : "Kind words from"}
            </span>
            <br />
            <span className="gradient-text-x inline-block bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {locale === "AR" ? "عملائنا الراضين" : "satisfied clients"}
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

        {/* Testimonials Slider */}
        <div className="relative mb-20">
          <div
            className="overflow-hidden mask-gradient"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex gap-6 animate-scroll-infinite"
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {/* Quadruple the testimonials for extra smooth seamless loop */}
              {[
                ...testimonials,
                ...testimonials,
                ...testimonials,
                ...testimonials,
              ].map((testimonial, index) => (
                <div
                  key={`${index}`}
                  className="flex-shrink-0 w-[90vw] sm:w-[450px] md:w-[500px]"
                >
                  <div className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-2xl border border-gray-700/50 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20 p-8">
                    {/* Top Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Quote Icon */}
                    <div className="relative mb-6">
                      <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white text-3xl font-black">
                        "
                      </div>
                    </div>
<div className="flex justify-between flex-col">
                    {/* Quote Text */}
                    <p
                      className={`${locale === "AR" ? "text-right" : ""} text-gray-300 text-lg leading-relaxed mb-8 relative z-10`}
                    >
                      {locale === "AR"
                        ? testimonial.quote.AR
                        : testimonial.quote.EN}
                    </p>

                    {/* Author Info */}
                    <div
                      className={`${locale === "AR" ? "text-right flex-row-reverse" : ""} flex items-center gap-4 relative z-10`}
                    >
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500/50 group-hover:border-blue-500 transition-colors">
                        <Image
                          src={testimonial.img || "/default-avatar.png"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {locale === "AR"
                            ? testimonial.title.AR
                            : testimonial.title.EN}
                        </p>
                      </div>
                    </div>
</div>
                    {/* Bottom Corner Accent */}
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-500/10 via-pink-500/5 to-transparent rounded-tl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-500/50" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-pink-500/50" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {locale === "AR"
                ? "عملاؤنا الموثوقون"
                : "Trusted By Industry Leaders"}
            </h3>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {companies.map((company) => (
              <div key={company.id} className="group relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:to-pink-500/20 rounded-2xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 backdrop-blur-2xl border border-gray-700/50 transition-all duration-500 group-hover:border-blue-500/60 group-hover:shadow-2xl group-hover:shadow-blue-500/20 p-8 flex items-center justify-center min-h-[120px]">
                  {/* Top Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Logo */}
                  <div className="relative w-full h-16 flex items-center justify-center">
                    <Image
                      src={company.nameImg || "Company Logo"}
                      alt={company.name || "Company Logo"}
                      width={140}
                      height={64}
                      className="opacity-50 group-hover:opacity-100 transition-all duration-500 object-contain max-w-full max-h-full group-hover:scale-110"
                    />
                  </div>

                  {/* Bottom Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-500/5 via-pink-500/5 to-transparent rounded-tl-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
};

export default Clients;
