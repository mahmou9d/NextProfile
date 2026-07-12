import React from "react";

const Title = ({
  subtitle,
  title1,
  title2,
  title3,
  description,
}: {
  subtitle: string;
  title1: string;
  title2: string;
  title3: string | null;
  description: string | null;
}) => {
  return (
    <div className="relative flex flex-col items-center text-center mb-24 md:mb-36 px-4 group">
      {/* ── Background Aura (Extreme Glow) ── */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-gradient-to-r from-[#7c3aed]/10 via-[#db2777]/10 to-transparent blur-[120px] rounded-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />

      {/* ── Floating Tech Badge ── */}
      <div className="relative mb-10 overflow-hidden rounded-full p-[1px] transition-transform duration-500 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a78bfa]/50 to-transparent animate-[scroll_3s_linear_infinite]" />
        <div className="relative flex items-center gap-3 px-6 py-2 rounded-full bg-[#080810]/80 backdrop-blur-xl border border-gray-400/5">
          <div className="relative flex h-2 w-2">
            <div className="absolute inset-0 rounded-full bg-[#a78bfa] animate-ping opacity-40" />
            <div className="relative rounded-full h-2 w-2 bg-[#a78bfa] shadow-[0_0_10px_#a78bfa]" />
          </div>
          <span className="text-sm font-black uppercase text-gray-400/75">
            {subtitle}
          </span>
        </div>
      </div>

      {/* ── High-Impact Typography ── */}
      <div className="max-w-7xl space-y-8">
        <h2 className="font-syne font-black text-white selection:bg-[#a78bfa]">
          <span className="inline-block text-3xl sm:text-4xl md:text-[5rem] -[1.2] pb-2">
            {title1}
          </span>
          <div className="flex flex-wrap text-3xl sm:text-4xl md:text-[5rem] items-center justify-center gap-x-6 mt-2 py-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] via-[#f472b6] to-[#fb923c] italic font-extrabold leading-tight pr-2">
              {title2}
            </span>
            {title3 && (
              <span className="text-white transition-colors duration-700 group-hover:text-gray-400/40 leading-tight">
                {title3}
              </span>
            )}
          </div>
        </h2>

        {description && (
          <span>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-medium -relaxed -tight border-l-2 border-[#a78bfa]/20 pl-6 py-2 transition-all group-hover:border-[#a78bfa]/60">
              {description}
            </p>
          </span>
        )}
      </div>

      {/* ── Minimalist Geometric Divider ── */}
      <div className="flex items-center gap-4 mt-16 opacity-30 group-hover:opacity-100 transition-opacity duration-700">
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#a78bfa]" />
        <div className="w-2 h-2 rotate-45 border border-[#a78bfa] bg-[#a78bfa]/20 shadow-[0_0_10px_#a78bfa]" />
        <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#a78bfa]" />
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Title;
