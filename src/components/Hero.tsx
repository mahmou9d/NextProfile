import { FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Multiple floating glowing circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${
            i % 2 === 0
              ? "bg-blue-500/30 w-[400px] h-[400px]"
              : "bg-purple-500/20 w-[300px] h-[300px]"
          } shadow-[0_0_60px_rgba(0,180,255,0.4)]`}
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
            duration: 300 + i, // حركة بطيئة جدًا
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Background grid / particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/grid.png')] bg-cover opacity-10"></div>
        <motion.div
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.p
          className="uppercase tracking-[0.3em] text-sm text-blue-400 glow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cutting-Edge Software Solutions
        </motion.p>

        <motion.h1
          className="mt-4 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We Build
          <span className="relative block mt-2">
            <span className="absolute inset-0 flex items-center justify-center -z-10">
              <span className="w-40 h-40 md:w-56 md:h-56 bg-blue-400/10 blur-[90px] rounded-full"></span>
            </span>

            <span className="bg-gradient-to-r glow from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-sm text-center block">
              Next-Level Platforms
            </span>
          </span>
          for Global Enterprises
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed"
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

      {/* Glow effect for text */}
      <style jsx>{`
        .glow {
          text-shadow: 0 0 4px rgba(0, 180, 255, 0.4),
            0 0 8px rgba(0, 180, 255, 0.25), 0 0 12px rgba(0, 180, 255, 0.15);
        }
      `}</style>
    </section>
  );
};

export default Hero;
