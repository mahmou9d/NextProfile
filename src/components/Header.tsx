"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import HeaderMobile from "./HeaderMobile";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/components/Usetranslation";
import { NavItem } from "../../types/type";
import { motion } from "framer-motion";

const Header = ({ navItems }: { navItems: NavItem[] }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t, isArabic, dir } = useTranslation();

  const handleToggleLocale = () => {
    const newLocale = isArabic ? "en" : "ar";
    const currentPath = pathname.replace(/^\/(ar|en)/, "") || "/";
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <header dir={dir} className="fixed top-0 z-[1000] w-full">
      {/* Animated backdrop blur */}
      <motion.div
        className="absolute inset-0 backdrop-blur-md bg-black/40 border-b border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href={`/${isArabic ? "ar" : "en"}`}
              className="flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              <Image
                src="/Webvitas.png"
                alt="webvitas"
                width={100}
                height={60}
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, idx) => {
              const href = item.link.startsWith("/")
                ? `/${isArabic ? "ar" : "en"}${item.link}`
                : item.link;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Link
                    href={href}
                    className="relative group px-4 py-2 text-sm font-medium"
                  >
                    <span className="text-white/60 group-hover:text-white transition-colors duration-300">
                      {isArabic ? item.name.AR : item.name.EN}
                    </span>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-white"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <motion.button
              onClick={handleToggleLocale}
              className="hidden md:block relative px-4 py-2 text-sm font-medium text-white/60 border border-white/20 rounded-lg hover:border-white/40 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-4 h-4 inline mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <span className="hidden lg:inline">{isArabic ? "English" : "العربية"}</span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-white/60 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? (
                <FaXmark size={20} />
              ) : (
                <FaBars size={20} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <HeaderMobile
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        navItems={navItems}
        locale={isArabic ? "AR" : "EN"}
        toggleLocale={handleToggleLocale}
      />
    </header>
  );
};

export default Header;
