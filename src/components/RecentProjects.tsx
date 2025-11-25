"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="">
      <div className="text-center mb-20 relative">
        {/* Big Glow Behind Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-56 h-56 bg-blue-500/20 blur-[140px] rounded-full animate-pulse"></div>
        </div>

        {/* Sub Title */}
        <p className="text-sm tracking-widest text-blue-400 font-semibold uppercase relative z-10">
          Premium Web Solutions
        </p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mt-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-lg relative z-10 leading-tight">
          A curated selection of{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
            our latest websites
          </span>
        </h1>

        {/* Underline Decor */}
        <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-start sm:w-[28rem] w-[80vw] transition-transform duration-500 hover:scale-105"
            key={item.id}
          >
            <PinContainer title="Live Site" href={item.link}>
              {/* Image Container */}
              <div className="relative flex items-center justify-center sm:w-[28rem] w-[80vw] overflow-hidden h-[20vh] lg:h-[26vh] mb-6 rounded-3xl shadow-xl group">
                {/* Glow / Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-cyan-300/10 to-teal-300/10 rounded-3xl transition-opacity duration-500 group-hover:opacity-70" /> */}

                {/* Background */}
                {/* <div className="relative w-full h-full rounded-3xl bg-[#13162D]">
                  <img
                    src="/bg.png"
                    alt="bgimg"
                    className=" object-cover"
                  />
                </div> */}

                {/* Project Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0 w-full object-contain transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h1 className="font-extrabold lg:text-2xl md:text-xl text-base text-white line-clamp-1">
                {item.title}
              </h1>

              {/* Description */}
              <p className="lg:text-lg md:text-sm text-sm text-gray-300 mt-2 line-clamp-3">
                {item.des}
              </p>

              {/* CTA Button */}
              <div className="flex items-center justify-center mt-5">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-800 via-cyan-600 to-teal-800 text-white font-semibold text-sm hover:scale-105 hover:brightness-110 transition-all shadow-lg"
                >
                  <span>Check Live Site</span>
                  <FaLocationArrow />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
