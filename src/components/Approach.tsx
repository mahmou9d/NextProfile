"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <div className="text-center mb-16 relative">
        {/* Glow Behind Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-48 h-48 bg-white/70 dark:bg-blue-500/20 blur-3xl rounded-full animate-pulse transition-all" />
        </div>

        {/* Sub Title */}
        <p className="text-sm tracking-widest font-semibold uppercase relative z-10 text-blue-700 dark:text-blue-400">
          How We Work
        </p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2 relative z-10 leading-tight text-blue-700 dark:text-blue-400">
          My{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
            approach
          </span>
        </h1>

        {/* Underline Decor */}
        <div className="mt-4 mx-auto w-32 h-1 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-cyan-400 dark:to-blue-500" />
      </div>

      {/* Cards */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 px-4">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Planning" />}
          des="Collaborate to define your website's objectives, target audience, and essential features. We'll finalize site structure, navigation flow, and content requirements to ensure a solid foundation."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-100 dark:bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>

        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Development" />}
          des="Transform designs into interactive and responsive code. We maintain clear communication and provide regular updates to ensure your vision is accurately implemented at every stage."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-100 dark:bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Testing & Launch"
          icon={<AceternityIcon order="Launch" />}
          des="Conduct thorough testing, optimize performance, and deploy your website seamlessly. We ensure your site runs smoothly, is fully responsive, and provides an exceptional user experience from day one."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-100 dark:bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl
        bg-white text-black shadow-lg
        dark:bg-[rgb(4,7,29)] dark:text-white
        transition-all duration-300"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>

        <h2
          className="text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 mt-4 font-bold
            text-black group-hover/canvas-card:text-black
            dark:text-white dark:group-hover/canvas-card:text-white
            group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>

        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100 mt-4 text-center transition duration-200
            text-gray-600 group-hover/canvas-card:text-gray-700
            dark:text-[#E4ECFF] dark:group-hover/canvas-card:text-white
            group-hover/canvas-card:-translate-y-2"
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[2px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1E3A8A_0%,#00C3FF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-50 dark:bg-slate-950 px-5 py-2 text-blue-700 dark:text-blue-400 backdrop-blur-3xl font-bold text-2xl">
          {order}
        </span>
      </button>
    </div>
  );
};
