"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import HeaderMobile from "./HeaderMobile";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "@/components/Usetranslation";
import { NavItem } from "../../types/type";

const Header = ({ navItems }: { navItems: NavItem[] }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t, isArabic, dir } = useTranslation();
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleLocale = () => {
    const newLocale = isArabic ? "en" : "ar";
    const currentPath = pathname.replace(/^\/(ar|en)/, "") || "/";
    router.push(`/${newLocale}${currentPath}`);
  };

  return (
    <>
      <header
        dir={dir}
        className="fixed top-0 left-0 right-0 z-[1000] w-full transition-all duration-500"
      >
        {/* ── Minimal Ticker ── */}
        {!scrolled && (
          <div className="w-full bg-[#0c0c14] border-b border-white/5 py-2 overflow-hidden hidden md:block">
            <div className="flex animate-[tickerMove_10s_linear_infinite] whitespace-nowrap">
              {[...Array(3)].map((_, di) => (
                <span key={di} style={{ display: "contents" }}>
                  <div className="flex items-center gap-12 px-6">
                    <span className="text-[16px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-green-500" />
                      {isArabic
                        ? "+50 مشروع تم تسليمه"
                        : "50+ Projects Delivered"}
                    </span>
                    <span className="text-[16px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#a78bfa]" />
                      {isArabic
                        ? "98% نسبة رضا العملاء"
                        : "98% Client Satisfaction"}
                    </span>
                    <span className="text-[16px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-pink-500" />
                      {isArabic
                        ? "سرعة فائقة في التنفيذ"
                        : "Lightning-fast Delivery"}
                    </span>
                  </div>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── Main Navigation Bar ── */}
        <div
          className={`mx-auto transition-all duration-700 ${scrolled ? "mt-4 max-w-5xl" : "max-w-7xl"}`}
        >
          <div
            className={`relative flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-700 overflow-hidden ${
              scrolled
                ? "bg-[#0c0c14]/70 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                : "bg-transparent border-b border-white/5"
            }`}
          >
            {/* Logo */}
            <Link
              href={`/${isArabic ? "ar" : "en"}`}
              className="flex items-center group"
            >
              <div className="relative w-20 h-10 rounded-xl flex items-center justify-center p-2 shadow-lg">
                <Image
                  src="/Webvitas.png"
                  alt="Logo"
                  width={75}
                  height={75}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-syne text-lg font-bold text-white tracking-tight">
                  Webvitas
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-2">
                {navItems.map((item, idx) => {
                  const href = item.link.startsWith("/")
                    ? `/${isArabic ? "ar" : "en"}${item.link}`
                    : item.link;
                  const isActive = pathname === href;
                  return (
                    <li key={idx}>
                      <Link
                        href={href}
                        className={`relative px-5 py-2 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 rounded-full ${
                          isActive
                            ? "text-white bg-white"
                            : "text-white hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {isArabic ? item.name.AR : item.name.EN}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Action Controls */}
            <div className="flex items-center gap-1 md:gap-4">
              {/* Language Switch */}
              <button
                onClick={handleToggleLocale}
                className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-[#a78bfa]/50 transition-all"
              >
                <span className="text-[14px] font-black uppercase tracking-tighter">
                  {isArabic ? "EN" : "AR"}
                </span>
              </button>

              {/* Main CTA */}
              <Link
                href={`/${isArabic ? "ar" : "en"}/contact`}
                className="group/cta relative h-11 px-3 md:px-7 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#db2777] text-white font-syne text-[12px] md:text-[14px] font-black uppercase flex items-center gap-3 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] active:scale-95"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:animate-[shimmer_1.5s_infinite]" />

                <span className="relative z-10">
                  {isArabic ? "ابدأ الآن" : "Start now"}
                </span>
              </Link>

              {/* Burger Menu */}
              <button
                onClick={toggleMobile}
                className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/50"
              >
                {mobileOpen ? <FaXmark size={18} /> : <FaBars size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <HeaderMobile
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          navItems={navItems}
          locale={isArabic ? "AR" : "EN"}
          toggleLocale={handleToggleLocale}
        />
      </header>

      <style>{`
        @keyframes tickerMove {
          from { transform: translateX(-33.33%); }
          to { transform: translateX(0); }
        }
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
};

export default Header;
