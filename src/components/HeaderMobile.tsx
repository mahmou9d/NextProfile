import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { NavItem } from "../../types/type";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          ref={menuRef}
          className="md:hidden absolute top-full left-0 right-0 border-t border-white/10 bg-black/95 backdrop-blur-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 sm:px-6">
            <nav className="py-4 space-y-1">
              {navItems.map((item, idx) => {
                const href = item.link.startsWith("/")
                  ? `/${isArabic ? "ar" : "en"}${item.link}`
                  : item.link;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {locale === "EN" ? item.name.EN : item.name.AR}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                className="mt-6 pt-6 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <button
                  onClick={toggleLocale}
                  className="w-full px-4 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white/60 hover:text-white transition-all flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
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
                  <span className="text-sm font-medium">
                    {locale === "AR" ? "English" : "العربية"}
                  </span>
                </button>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderMobile;
