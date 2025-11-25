"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="">
      <div className="text-center mb-16 relative">
        {/* Glow Behind Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
        </div>

        {/* Sub Title */}
        <p className="text-sm tracking-widest text-blue-400 font-semibold uppercase relative z-10">
          What Our Clients Say
        </p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl text-blue-400 font-extrabold mt-2 relative z-10 leading-tight">
          Kind words from{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
            satisfied clients
          </span>
        </h1>

        {/* Underline Decor */}
        <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
      </div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                {/* <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                /> */}
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
