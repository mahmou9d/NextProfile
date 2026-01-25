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
  title3: string|null;
  description: string | null;
}) => {
  return (
    <div className="text-center mb-12 space-y-2">
      {/* Subtitle with Badge */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
        <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-pink-500/10 border border-blue-500/20 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {subtitle}
          </span>
        </div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500" />
      </div>

      {/* Main Title */}
      <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
        <span className="gradient-text inline-block bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent">
          {title1}
        </span>
        <br />
        <span className="gradient-text-x inline-block bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          {title2}
        </span>
        {title3 && (
          <>
            <br />
            <span className="gradient-text inline-block bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent">
              {title3}
            </span>
          </>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}

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
  );
};

export default Title;
