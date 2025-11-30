"use client";
import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { LocaleContext } from "./LocaleContext";
import Script from "next/script";

// Metadata يمكن وضعه في صفحة Next.js 13+ أو app/approach/page.tsx
export const metadata = {
  title: "WebDouble | Approach & Work Methodology",
  description:
    "Discover our professional approach to web development, including planning, strategy, development, updates, and testing for high-quality websites.",
  alternates: {
    canonical: "https://yourdomain.com/approach",
  },
  openGraph: {
    title: "WebDouble | Our Work Approach",
    description:
      "Professional web development methodology including planning, development, updates, and launch.",
    url: "https://yourdomain.com/approach",
    siteName: "WebDouble",
    images: [
      {
        url: "/og-approach.png",
        width: 1200,
        height: 630,
        alt: "WebDouble Approach",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebDouble | Approach",
    description:
      "Discover our professional web development methodology for best results.",
    images: ["/og-approach.png"],
  },
};

const Approach = () => {
  const { locale } = useContext(LocaleContext);
  const isAr = locale === "AR";

  return (
    <section
      id="about"
      aria-label={isAr ? "منهجية العمل" : "Our Work Approach"}
      className="w-full py-20"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Structured Data JSON-LD */}
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: isAr ? "منهجية العمل" : "Our Work Approach",
          description: isAr
            ? "نقدم منهجية احترافية لتطوير المواقع تشمل التخطيط، التطوير، التحديث، الاختبار، والإطلاق."
            : "Our professional approach to web development includes planning, development, updates, testing, and launch.",
          step: [
            {
              "@type": "HowToStep",
              name: isAr ? "التخطيط والاستراتيجية" : "Planning & Strategy",
              text: isAr
                ? "نحدد أهداف موقعك وجمهورك ونرتب المحتوى والهيكل لضمان أساس قوي."
                : "Define website goals, audience, and structure.",
            },
            {
              "@type": "HowToStep",
              name: isAr ? "التطوير والتحديث المستمر" : "Development & Updates",
              text: isAr
                ? "نحوّل التصميم إلى كود تفاعلي ونعطيك تحديثات مستمرة طوال العمل."
                : "Convert designs into interactive code with continuous updates.",
            },
            {
              "@type": "HowToStep",
              name: isAr ? "الاختبار والإطلاق" : "Testing & Launch",
              text: isAr
                ? "نختبر الموقع ونحسّن الأداء ونطلقه بأفضل جودة وتجربة للمستخدم."
                : "Test, optimize, and launch the website for best performance.",
            },
          ],
        })}
      </Script>

      {/* SEO-friendly Header */}
      <div className="text-center mb-16 relative">
        {/* Sub Title */}
        <p className="text-sm tracking-widest text-blue-400 font-semibold uppercase relative z-10">
          {isAr ? "كيف نعمل" : "How We Work"}
        </p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl text-blue-400 font-extrabold mt-2 relative z-10 leading-tight">
          {isAr ? "منهجيتي" : "My"}{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
            {isAr ? "في العمل" : "approach"}
          </span>
        </h1>

        <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
      </div>

      {/* Cards Wrapper */}
      <div
        className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4"
        role="list"
      >
        <Card
          title={isAr ? "التخطيط والاستراتيجية" : "Planning & Strategy"}
          iconLabel={isAr ? "مرحلة التخطيط" : "Planning Phase"}
          icon={<AceternityIcon order={isAr ? "تخطيط" : "Planning"} />}
          des={
            isAr
              ? "نحدد أهداف موقعك وجمهورك ونرتب المحتوى والهيكل لضمان أساس قوي."
              : "We define your website goals, audience, and information structure."
          }
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>

        <Card
          title={isAr ? "التطوير والتحديث المستمر" : "Development & Updates"}
          iconLabel={isAr ? "مرحلة التطوير" : "Development Phase"}
          icon={<AceternityIcon order={isAr ? "تطوير" : "Development"} />}
          des={
            isAr
              ? "نحوّل التصميم إلى كود تفاعلي ونعطيك تحديثات مستمرة طوال العمل."
              : "We convert designs into interactive code with continuous updates."
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>

        <Card
          title={isAr ? "الاختبار والإطلاق" : "Testing & Launch"}
          iconLabel={isAr ? "مرحلة الإطلاق" : "Launch Phase"}
          icon={<AceternityIcon order={isAr ? "إطلاق" : "Launch"} />}
          des={
            isAr
              ? "نختبر الموقع ونحسّن الأداء ونطلقه بأفضل جودة وتجربة للمستخدم."
              : "We test, optimize, and launch your website for best performance."
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
  iconLabel,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  iconLabel: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <article
      role="listitem"
      aria-label={title}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl bg-blue-200 dark:bg-[rgb(4,7,29)]"
    >
      {/* Hover Effect */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 px-10 text-center">
        <div
          aria-label={iconLabel}
          role="img"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover/canvas-card:opacity-0 transition"
        >
          {icon}
        </div>

        <h3 className="text-3xl font-bold mt-4 dark:text-white text-black opacity-0 group-hover/canvas-card:opacity-100 transition">
          {title}
        </h3>

        <p className="text-sm mt-4 opacity-0 group-hover/canvas-card:opacity-100 text-[#E4ECFF] transition">
          {des}
        </p>
      </div>
    </article>
  );
};

const AceternityIcon = ({ order }: { order: string }) => (
  <button
    aria-label={order}
    className="relative inline-flex overflow-hidden rounded-full p-[2px]"
  >
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1E3A8A_0%,#00C3FF_100%)]" />
    <span className="inline-flex rounded-full bg-slate-950 px-5 py-2 text-blue-400 font-bold text-2xl backdrop-blur-3xl">
      {order}
    </span>
  </button>
);

// "use client";
// import React, { useContext } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
// import { LocaleContext } from "./LocaleContext";

// const Approach = () => {
//   const { locale, setLocale } = useContext(LocaleContext);

//   const isAr = locale === "AR";

//   return (
//     <section className="w-full py-20" dir={isAr ? "rtl" : "ltr"}>
//       <div className="text-center mb-16 relative">
//         {/* Sub Title */}
//         <p className="text-sm tracking-widest text-blue-400 font-semibold uppercase relative z-10">
//           {isAr ? "كيف نعمل" : "How We Work"}
//         </p>

//         {/* Main Title */}
//         <h1 className="text-4xl md:text-5xl text-blue-400 font-extrabold mt-2 relative z-10 leading-tight">
//           {isAr ? "منهجيتي" : "My"}{" "}
//           <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
//             {isAr ? "في العمل" : "approach"}
//           </span>
//         </h1>

//         <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
//       </div>

//       <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
//         {/* Card 1 */}
//         <Card
//           title={isAr ? "التخطيط والاستراتيجية" : "Planning & Strategy"}
//           icon={<AceternityIcon order={isAr ? "تخطيط" : "Planning"} />}
//           des={
//             isAr
//               ? "نحدد أهداف موقعك وجمهورك ونرتب المحتوى والهيكل لضمان أساس قوي."
//               : "Collaborate to define website objectives, audience, and structure."
//           }
//         >
//           <CanvasRevealEffect
//             animationSpeed={5.1}
//             containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
//           />
//         </Card>

//         {/* Card 2 */}
//         <Card
//           title={
//             isAr ? "التطوير والتحديث المستمر" : "Development & Progress Update"
//           }
//           icon={<AceternityIcon order={isAr ? "تطوير" : "Development"} />}
//           des={
//             isAr
//               ? "نحوّل التصميم إلى كود تفاعلي ونعطيك تحديثات مستمرة طوال العمل."
//               : "Transform designs into responsive code with clear communication."
//           }
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
//             colors={[
//               [255, 166, 158],
//               [221, 255, 247],
//             ]}
//             dotSize={2}
//           />
//         </Card>

//         {/* Card 3 */}
//         <Card
//           title={isAr ? "الاختبار والإطلاق" : "Testing & Launch"}
//           icon={<AceternityIcon order={isAr ? "إطلاق" : "Launch"} />}
//           des={
//             isAr
//               ? "نختبر الموقع ونحسّن الأداء ونطلقه بأفضل جودة وتجربة للمستخدم."
//               : "Test, optimize, and launch your website with seamless performance."
//           }
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//       </div>
//     </section>
//   );
// };

// export default Approach;

// const Card = ({
//   title,
//   icon,
//   children,
//   des,
// }: {
//   title: string;
//   icon: React.ReactNode;
//   children?: React.ReactNode;
//   des: string;
// }) => {
//   const [hovered, setHovered] = React.useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="  group/canvas-card flex items-center justify-center
//        dark:  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl bg-blue-200 dark:bg-[rgb(4,7,29)]"
//       style={{
//         // background: "rgb(4,7,29)",
//         backgroundColor:
//           "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//       }}
//     >
//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="h-full w-full absolute inset-0"
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="relative z-20 px-10">
//         <div
//           className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
//         group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
//         >
//           {icon}
//         </div>
//         <h2
//           // change text-3xl, add text-center
//           className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
//          relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white
//          group-hover/canvas-card:-translate-y-2 transition duration-200"
//         >
//           {title}
//         </h2>
//         {/* add this one for the description */}
//         <p
//           className="text-sm opacity-0 group-hover/canvas-card:opacity-100
//          relative z-10 mt-4 group-hover/canvas-card:text-white text-center
//          group-hover/canvas-card:-translate-y-2 transition duration-200"
//           style={{ color: "#E4ECFF" }}
//         >
//           {des}
//         </p>
//       </div>
//     </div>
//   );
// };
// // add order prop for the Phase number change
// const AceternityIcon = ({ order }: { order: string }) => {
//   return (
//     <div>
//       <button className="relative inline-flex overflow-hidden rounded-full p-[2px] ">
//         <span
//           className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
//      bg-[conic-gradient(from_90deg_at_50%_50%,#1E3A8A_0%,#00C3FF_100%)]"
//         />

//         <span
//           className="inline-flex h-full w-full cursor-pointer items-center
//         justify-center rounded-full bg-slate-950 px-5 py-2 text-blue-400 backdrop-blur-3xl font-bold text-2xl"
//         >
//           {order}
//         </span>
//       </button>
//     </div>
//   );
// };

// export const Icon = ({ className, ...rest }: any) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className={className}
//       {...rest}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//     </svg>
//   );
// };
