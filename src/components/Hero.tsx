"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "./Usetranslation";
import { useEffect, useState } from "react";

const Hero = () => {
  const { t, isArabic } = useTranslation();
  const localePrefix = isArabic ? "/ar" : "/en";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { value: "50+", label: t.hero.stats.projects },
    { value: "98%", label: t.hero.stats.satisfaction },
    { value: "24/7", label: t.hero.stats.support },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden pt-20">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: scrollY * 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: scrollY * 0.3 }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 md:py-32">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm"
              whileHover={{ borderColor: "rgb(34, 211, 238)" }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-sm font-semibold text-cyan-400">
                {t.hero.subtitle}
              </span>
            </motion.div>
          </motion.div>

          {/* Animated Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
              <motion.span
                className="text-white block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {t.hero.title1}
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {t.hero.title2}
              </motion.span>
              {t.hero.title3 && (
                <motion.span
                  className="text-white block"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  {t.hero.title3}
                </motion.span>
              )}
            </h1>
          </motion.div>

          {/* Animated Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-12"
          >
            {t.hero.description}
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 md:gap-12 mb-12"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + idx * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col">
                  <motion.span
                    className="text-3xl md:text-4xl font-black text-white"
                    whileHover={{ color: "#22d3ee" }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`${localePrefix}#services`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all group"
              >
                <span>{t.hero.buttons.exploreServices}</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`${localePrefix}#contact`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-purple-500/50 text-white font-semibold rounded-lg hover:border-purple-400 hover:bg-purple-500/5 transition-all"
              >
                <span>{t.hero.buttons.buildWebsite}</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
