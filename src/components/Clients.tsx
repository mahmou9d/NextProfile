"use client";

import React, { useState, useEffect, useContext } from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { useTheme } from "next-themes";
import { LocaleContext } from "./LocaleContext";

const Clients = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
const { locale, setLocale } = useContext(LocaleContext);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="testimonials"
      className="
        bg-gray-50 
        dark:bg-transparent
        transition-colors duration-300
      "
    >
      <div className="text-center mb-16 relative">
        {/* Glow Behind Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="
              w-52 h-52 
              bg-white/80 
              dark:bg-blue-500/20 
              blur-[130px] 
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
          {locale === "AR" ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
        </p>

        {/* Main Title */}
        <h1
          className="
            text-4xl md:text-5xl font-extrabold mt-2 relative z-10 leading-tight
            text-blue-700
          "
        >
          {locale === "AR" ? (
            <>
              كلمات طيبة من{" "}
              <span
                className="
                  bg-gradient-to-r 
                  from-blue-600 via-cyan-500 to-teal-600
                  dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300
                  bg-clip-text text-transparent drop-shadow-xl
                "
              >
                عملائنا الراضين
              </span>
            </>
          ) : (
            <>
              Kind words from{" "}
              <span
                className="
                  bg-gradient-to-r 
                  from-blue-600 via-cyan-500 to-teal-600
                  dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300
                  bg-clip-text text-transparent drop-shadow-xl
                "
              >
                satisfied clients
              </span>
            </>
          )}
        </h1>

        {/* Underline Decor */}
        <div
          className="
            mt-4 mx-auto w-32 h-1 rounded-full shadow-lg
            bg-gradient-to-r from-blue-500 to-cyan-400
            dark:from-cyan-400 dark:to-blue-500
          "
        ></div>
      </div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="
            h-[50vh] md:h-[30rem] 
            rounded-md flex flex-col antialiased 
            items-center justify-center 
            relative overflow-hidden
            dark:bg-transparent
            transition-all
          "
        >
          <InfiniteMovingCards
            items={testimonials.map((t) => ({
              ...t,
              name: t.name,
              quote: locale === "AR"? t.quote.AR : t.quote.EN,
              title: locale === "AR"? t.title.AR : t.title.EN,
            }))}
            direction="right"
            speed="slow"
            className="bg-blue-200"
          />
        </div>

        {/* Companies Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div
                className="
                  flex md:max-w-60 max-w-32 gap-2 
                  opacity-90 
                  hover:opacity-100 
                  transition-all
                "
              >
                <img
                  src={
                    theme !== "dark"
                      ? [1, 2, 4].includes(company.id)
                        ? company.imgdark
                        : company.nameImg
                      : company.nameImg
                  }
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="w-16 md:w-20 transition-all"
                  loading="lazy"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

// "use client";

// import React from "react";

// import { companies, testimonials } from "@/data";
// import { InfiniteMovingCards } from "./ui/InfiniteCards";
// import { useTheme } from "next-themes";

// const Clients = () => {
//   const { theme } = useTheme();
//   return (
//     <section
//       id="testimonials"
//       className="
//         bg-gray-50
//         dark:bg-transparent
//         transition-colors duration-300
//       "
//     >
//       <div className="text-center mb-16 relative">
//         {/* Glow Behind Title */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <div
//             className="
//               w-52 h-52
//               bg-white/80
//               dark:bg-blue-500/20
//               blur-[130px]
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
//           What Our Clients Say
//         </p>

//         {/* Main Title */}
//         <h1
//           className="
//             text-4xl md:text-5xl font-extrabold mt-2 relative z-10 leading-tight
//             text-blue-700
//             dark:text-blue-400
//           "
//         >
//           Kind words from{" "}
//           <span
//             className="
//               bg-gradient-to-r
//               from-blue-600 via-cyan-500 to-teal-600
//               dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300
//               bg-clip-text text-transparent drop-shadow-xl
//             "
//           >
//             satisfied clients
//           </span>
//         </h1>

//         {/* Underline Decor */}
//         <div
//           className="
//             mt-4 mx-auto w-32 h-1 rounded-full shadow-lg
//             bg-gradient-to-r from-blue-500 to-cyan-400
//             dark:from-cyan-400 dark:to-blue-500
//           "
//         ></div>
//       </div>

//       <div className="flex flex-col   items-center max-lg:mt-10">
//         <div
//           className="
//             h-[50vh] md:h-[30rem]
//             rounded-md flex flex-col antialiased
//             items-center justify-center
//             relative overflow-hidden

//             dark:bg-transparent
//             transition-all
//           "
//         >
//           <InfiniteMovingCards
//             items={testimonials}
//             direction="right"
//             speed="slow"
//           />
//         </div>

//         {/* Companies Logos */}
//         <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
//           {companies.map((company) => (
//             <React.Fragment key={company.id}>
//               <div
//                 className="
//                   flex md:max-w-60 max-w-32 gap-2
//                   opacity-90
//                   hover:opacity-100
//                   transition-all
//                 "
//               >
//                 <img
//                   src={
//                     theme !== "dark"
//                       ? [1, 2, 4].includes(company.id)
//                         ? company.imgdark
//                         : company.nameImg
//                       : company.nameImg
//                   }
//                   alt={company.name}
//                   width={company.id === 4 || company.id === 5 ? 100 : 150}
//                   className="w-16 md:w-20 transition-all"
//                   loading="lazy"
//                 />
//               </div>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;
