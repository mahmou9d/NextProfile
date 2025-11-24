import React from "react";

const MagicButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses = "",
}: {
  title: string;
  icon: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className={`
        relative inline-flex h-14 w-full md:w-64 md:mt-10 overflow-hidden rounded-2xl
        border-2 border-blue-600 bg-black/60 backdrop-blur-md
        text-white font-semibold text-sm px-6 gap-3 items-center justify-center
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/40
        ${otherClasses}
      `}
    >
      {/* Optional icon on left */}
      {position === "left" && icon}

      {/* Text with subtle glow on hover */}
      <span className="relative z-10">
        {title}
        <span className="absolute inset-0 blur-xl opacity-20 bg-blue-500 rounded-2xl mix-blend-screen"></span>
      </span>

      {/* Optional icon on right */}
      {position === "right" && icon}
    </button>
  );
};

export default MagicButton;
