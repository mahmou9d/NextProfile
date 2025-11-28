"use client";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-32 pb-20 overflow-hidden transition-colors duration-500
bg-gradient-to-br from-white via-gray-100 to-blue-50
          // dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900
      }`}
    >
      {/* Floating glowing circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl shadow-[0_0_60px_rgba(0,180,255,0.4)] transition-colors duration-500
${
  i % 2 === 0
    ? "bg-blue-500/30 w-[350px] h-[350px]"
    : "bg-purple-500/20 w-[250px] h-[250px]"
}
          `}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, -20, 0],
            y: [0, 15, -15, 0],
          }}
          transition={{
            duration: 300 + i,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Grid / particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`w-full h-full bg-[url('/grid.png')] bg-cover transition-opacity duration-500 
          opacity-5 dark:opacity-10`}
        ></div>

        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.p
          className={`uppercase tracking-[0.3em] text-sm transition-colors duration-500 
            text-blue-600 dark:text-blue-400 glow`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cutting-Edge Software Solutions
        </motion.p>

        <motion.h1
          className={`mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight relative transition-colors duration-500
            text-gray-900 dark:text-white`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We Build
          <span className="relative block mt-2">
            <span className="absolute inset-0 flex items-center justify-center -z-10">
              <span
                className={`w-40 h-40 md:w-56 md:h-56 blur-[90px] rounded-full transition-colors duration-500
                bg-blue-300/20 dark:bg-blue-400/10`}
              ></span>
            </span>

            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent drop-shadow-sm block text-center glow transition-colors duration-500
                from-blue-600 via-cyan-500 to-teal-500
                  dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300
                }`}
            >
              Next-Level Platforms
            </span>
          </span>
          for Global Enterprises
        </motion.h1>

        <motion.p
          className={`mt-6 text-lg md:text-xl leading-relaxed transition-colors duration-500
            text-gray-800 dark:text-gray-300`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Modern web, mobile, and cloud solutions designed to scale and deliver
          seamless digital experiences for your business.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex justify-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#services">
            <MagicButton
              title="Explore Our Services"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a href="#services">
            <MagicButton
              title="Schedule a Consultation"
              icon={<FaEnvelope />}
              position="right"
            />
          </a>
        </motion.div>
      </div>

      {/* Glow */}
      <style jsx>{`
        .glow {
          text-shadow: ${theme === "light"
            ? "0 0 6px rgba(100,180,255,0.35), 0 0 12px rgba(150,200,255,0.2)"
            : "0 0 4px rgba(0,180,255,0.4), 0 0 8px rgba(0,180,255,0.25)"};
        }
      `}</style>
    </section>
  );
};

export default Hero;
