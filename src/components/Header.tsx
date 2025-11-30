"use client";
import React, { useState, useEffect, JSX, useContext } from "react";
import Link from "next/link";
import { FaMoon, FaSun, FaBars, FaXmark } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { LocaleContext } from "./LocaleContext";
import Image from "next/image";

interface NavItem {
  name: {
    EN: string;
    AR: string;
  };
  link: string;
  icon?: JSX.Element;
}

const Header = ({ navItems }: { navItems: NavItem[] }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale } = useContext(LocaleContext);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleLocale = () => setLocale(locale === "AR" ? "EN" : "AR");
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <header
      className={`fixed top-0 z-[1000] w-full backdrop-blur-3xl shadow-lg transition-colors duration-300
bg-white/80 
          dark:bg-transparent `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-1">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-3">
          {theme === "dark" ? (
            <Image
              src="/logo2.png"
              alt="Logo"
              width={104}
              height={72}
              className="h-[4.5rem] w-[6.5rem]"
              priority
            />
          ) : (
            <Image
              src="/logo.png"
              alt="Logo"
              width={104}
              height={72}
              className="h-[4.5rem] w-[6.5rem]"
              priority
            />
          )}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`relative group text-sm md:text-base transition-colors
                text-gray-900 hover:text-blue-600
                    dark:text-gray-200 hover:dark:text-blue-400
                `}
            >
              {item.icon && <span className="mr-1">{item.icon}</span>}
              {locale === "EN" ? item.name.EN : item.name.AR}

              <span
                className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all group-hover:w-full
                bg-blue-600 dark:bg-blue-400`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme}>
            {theme === "dark" ? <FaMoon /> : <FaSun />}
          </button>

          <button
            onClick={toggleLocale}
            className={`flex items-center justify-center px-4 h-12 rounded-2xl font-semibold text-sm transition-all duration-300
              bg-gray-100 border border-blue-200 text-gray-900 hover:bg-gray-200 hover:border-blue-400 dark:bg-black/40 dark:border dark:border-blue-500/30 dark:text-white hover:dark:bg-black/60 hover:dark:border-blue-400
            `}
          >
            {locale === "AR" ? "EN" : "AR"}
          </button>

          {/* Mobile menu toggle */}
          <button onClick={toggleMobile} className="md:hidden">
            {mobileOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          className={`flex flex-col md:hidden py-4 px-6 space-y-4 transition-colors duration-300
            bg-white/95 dark:bg-black/90`}
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={`text-base transition
                  text-gray-900 hover:text-blue-600
                dark:text-white hover:dark:text-blue-400
                `}
            >
              {locale === "EN" ? item.name.EN : item.name.AR}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;

// "use client";
// import React, { useState, useEffect, JSX } from "react";
// import Link from "next/link";
// import { FaMoon, FaSun, FaBars, FaXmark } from "react-icons/fa6";
// import { useTheme } from "next-themes";

// interface NavItem {
//   name: {
//     EN:string
//     AR:string
//   }
//   link: string;
//   icon?: JSX.Element;
// }

// const Header = ({ navItems }: { navItems: NavItem[] }) => {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const [locale, setLocale] = useState("EN");
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => setMounted(true), []);

//   // تغيير اتجاه الصفحة حسب اللغة
//   useEffect(() => {
//     if (locale === "AR") {
//       document.documentElement.dir = "rtl";
//     } else {
//       document.documentElement.dir = "ltr";
//     }
//   }, [locale]);

//   if (!mounted) return null;

//   const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
//   const toggleLocale = () => setLocale(locale === "EN" ? "AR" : "EN");
//   const toggleMobile = () => setMobileOpen(!mobileOpen);

//   return (
//     <header
//       className={`fixed top-0 z-[1000] w-full backdrop-blur-xl shadow-lg border-b transition-colors duration-300
//       ${
//         theme === "light"
//           ? "bg-white/80 border-blue-200/50"
//           : "bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-gray-900/80 border-blue-500/10"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-1">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img
//             src={theme === "dark" ? "/logo2.png" : "/logo.png"}
//             alt="Logo"
//             className="h-[4.5rem] w-[6.5rem]"
//             loading="lazy"
//           />
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-10">
//           {navItems.map((item, idx) => (
//             <Link
//               key={idx}
//               href={item.link}
//               className={`relative group text-sm md:text-base transition-colors
//                 ${
//                   theme === "light"
//                     ? "text-gray-900 hover:text-blue-600"
//                     : "text-gray-200 hover:text-blue-400"
//                 }`}
//             >
//               {item.icon && <span className="mr-1">{item.icon}</span>}
//               {locale === "EN" ? item.name.EN : item.name.AR}
//               <span
//                 className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all group-hover:w-full
//                 ${theme === "light" ? "bg-blue-600" : "bg-blue-400"}`}
//               ></span>
//             </Link>
//           ))}
//         </nav>

//         {/* Right Controls */}
//         <div className="flex items-center gap-4">
//           <button onClick={toggleTheme} className="...">
//             {theme === "dark" ? <FaMoon /> : <FaSun />}
//           </button>

//           <button
//             onClick={toggleLocale}
//             className={`flex items-center justify-center px-4 h-12 rounded-2xl font-semibold text-sm transition-all duration-300
//               ${
//                 theme === "light"
//                   ? "bg-gray-100 border border-blue-200 text-gray-900 hover:bg-gray-200 hover:border-blue-400"
//                   : "bg-black/40 border border-blue-500/30 text-white hover:bg-black/60 hover:border-blue-400"
//               }
//             `}
//           >
//             {locale}
//           </button>

//           {/* Mobile Menu Toggle */}
//           <button onClick={toggleMobile} className={`md:hidden ...`}>
//             {mobileOpen ? <FaXmark /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <nav
//           className={`flex flex-col md:hidden py-4 px-6 space-y-4 transition-colors duration-300
//             ${theme === "light" ? "bg-white/95" : "bg-black/90"}`}
//         >
//           {navItems.map((item, idx) => (
//             <Link
//               key={idx}
//               href={item.link}
//               className={`text-base transition
//                 ${
//                   theme === "light"
//                     ? "text-gray-900 hover:text-blue-600"
//                     : "text-white hover:text-blue-400"
//                 }`}
//             >
//               {locale === "EN" ? item.name.EN : item.name.AR}
//             </Link>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;
