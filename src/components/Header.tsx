"use client";
import { useState, JSX } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import HeaderMobile from "./HeaderMobile";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/components/Usetranslation";

interface NavItem {
  name: {
    EN: string;
    AR: string;
  };
  link: string;
  icon?: JSX.Element;
}

const Header = ({ navItems }: { navItems: NavItem[] }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // استخدام الهوك useTranslation
  const { t, isArabic, dir } = useTranslation();

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  // Handle locale toggle
  const handleToggleLocale = () => {
    const newLocale = isArabic ? "en" : "ar";
    const currentPath = pathname.replace(/^\/(ar|en)/, "") || "/";
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <header dir={dir} className="fixed top-0 z-[1000] w-full">
      {/* Glass Morphism Background with Gradient Border */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/50 border-b border-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-pink-500/5 to-blue-500/5" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Premium Effect */}
          <Link
            href={`/${isArabic ? "ar" : "en"}`}
            className="relative group z-10"
          >
            <div className="relative flex items-center gap-3 px-4 py-2 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/50">
              <Image
                src="/Webvitas.png"
                alt="webvitas"
                width={100}
                height={60}
                className="h-12 w-auto object-contain transform transition-transform duration-300"
              />
              <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
              <div className="hidden sm:flex flex-col">
                <span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                  {t.header.premium}
                </span>
                <span className="text-xs text-gray-400">
                  {t.header.webSolutions}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Premium Style */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item, idx) => {
              const href = item.link.startsWith("/")
                ? `/${isArabic ? "ar" : "en"}${item.link}`
                : item.link;

              return (
                <Link
                  key={idx}
                  href={href}
                  className="group relative px-5 py-2.5 overflow-hidden"
                >
                  {/* Text */}
                  <span className="relative text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                    {isArabic ? item.name.AR : item.name.EN}
                  </span>

                  {/* Bottom Indicator */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 group-hover:w-3/4 transition-all duration-500 rounded-full shadow-lg shadow-blue-500/50" />
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Language Toggle - Desktop Premium */}
            <div className="hidden md:block group relative">
              <button
                onClick={handleToggleLocale}
                className="relative flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all"
              >
                {/* Icon Container */}
                <div className="relative">
                  <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                      />
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div className="relative flex items-center gap-2">
                  <span className="text-sm font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                    {t.header.language.switch}
                  </span>
                  <span className="text-xs text-gray-400 hidden lg:block">
                    {isArabic ? "English" : "العربية"}
                  </span>
                </div>

                {/* Chevron */}
                <svg
                  className="relative w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Toggle - Premium */}
            <div className="group relative md:hidden">
              <button
                onClick={toggleMobile}
                className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 group-hover:border-transparent flex items-center justify-center overflow-hidden"
              >
                {mobileOpen ? (
                  <FaXmark className="relative text-pink-400" size={22} />
                ) : (
                  <FaBars className="relative text-blue-400" size={22} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Premium */}
      <HeaderMobile
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        navItems={navItems}
        locale={isArabic ? "AR" : "EN"}
        toggleLocale={handleToggleLocale}
        translations={t}
      />
    </header>
  );
};

export default Header;
