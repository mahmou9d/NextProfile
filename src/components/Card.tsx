"use client";
import Image from "next/image";
import { useTranslation } from "@/components/Usetranslation";
import { CartProps } from "../../types/type";

const Card = ({ project, index }: CartProps) => {
  const { t, isArabic } = useTranslation();

  // Determine category based on index if not provided
  const category = project.category || (index < 4 ? "ecommerce" : "webapp");

  return (
    <article className="group relative h-full w-full">
      {/* Card Body */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-[#0c0c14] border border-white/[0.05] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-purple-500/40 group-hover:shadow-[0_0_50px_-12px_rgba(167,139,250,0.3)] group-hover:translate-y-[-8px]">
        {/* Background Reveal Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.img}
            alt={isArabic ? project.title.AR : project.title.EN}
            fill
            className="object-cover object-top transition-all duration-1000 group-hover:scale-110 group-hover:opacity-60 group-hover:grayscale-0"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-[#0c0c14]/80 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex h-full flex-col p-8 md:p-10">
          {/* Top Row: Metrics */}
          <div className="flex justify-between items-start">
            {/* <div className="flex flex-wrap gap-2">
              {project.icons?.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="text-[9px] font-bold text-white/40 border border-white/10 px-2 py-1 rounded bg-black/20 backdrop-blur-md uppercase tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div> */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-500/30  border border-red-500">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              <span className="text-[9px] font-black text-white/80 uppercase tracking-[2px]">
                {/* High ROI */}
                Live
              </span>
            </div>
          </div>

          {/* Bottom Row: Text & CTA */}
          <div className="mt-auto space-y-4">
            <div className="space-y-2">
              <h3 className="font-syne text-4xl md:text-5xl font-extrabold text-white leading-[0.9] tracking-tighter">
                {isArabic ? project.title.AR : project.title.EN}
              </h3>
              <p className="text-gray-400 text-sm flex line-clamp-2 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                {isArabic ? project.description.AR : project.description.EN}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-500 group-hover/btn:scale-110">
                  <svg
                    className={`w-5 h-5 transition-transform ${isArabic ? "rotate-180" : "group-hover:translate-x-0.5"}`}
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
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                  {t.projects.buttons.viewProject}
                </span>
              </a>

              <div className="flex flex-col text-right">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[2px]">
                  Performance
                </span>
                <span className="text-lg font-syne font-black text-orange-400">
                  99<span className="text-xs">/100</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
