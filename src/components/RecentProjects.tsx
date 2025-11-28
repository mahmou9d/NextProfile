"use client";

import { useState, useEffect, useContext } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { LocaleContext } from "./LocaleContext";

const RecentProjects = () => {
  const { locale, setLocale } = useContext(LocaleContext);

  return (
    <div
      className="
        bg-gray-50 
        dark:bg-transparent
        transition-colors duration-300
      "
      dir={locale === "AR" ? "rtl" : "ltr"}
    >
      <div className="text-center mb-20 relative">
        {/* Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="
          w-60 h-60 
          bg-gray-50
          dark:bg-blue-500/20 
          blur-[150px] 
          rounded-full 
          animate-pulse 
          transition-all
        "
          ></div>
        </div>

        {/* Sub Title */}
        <p
          className="
        text-sm tracking-widest font-semibold uppercase relative z-10
        text-blue-700 
        dark:text-blue-400
      "
        >
          {locale === "AR" ? "حلول ويب مميزة" : "Premium Web Solutions"}
        </p>

        {/* Main Title */}
        <h1
          className="
        text-4xl md:text-5xl font-extrabold mt-3 relative z-10 leading-tight
        bg-gradient-to-r 
        from-blue-600 via-cyan-500 to-teal-500
        dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300
        bg-clip-text text-transparent drop-shadow-xl
      "
        >
          {locale === "AR" ? (
            <>
              مجموعة مختارة من{" "}
              <span
                className="
              bg-gradient-to-r 
              from-blue-600 via-cyan-500 to-teal-500
              dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300
              bg-clip-text text-transparent drop-shadow-xl
            "
              >
                أحدث مواقعنا
              </span>
            </>
          ) : (
            <>
              A curated selection of{" "}
              <span
                className="
              bg-gradient-to-r 
              from-blue-600 via-cyan-500 to-teal-500
              dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300
              bg-clip-text text-transparent drop-shadow-xl
            "
              >
                our latest websites
              </span>
            </>
          )}
        </h1>

        <div
          className="
        mt-4 mx-auto w-32 h-1 rounded-full
        bg-gradient-to-r from-blue-500 to-cyan-400
        dark:from-cyan-400 dark:to-blue-500
        shadow-lg
      "
        ></div>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
        {projects.map((item) => (
          <div
            className="
              lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-start 
              sm:w-[28rem] w-[80vw] 
              transition-transform duration-500 hover:scale-105
            "
            key={item.id}
          >
            <PinContainer title="Live Site" href={item.link}>
              {/* Image */}
              <div
                className="
                  relative flex items-center justify-center 
                  sm:w-[28rem] w-[80vw] 
                  overflow-hidden 
                  h-[20vh] lg:h-[26vh] 
                  mb-6 rounded-3xl 
                  shadow-xl 
                  group
                  bg-gray-100 
                  dark:bg-[#13162D]
                  transition-all
                "
              >
                <img
                  src={item.img}
                  alt={locale === "AR" ? item.title.AR : item.title.EN}
                  className="
                    z-10 absolute bottom-0 
                    w-full object-contain 
                    transition-transform duration-500 
                    group-hover:-translate-y-2 
                    group-hover:scale-105
                  "
                  loading="lazy"
                  fetchPriority="high"
                />
              </div>

              {/* Title */}
              <h1
                className="
                  font-extrabold lg:text-2xl md:text-xl text-base 
                  text-gray-900 
                  dark:text-white
                  line-clamp-1
                "
              >
                {locale === "AR" ? item.title.AR : item.title.EN}
              </h1>

              {/* Description */}
              <p
                className="
                  lg:text-lg md:text-sm text-sm 
                  text-gray-600 
                  dark:text-gray-300 
                  mt-2 line-clamp-3
                "
              >
                {locale === "AR" ? item.des.AR : item.des.EN}
              </p>

              {/* Button */}
              <div className="flex items-center justify-center mt-5">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 px-5 py-2 rounded-xl 
                    bg-gradient-to-r 
                    from-blue-600 via-cyan-500 to-teal-600
                    dark:from-blue-800 dark:via-cyan-600 dark:to-teal-800
                    text-white font-semibold text-sm 
                    hover:scale-105 hover:brightness-110 
                    transition-all shadow-lg
                  "
                >
                  <span>
                    {locale === "AR" ? "عرض الموقع" : "Check Live Site"}
                  </span>
                  <FaLocationArrow />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

// "use client";

// import { FaLocationArrow } from "react-icons/fa6";
// import { projects } from "@/data";
// import { PinContainer } from "./ui/Pin";

// const RecentProjects = () => {
//   return (
//     <div
//       className="
//         bg-gray-50
//         dark:bg-transparent
//         transition-colors duration-300
//       "
//     >
//       <div className="text-center mb-20 relative">
//         {/* Glow Behind Title */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <div
//             className="
//               w-60 h-60
//               bg-gray-50
//               dark:bg-blue-500/20
//               blur-[150px]
//               rounded-full
//               animate-pulse
//               transition-all
//             "
//           ></div>
//         </div>

//         {/* Sub Title */}
//         <p
//           className="
//             text-sm tracking-widest font-semibold uppercase relative z-10
//             text-blue-700
//             dark:text-blue-400
//           "
//         >
//           Premium Web Solutions
//         </p>

//         {/* Main Title */}
//         <h1
//           className="
//             text-4xl md:text-5xl font-extrabold mt-3 relative z-10 leading-tight
//             bg-gradient-to-r
//             from-blue-600 via-cyan-500 to-teal-500
//             dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300
//             bg-clip-text text-transparent drop-shadow-xl
//           "
//         >
//           A curated selection of{" "}
//           <span
//             className="
//               bg-gradient-to-r
//               from-blue-600 via-cyan-500 to-teal-500
//               dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300
//               bg-clip-text text-transparent drop-shadow-xl
//             "
//           >
//             our latest websites
//           </span>
//         </h1>

//         {/* Underline Decor */}
//         <div
//           className="
//             mt-4 mx-auto w-32 h-1 rounded-full
//             bg-gradient-to-r from-blue-500 to-cyan-400
//             dark:from-cyan-400 dark:to-blue-500
//             shadow-lg
//           "
//         ></div>
//       </div>

//       {/* Projects Grid */}
//       <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
//         {projects.map((item) => (
//           <div
//             className="
//               lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-start
//               sm:w-[28rem] w-[80vw]
//               transition-transform duration-500 hover:scale-105
//             "
//             key={item.id}
//           >
//             <PinContainer title="Live Site" href={item.link}>
//               {/* Image Container */}
//               <div
//                 className="
//                   relative flex items-center justify-center
//                   sm:w-[28rem] w-[80vw]
//                   overflow-hidden
//                   h-[20vh] lg:h-[26vh]
//                   mb-6 rounded-3xl
//                   shadow-xl
//                   group
//                   bg-gray-100
//                   dark:bg-[#13162D]
//                   transition-all
//                 "
//               >
//                 {/* Project Image */}
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="
//                     z-10 absolute bottom-0
//                     w-full object-contain
//                     transition-transform duration-500
//                     group-hover:-translate-y-2
//                     group-hover:scale-105
//                   "
//                   loading="lazy"
//                 />
//               </div>

//               {/* Title */}
//               <h1
//                 className="
//                   font-extrabold lg:text-2xl md:text-xl text-base
//                   text-gray-900
//                   dark:text-white
//                   line-clamp-1
//                 "
//               >
//                 {item.title}
//               </h1>

//               {/* Description */}
//               <p
//                 className="
//                   lg:text-lg md:text-sm text-sm
//                   text-gray-600
//                   dark:text-gray-300
//                   mt-2 line-clamp-3
//                 "
//               >
//                 {item.des}
//               </p>

//               {/* CTA Button */}
//               <div className="flex items-center justify-center mt-5">
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="
//                     flex items-center gap-2 px-5 py-2 rounded-xl
//                     bg-gradient-to-r
//                     from-blue-600 via-cyan-500 to-teal-600
//                     dark:from-blue-800 dark:via-cyan-600 dark:to-teal-800
//                     text-white font-semibold text-sm
//                     hover:scale-105 hover:brightness-110
//                     transition-all shadow-lg
//                   "
//                 >
//                   <span>Check Live Site</span>
//                   <FaLocationArrow />
//                 </a>
//               </div>
//             </PinContainer>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;
