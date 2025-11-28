"use client";
import React, { JSX, useEffect, useState } from "react";
import Link from "next/link";
import { FaMoon, FaSun, FaBars, FaXmark } from "react-icons/fa6";
import { useTheme } from "next-themes";

const Header = ({
  navItems,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [locale, setLocale] = useState("EN");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleLocale = () => setLocale(locale === "EN" ? "AR" : "EN");
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <header
      className={`fixed top-0 z-[1000] w-full backdrop-blur-xl shadow-lg border-b transition-colors duration-300
      ${
        theme === "light"
          ? "bg-white/80 border-blue-200/50"
          : "bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-gray-900/80 border-blue-500/10"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-1">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {theme === "dark" ? (
            <img
              src="/logo2.png"
              alt="Logo"
              className="h-[4.5rem] w-[6.5rem]"
              loading="lazy"
            />
          ) : (
            <img
              src="/logo.png"
              alt="Logo"
              className="h-[4.5rem] w-[6.5rem]"
              loading="lazy"
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`relative group text-sm md:text-base transition-colors
                ${
                  theme === "light"
                    ? "text-gray-900 hover:text-blue-600"
                    : "text-gray-200 hover:text-blue-400"
                }
              `}
            >
              {item.icon && <span className="mr-1">{item.icon}</span>}
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all group-hover:w-full
                ${theme === "light" ? "bg-blue-600" : "bg-blue-400"}`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Dark / Light Mode Button */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 shadow-md
              ${
                theme === "light"
                  ? "bg-gray-100 hover:bg-gray-200 text-gray-800 shadow-blue-200"
                  : "bg-gray-900/70 hover:bg-gray-800/80 text-white shadow-blue-500/50"
              }
            `}
          >
            <span
              className={`transition-transform duration-300 ${
                theme === "dark" ? "rotate-180" : "rotate-0"
              }`}
            >
              {theme === "dark" ? (
                <FaMoon className="text-blue-600 text-xl rotate-180" />
              ) : (
                <FaSun className="text-yellow-400 text-xl" />
              )}
            </span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLocale}
            className={`flex items-center justify-center px-4 h-12 rounded-2xl font-semibold text-sm transition-all duration-300
              ${
                theme === "light"
                  ? "bg-gray-100 border border-blue-200 text-gray-900 hover:bg-gray-200 hover:border-blue-400"
                  : "bg-black/40 border border-blue-500/30 text-white hover:bg-black/60 hover:border-blue-400"
              }
            `}
          >
            {locale}
          </button>

          {/* Mobile Menu */}
          <button
            onClick={toggleMobile}
            className={`md:hidden p-2 rounded-lg transition-colors
            ${theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-800"}`}
          >
            {mobileOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          className={`flex flex-col md:hidden py-4 px-6 space-y-4 transition-colors duration-300
            ${theme === "light" ? "bg-white/95" : "bg-black/90"}`}
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`text-base transition
                ${
                  theme === "light"
                    ? "text-gray-900 hover:text-blue-600"
                    : "text-white hover:text-blue-400"
                }
              `}
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
