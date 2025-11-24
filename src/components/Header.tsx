"use client";
import React, { JSX, useState } from "react";
import Link from "next/link";
import { FaMoon, FaSun, FaBars, FaXmark } from "react-icons/fa6";

const Header = ({
  navItems,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [locale, setLocale] = useState("EN");
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLocale = () => setLocale(locale === "EN" ? "AR" : "EN");
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <header
      className="fixed top-0 z-50 w-full backdrop-blur-xl bg-gradient-to-r from-black/70 via-gray-900/50 to-black/70 dark:from-gray-900/80 dark:via-gray-800/50 dark:to-gray-900/80 shadow-lg border-b border-blue-500/10"
      style={{
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="text-white font-bold text-xl tracking-wide">
            TechCorp
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="relative group text-gray-200 hover:text-blue-400 transition-colors text-sm md:text-base"
            >
              {item.icon && <span className="mr-1">{item.icon}</span>}
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900/70 hover:bg-gray-800/80 transition-all duration-300 shadow-md hover:shadow-blue-500/50 text-white group"
          >
            <span
              className={`transition-transform duration-300 ${
                darkMode ? "rotate-180" : "rotate-0"
              }`}
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-xl" />
              ) : (
                <FaMoon className="text-white text-xl" />
              )}
            </span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLocale}
            className="flex items-center justify-center px-4 h-12 rounded-2xl bg-black/40 backdrop-blur-md border border-blue-500/30 text-white font-semibold text-sm
             hover:bg-black/60 hover:border-blue-400 hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            {locale}
          </button>

          {/* Mobile Menu */}
          <button
            onClick={toggleMobile}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {mobileOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="flex flex-col md:hidden bg-black/90 dark:bg-gray-900/90 py-4 px-6 space-y-4">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="text-white text-base hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
export default Header;
