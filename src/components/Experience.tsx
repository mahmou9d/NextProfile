"use client";
import React from "react";
import { workExperience } from "@/data";
import Image from "next/image";
import Title from "./Title";
import { useTranslation } from "./Usetranslation";

const Experience = () => {
  const { t, isArabic, dir } = useTranslation();

  return (
    <section
      id="services"
      className="relative w-full min-h-screen py-24 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
      dir={dir}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <Title
          subtitle={t.experience.subtitle}
          title1={t.experience.title1}
          title2={t.experience.title2}
          description={null}
          title3={null}
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {workExperience.map((card: any, index: number) => (
            <article
              key={card.id}
              className="group relative opacity-0 translate-y-8 transition-all duration-700 animate-fade-in"
              style={{
                transitionDelay: `${index * 150}ms`,
                animation: `fadeIn 0.7s ease-out ${index * 150}ms forwards`,
              }}
            >
              {/* Card Container */}
              <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 border border-gray-700/50 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20">
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="border-gradient absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-pink-500/20 to-blue-500/20" />
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col lg:flex-row items-center p-8 gap-6 ${isArabic ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Image Section */}
                  <div className="relative flex-shrink-0">
                    {/* Image Container */}
                    <div className="relative w-32 h-32 lg:w-36 lg:h-36 rounded-2xl overflow-hidden border-2 border-gray-700/50 group-hover:border-blue-500/60 transition-all duration-500">
                      <Image
                        src={card.thumbnail!}
                        alt={
                          isArabic && card.title.AR
                            ? card.title.AR
                            : card.title.EN
                        }
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        priority={false}
                      />
                    </div>

                    {/* Number Badge */}
                    <div
                      className={`absolute -top-3 z-10 ${isArabic ? "-left-3" : "-right-3"}`}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity " />
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white font-black text-lg shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div
                    className={`flex-1 text-center lg:text-start space-y-3 ${isArabic ? "lg:text-right" : "lg:text-left"}`}
                  >
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-black -tight">
                      <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-pink-300 group-hover:to-blue-300 transition-all duration-500">
                        {isArabic && card.title.AR
                          ? card.title.AR
                          : card.title.EN}
                      </span>
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-base md:text-lg -relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {isArabic && card.desc.AR ? card.desc.AR : card.desc.EN}
                    </p>

                    {/* Decorative Bar */}
                    <div className="pt-2">
                      <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 opacity-0 group-hover:opacity-100 group-hover:w-32 transition-all duration-500" />
                    </div>
                  </div>
                </div>
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
