import React from "react";
import { motion } from "framer-motion";

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
  title3: string | null;
  description: string | null;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="text-center mb-12 space-y-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Subtitle */}
      <motion.div variants={itemVariants}>
        <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
          <span className="text-sm font-semibold text-cyan-400">{subtitle}</span>
        </div>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        variants={itemVariants}
        className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight"
      >
        <span className="text-white block">{title1}</span>
        <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {title2}
        </span>
        {title3 && <span className="text-white block">{title3}</span>}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Title;
