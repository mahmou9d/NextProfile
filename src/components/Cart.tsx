import Image from "next/image";
import React from "react";

const Cart = ({
  project,
  index,
  locale,
}: {
  project: {
    id: number;
    img: string;
    title: { EN: string; AR: string };
    description: { EN: string; AR: string };
    link: string;
  };
  index: number;
  locale: string;
}) => {
  return (
    <article
      key={project.id}
      className={` group relative ${index % 3 === 0 ? "lg:col-span-1" : ""}`}
    >
      {/* Card Container */}
      <div
        className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 border border-gray-700/50 transition-transform transition-opacity
 duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20"
      >
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
            loading="lazy"
            priority={false}
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />

          {/* Project Number Badge */}
          <div className="absolute top-6 left-6 z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity" />
              <div
                className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white font-black text-2xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-transform transition-opacity
 duration-300"
              >
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="absolute top-6 right-6 z-20">
            <div className="px-4 py-2 rounded-full bg-green-500/20 border border-green-500/50">
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
            <span
              className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-pink-300 group-hover:to-blue-300 transition-transform transition-opacity
 duration-500"
            >
              {locale === "AR" ? project.title.AR : project.title.EN}
            </span>
          </h3>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
            {locale === "AR" ? project.description.AR : project.description.EN}
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              <div
                className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-transform transition-opacity
 duration-300"
              >
                <span>{locale === "AR" ? "عرض المشروع" : "View Project"}</span>
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
            <button
              className="p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800 transition-transform transition-opacity
 duration-300 group/preview"
            >
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
  );
};

export default Cart;
