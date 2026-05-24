"use client";
import { useState, JSX } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import HeaderMobile from "./HeaderMobile";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/components/Usetranslation";
import { NavItem } from "../../types/type";


const Header = ({ navItems }: { navItems: NavItem[] }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t, isArabic, dir } = useTranslation();
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const handleToggleLocale = () => {
    const newLocale = isArabic ? "en" : "ar";
    const currentPath = pathname.replace(/^\/(ar|en)/, "") || "/";
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <header dir={dir} className="fixed top-0 z-[1000] w-full bg-white border-b border-gray-200">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href={`/${isArabic ? "ar" : "en"}`}
            className="flex items-center gap-3 hover:opacity-70 transition-opacity duration-300 z-10"
          >
            <Image
              src="/Webvitas.png"
              alt="webvitas"
              width={100}
              height={60}
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => {
              const href = item.link.startsWith("/")
                ? `/${isArabic ? "ar" : "en"}${item.link}`
                : item.link;

              return (
                <Link
                  key={idx}
                  href={href}
                  className="relative group"
                >
                  <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">
                    {isArabic ? item.name.AR : item.name.EN}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
                </Link>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* Language Toggle - Desktop */}
            <button
              onClick={handleToggleLocale}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300 text-sm font-medium text-gray-700"
            >
              <svg
                className="w-4 h-4"
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
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobile}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {mobileOpen ? (
                <FaXmark className="text-gray-900" size={20} />
              ) : (
                <FaBars className="text-gray-900" size={20} />
              )}
            </button>
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
