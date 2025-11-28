import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div
      className="
        py-20 w-full 
        bg-gray-50 
        dark:bg-transparent
        transition-colors duration-300
      "
    >
      <div className="text-center mb-16 relative">
        {/* Glow Behind Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="
              w-48 h-48 
              bg-white/70 
              dark:bg-blue-500/20 
              blur-3xl rounded-full 
              animate-pulse 
              transition-all
            "
          ></div>
        </div>

        {/* Sub Title */}
        <p
          className="
            text-sm tracking-widest font-semibold uppercase relative z-10
            text-blue-700 
            dark:text-blue-400
          "
        >
          Our Expertise
        </p>

        {/* Main Title */}
        <h1
          className="
            text-4xl md:text-5xl font-extrabold mt-2 relative z-10 leading-tight
            text-blue-700 
            dark:text-blue-400
          "
        >
          Proven{" "}
          <span
            className="
              bg-gradient-to-r 
              from-blue-600 via-cyan-500 to-teal-600 
              dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300
              bg-clip-text 
              text-transparent 
              drop-shadow-lg
            "
          >
            web solutions
          </span>
        </h1>

        {/* Underline Decor */}
        <div
          className="
            mt-4 mx-auto w-32 h-1 rounded-full shadow-lg
            bg-gradient-to-r from-blue-500 to-cyan-400
            dark:from-cyan-400 dark:to-blue-500
          "
        ></div>
      </div>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 px-6">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 8000) + 8000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(135deg, #0a1b4f 0%, #0f296b 100%)" /* Light Mode Gradient */,
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="
              flex-1 
              text-black dark:text-white 
             
              shadow-xl shadow-blue-900/20 
              hover:scale-[1.02] 
              transition-all duration-300
            "
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-4 md:p-6 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16 transition-all duration-300 hover:scale-110"
                loading="lazy"
              />

              <div className="lg:ms-5">
                <h1
                  className="
                    text-start text-xl md:text-2xl font-bold
                    text-white
                  "
                >
                  {card.title}
                </h1>
                <p
                  className="
                    text-start 
                    text-blue-100 
                    mt-3 font-medium leading-relaxed
                  "
                >
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
