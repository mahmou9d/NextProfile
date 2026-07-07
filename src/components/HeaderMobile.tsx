import Link from "next/link";
import React, { JSX, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { NavItem } from "../../types/type";

const HeaderMobile = ({
  mobileOpen,
  setMobileOpen,
  navItems,
  locale,
  toggleLocale,
}: {
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navItems: NavItem[];
  locale: "EN" | "AR";
  toggleLocale: () => void;
}) => {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen, setMobileOpen]);

  return (
    <>
      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 z-[998] bg-[#080810]/60 backdrop-blur-xl lg:hidden transition-all duration-500 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Floating Menu Drawer */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed inset-x-4 top-24 z-[999] transition-all duration-500 origin-top ${
          mobileOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="bg-[#0c0c14]/90 backdrop-blur-3xl rounded-[2.5rem] border border-gray-400/10 p-6 shadow-2xl overflow-hidden relative">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#a78bfa]/10 blur-3xl rounded-full" />

          <nav className="relative z-10 space-y-2">
            {navItems.map((item, idx) => {
              const href = item.link.startsWith("/")
                ? `/${isArabic ? "ar" : "en"}${item.link}`
                : item.link;

              return (
                <Link
                  key={idx}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between p-4 rounded-2xl hover:bg-gray-400/5 transition-all"
                >
                  <span className="text-lg font-bold text-gray-400/50 group-hover:text-white transition-colors text-right">
                    {isArabic ? item.name.AR : item.name.EN}
                  </span>
                  <div className="h-8 w-8 rounded-full border border-gray-400/10 flex items-center justify-center text-white group-hover:text-[#a78bfa] group-hover:border-[#a78bfa]/50 transition-all">
                    <svg
                      className={`w-4 h-4 ${isArabic ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </Link>
              );
            })}

            {/* Language Switcher */}
            <div className="pt-4 mt-4 border-t border-gray-400/5">
              <button
                onClick={() => {
                  toggleLocale();
                  setMobileOpen(false);
                }}
                className={`w-full flex items-center justify-between p-4 rounded-2xl bg-gray-400/5 border border-gray-400/10 group hover:border-[#a78bfa]/30 transition-all ${isArabic ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`flex items-center gap-4 ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#db2777] flex items-center justify-center">
                    <span className="text-sm font-black text-white">
                      {isArabic ? "EN" : "AR"}
                    </span>
                  </div>
                  <div className={isArabic ? "text-right" : "text-left"}>
                    <p className="text-xs font-bold text-white uppercase -widest">
                      {isArabic ? "Switch to" : "التبديل إلى"}
                    </p>
                    <p className="text-base font-bold text-white">
                      {isArabic ? "English" : "العربية"}
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-white ${isArabic ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
