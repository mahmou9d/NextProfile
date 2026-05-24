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
    <div className="text-center mb-16 space-y-6">
      {/* Subtitle with Badge */}
      <div className="flex items-center justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-purple-500/30">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gradient-to-r from-pink-500 to-blue-500"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Main Title */}
      <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
        <span className="text-white">
          {title1}
        </span>
        <br />
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          {title2}
        </span>
        {title3 && (
          <>
            <br />
            <span className="text-white">
              {title3}
            </span>
          </>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed pt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default Title;
