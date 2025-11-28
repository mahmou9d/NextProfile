"use client";
import { useTheme } from "next-themes";
import React, { useState, useEffect, useContext } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { LocaleContext } from "./LocaleContext";

const Footer = () => {
  const { theme } = useTheme();
  const { locale, setLocale } = useContext(LocaleContext);

  const linksEN = ["Home", "Services", "Portfolio", "Contact"];
  const linksAR = ["الرئيسية", "الخدمات", "أعمالنا", "اتصل بنا"];

  return (
    <footer
      dir={locale === "AR" ? "rtl" : "ltr"}
      className="w-full relative overflow-hidden py-16 px-5 lg:px-24 bg-gray-100 dark:bg-[#000824] transition-colors duration-300 text-gray-900 dark:text-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold">
            {theme === "dark" ? (
              <img
                src="/logo2.png"
                alt="Logo"
                className="h-[4.5rem] w-[6.5rem]"
                loading="lazy"
              />
            ) : (
              <img
                src="/logo.png"
                alt="Logo"
                className="h-[4.5rem] w-[6.5rem]"
                loading="lazy"
              />
            )}
          </h2>
          <p className="text-gray-700 dark:text-blue-200">
            {locale === "AR"
              ? "نحن نصنع مواقع وتطبيقات مذهلة تنمي عملك وترتقي بعلامتك التجارية."
              : "We build stunning websites and apps that grow your business and elevate your brand."}
          </p>
          <p className="text-gray-600 dark:text-blue-300">
            {locale === "AR"
              ? "© 2025 webdouble. جميع الحقوق محفوظة."
              : "© 2025 webdouble. All rights reserved."}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {locale === "AR" ? "روابط سريعة" : "Quick Links"}
          </h3>
          {(locale === "AR" ? linksAR : linksEN).map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {locale === "AR" ? "تواصل معنا" : "Contact"}
          </h3>
          <p className="text-gray-700 dark:text-blue-200">
            {locale === "AR" ? "الهاتف: 01009014597" : "Phone: 01009014597"}
          </p>
          <p className="text-gray-700 dark:text-blue-200">
            {locale === "AR"
              ? "البريد الإلكتروني: mohnud0987@gmail.com"
              : "Email: mohnud0987@gmail.com"}
          </p>
          <p className="text-gray-700 dark:text-blue-200">
            {locale === "AR"
              ? "الموقع: www.webagency.com"
              : "Website: www.webagency.com"}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {locale === "AR" ? "تابعنا" : "Follow Us"}
          </h3>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 hover:scale-110 transition-transform shadow-lg"
                >
                  <Icon className="text-white" size={20} />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// "use client";
// import { useTheme } from "next-themes";
// import React from "react";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

// const Footer = () => {
//   const { theme } = useTheme();
//   return (
//     <footer className="w-full relative overflow-hidden py-16 px-5 lg:px-24 bg-gray-100 dark:bg-[#000824] transition-colors duration-300 text-gray-900 dark:text-white">
//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
//         {/* Company Info */}
//         <div className="flex flex-col gap-4">
//           <h2 className="text-2xl font-extrabold">
//             {theme === "dark" ? (
//               <img
//                 src="/logo2.png"
//                 alt="Logo"
//                 className="h-[4.5rem] w-[6.5rem]"
//                 loading="lazy"
//               />
//             ) : (
//               <img
//                 src="/logo.png"
//                 alt="Logo"
//                 className="h-[4.5rem] w-[6.5rem]"
//                 loading="lazy"
//               />
//             )}
//           </h2>
//           <p className="text-gray-700 dark:text-blue-200">
//             We build stunning websites and apps that grow your business and
//             elevate your brand.
//           </p>
//           <p className="text-gray-600 dark:text-blue-300">
//             © 2025 webdouble. All rights reserved.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div className="flex flex-col gap-3">
//           <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
//             Quick Links
//           </h3>
//           {["Home", "Services", "Portfolio", "Contact"].map((link, idx) => (
//             <a
//               key={idx}
//               href="#"
//               className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
//             >
//               {link}
//             </a>
//           ))}
//         </div>

//         {/* Contact Info */}
//         <div className="flex flex-col gap-3">
//           <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
//             Contact
//           </h3>
//           <p className="text-gray-700 dark:text-blue-200">Phone: 01009014597</p>
//           <p className="text-gray-700 dark:text-blue-200">
//             Email: mohnud0987@gmail.com
//           </p>
//           <p className="text-gray-700 dark:text-blue-200">
//             Website: www.webagency.com
//           </p>
//         </div>

//         {/* Social Links */}
//         <div className="flex flex-col gap-4">
//           <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
//             Follow Us
//           </h3>
//           <div className="flex gap-4">
//             {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map(
//               (Icon, idx) => (
//                 <a
//                   key={idx}
//                   href="#"
//                   className="p-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 hover:scale-110 transition-transform shadow-lg"
//                 >
//                   <Icon className="text-white" size={20} />
//                 </a>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
