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
        relative flex items-center justify-center h-14 w-full md:w-64 rounded-xl
        px-6 gap-3 font-semibold text-white dark:text-black text-sm
        bg-gradient-to-r from-blue-500 to-cyan-400
        shadow-lg shadow-blue-500/30
        transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl
        ${otherClasses}
      `}
    >
      {position === "left" && icon}
      <span className="relative z-10">{title}</span>
      {position === "right" && icon}
    </button>
  );
};

export default MagicButton;
