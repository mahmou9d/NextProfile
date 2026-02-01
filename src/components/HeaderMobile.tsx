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
    <div>
      {mobileOpen && (
        <div
          ref={menuRef}
          className="md:hidden border-t border-gray-800/50 bg-black/80"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <nav className="py-6 space-y-2">
              {navItems.map((item, idx) => {
                const href = item.link.startsWith("/")
                  ? `/${isArabic ? "ar" : "en"}${item.link}`
                  : item.link;

                return (
                  <Link
                    key={idx}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="group relative block overflow-hidden"
                  >
                    <div className="relative px-5 py-4 rounded-xl">
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-base font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                            {locale === "EN" ? item.name.EN : item.name.AR}
                          </span>
                        </div>
                        <svg
                          className={`w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-all duration-300 ${
                            locale === "AR" ? "rotate-180" : ""
                          }`}
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
                      </div>
                    </div>
                  </Link>
                );
              })}

              <div className="group relative mt-6 pt-6 border-t border-gray-800/50">
                <button
                  onClick={toggleLocale}
                  className="relative w-full overflow-hidden rounded-2xl"
                >
                  <div className="relative flex items-center justify-between px-6 py-5 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 group-hover:border-transparent rounded-2xl transition-all duration-300">
                    <div className="relative flex items-center gap-4">
                      <div className="relative">
                        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                          <svg
                            className="w-6 h-6 text-white"
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

                      <div className="text-left">
                        <p className="text-xs text-gray-500 font-semibold mb-0.5">
                          {locale === "AR" ? "Switch to" : "التبديل إلى"}
                        </p>
                        <p className="text-lg font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                          {locale === "AR" ? "English" : "العربية"}
                        </p>
                      </div>
                    </div>

                    <svg
                      className={`relative w-6 h-6 text-gray-500 group-hover:text-blue-400 transition-all duration-300 ${
                        locale === "AR" ? "rotate-180" : ""
                      }`}
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
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;
