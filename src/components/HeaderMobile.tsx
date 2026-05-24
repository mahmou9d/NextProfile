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
          className="md:hidden border-t border-gray-800/50 bg-black/95 backdrop-blur-sm"
        >
          <div className="px-4 sm:px-6">
            <nav className="py-4 space-y-1">
              {navItems.map((item, idx) => {
                const href = item.link.startsWith("/")
                  ? `/${isArabic ? "ar" : "en"}${item.link}`
                  : item.link;

                return (
                  <Link
                    key={idx}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
                  >
                    <span className="text-base font-medium text-gray-300 hover:text-white transition-colors">
                      {locale === "EN" ? item.name.EN : item.name.AR}
                    </span>
                  </Link>
                );
              })}

              <div className="mt-6 pt-6 border-t border-gray-800/50">
                <button
                  onClick={toggleLocale}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5 text-gray-400"
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
                  <span className="text-sm font-medium text-gray-300 hover:text-white">
                    {locale === "AR" ? "English" : "العربية"}
                  </span>
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
