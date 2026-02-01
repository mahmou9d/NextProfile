"use client";
import Image from "next/image";
import { useTranslation } from "@/components/Usetranslation";
import { CartProps } from "../../types/type";



const Card = ({ project, index }: CartProps) => {
  const { t, isArabic } = useTranslation();

  // Determine category based on index if not provided
  const category = project.category || (index < 4 ? "ecommerce" : "webapp");

  return (
    <article
      key={project.id}
      className={`group relative ${index % 3 === 0 ? "lg:col-span-1" : ""}`}
    >
      {/* Card Container */}
      <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 border border-gray-700/50 transition-all duration-500 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20">
        {/* Image Section */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <Image
            src={project.img}
            alt={isArabic ? project.title.AR : project.title.EN}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
            priority={false}
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10 to-transparent" />

          {/* Project Number Badge */}
          <div
            className={`absolute top-6 z-20 ${isArabic ? "right-6" : "left-6"}`}
          >
            <div className="relative">
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white font-black text-2xl shadow-2xl">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div
            className={`absolute top-6 z-20 ${isArabic ? "left-6" : "right-6"}`}
          >
            <div className="px-4 py-2 rounded-full bg-green-500/40 border border-green-500/70">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-bold text-green-300 uppercase tracking-wider">
                  {t.projects.status.live}
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
                {t.projects.categories[category]}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-black leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-pink-300 group-hover:to-blue-300 transition-all duration-500">
              {isArabic ? project.title.AR : project.title.EN}
            </span>
          </h3>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
            {isArabic ? project.description.AR : project.description.EN}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.icons?.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-lg bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-gray-600/50 hover:text-gray-300 transition-colors"
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
              <div className="relative flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
                <span>{t.projects.buttons.viewProject}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    isArabic
                      ? "rotate-180 group-hover/btn:-translate-x-1"
                      : "group-hover/btn:translate-x-1"
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
              className="p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300 group/preview"
              aria-label={t.projects.buttons.preview}
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
      </div>
    </article>
  );
};

export default Card;
