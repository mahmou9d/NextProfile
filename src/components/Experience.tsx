import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <div className="text-center mb-16 relative">
        {/* Glow Behind Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
        </div>

        {/* Sub Title */}
        <p className="text-sm tracking-widest text-blue-400 font-semibold uppercase relative z-10">
          Our Expertise
        </p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl text-blue-400 font-extrabold mt-2 relative z-10 leading-tight">
          Proven{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
            web solutions
          </span>
        </h1>

        {/* Underline Decor */}
        <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
      </div>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 px-6">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 8000) + 8000}
            borderRadius="1.75rem"
            style={{
              background: "linear-gradient(135deg, #0a1b4f 0%, #0f296b 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="
        flex-1 text-black dark:text-white 
        shadow-xl shadow-blue-900/30 
        hover:scale-[1.02] transition-all duration-300
      "
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-4 md:p-6 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16 transition-all duration-300 hover:scale-110"
              />

              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                  {card.title}
                </h1>
                <p className="text-start text-blue-100 mt-3 font-medium leading-relaxed">
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
