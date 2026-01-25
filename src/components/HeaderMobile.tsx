import Link from "next/link";
import React, { JSX } from "react";


interface NavItem {
  name: {
    EN: string;
    AR: string;
  };
  link: string;
  icon?: JSX.Element;
}

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
  locale: string;
  toggleLocale: () => void;
}) => {

  return (
    <div>
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-800/50 backdrop-blur-xl bg-black/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <nav className="py-6 space-y-2">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  onClick={() => setMobileOpen(false)}
                  className="group relative block overflow-hidden"
                >
                  <div className="relative px-5 py-4 rounded-xl transition-all duration-300">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-pink-500/20 group-hover:to-blue-500/20 rounded-xl transition-all duration-500" />

                    {/* Border Glow */}
                    <div className="absolute inset-0 border border-gray-800/50 group-hover:border-blue-500/30 rounded-xl transition-all duration-300" />

                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 group-hover:scale-150 transition-all duration-300" />
                        <span className="text-base font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
                          {locale === "EN" ? item.name.EN : item.name.AR}
                        </span>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all duration-300"
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
              ))}

              {/* Mobile Language Toggle - Premium */}
              <div className="group relative mt-6 pt-6 border-t border-gray-800/50">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-70 transition-all duration-500" />

                <button
                  onClick={toggleLocale}
                  className="relative w-full overflow-hidden rounded-2xl"
                >
                  <div className="relative flex items-center justify-between px-6 py-5 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 group-hover:border-transparent rounded-2xl transition-all duration-300">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-pink-600/0 to-blue-600/0 group-hover:from-blue-600/30 group-hover:via-pink-600/30 group-hover:to-blue-600/30 transition-all duration-500" />

                    <div className="relative flex items-center gap-4">
                      {/* Icon */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
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

                      {/* Text */}
                      <div className="text-left">
                        <p className="text-xs text-gray-500 font-semibold mb-0.5">
                          {locale === "AR" ? "Switch to" : "التبديل إلى"}
                        </p>
                        <p className="text-lg font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                          {locale === "AR" ? "English" : "العربية"}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <svg
                      className="relative w-6 h-6 text-gray-500 group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all duration-300"
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
