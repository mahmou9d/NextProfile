"use client";
import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { LocaleContext } from "./LocaleContext";


const Approach = () => {
  const { locale, setLocale } = useContext(LocaleContext);

  const isAr = locale === "AR";

  return (
    <section className="w-full py-20" dir={isAr ? "rtl" : "ltr"}>
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

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* Card 1 */}
        <Card
          title={isAr ? "التخطيط والاستراتيجية" : "Planning & Strategy"}
          icon={<AceternityIcon order={isAr ? "تخطيط" : "Planning"} />}
          des={
            isAr
              ? "نحدد أهداف موقعك وجمهورك ونرتب المحتوى والهيكل لضمان أساس قوي."
              : "Collaborate to define website objectives, audience, and structure."
          }
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>

        {/* Card 2 */}
        <Card
          title={
            isAr ? "التطوير والتحديث المستمر" : "Development & Progress Update"
          }
          icon={<AceternityIcon order={isAr ? "تطوير" : "Development"} />}
          des={
            isAr
              ? "نحوّل التصميم إلى كود تفاعلي ونعطيك تحديثات مستمرة طوال العمل."
              : "Transform designs into responsive code with clear communication."
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

        {/* Card 3 */}
        <Card
          title={isAr ? "الاختبار والإطلاق" : "Testing & Launch"}
          icon={<AceternityIcon order={isAr ? "إطلاق" : "Launch"} />}
          des={
            isAr
              ? "نختبر الموقع ونحسّن الأداء ونطلقه بأفضل جودة وتجربة للمستخدم."
              : "Test, optimize, and launch your website with seamless performance."
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
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="  group/canvas-card flex items-center justify-center
       dark:  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl bg-blue-200 dark:bg-[rgb(4,7,29)]"
      style={{
        // background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
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

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[2px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
     bg-[conic-gradient(from_90deg_at_50%_50%,#1E3A8A_0%,#00C3FF_100%)]"
        />

        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-blue-400 backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

// "use client";

// import React, { useState, useEffect, useContext } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
// import { LocaleContext } from "./LocaleContext";

// const Approach = () => {
//   const { locale, setLocale } = useContext(LocaleContext);
//   const cards = [
//     {
//       titleEN: "Planning & Strategy",
//       titleAR: "التخطيط والاستراتيجية",
//       desEN:
//         "Collaborate to define your website's objectives, target audience, and essential features. We'll finalize site structure, navigation flow, and content requirements to ensure a solid foundation.",
//       desAR:
//         "التعاون لتحديد أهداف موقعك والجمهور المستهدف والميزات الأساسية. سنضع الهيكل النهائي للموقع، تدفق التنقل ومتطلبات المحتوى لضمان أساس قوي.",
//       colors: { bg: "bg-emerald-100", darkBg: "dark:bg-emerald-900" },
//       animationSpeed: 5.1,
//     },
//     {
//       titleEN: "Development & Progress Update",
//       titleAR: "التطوير وتحديث التقدم",
//       desEN:
//         "Transform designs into interactive and responsive code. We maintain clear communication and provide regular updates to ensure your vision is accurately implemented at every stage.",
//       desAR:
//         "تحويل التصاميم إلى أكواد تفاعلية ومتجاوبة. نحافظ على تواصل واضح ونقدم تحديثات منتظمة لضمان تنفيذ رؤيتك بدقة في كل مرحلة.",
//       colors: { bg: "bg-pink-100", darkBg: "dark:bg-pink-900" },
//       animationSpeed: 3,
//     },
//     {
//       titleEN: "Testing & Launch",
//       titleAR: "الاختبار والإطلاق",
//       desEN:
//         "Conduct thorough testing, optimize performance, and deploy your website seamlessly. We ensure your site runs smoothly, is fully responsive, and provides an exceptional user experience from day one.",
//       desAR:
//         "إجراء اختبارات دقيقة، تحسين الأداء، وإطلاق موقعك بسلاسة. نضمن أن يعمل موقعك بشكل سلس، متجاوب بالكامل، ويوفر تجربة مستخدم استثنائية من اليوم الأول.",
//       colors: { bg: "bg-sky-100", darkBg: "dark:bg-sky-600" },
//       animationSpeed: 3,
//     },
//   ];

//   return (
//     <section className="w-full py-20 bg-gray-50 dark:bg-transparent transition-colors duration-300">
//       <div className="text-center mb-16 relative">
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <div className="w-48 h-48 bg-white/70 dark:bg-blue-500/20 blur-3xl rounded-full animate-pulse transition-all" />
//         </div>

//         <p className="text-sm tracking-widest font-semibold uppercase relative z-10 text-blue-700 dark:text-blue-400">
//           {locale === "AR" ? "كيف نعمل" : "How We Work"}
//         </p>

//         <h1 className="text-4xl md:text-5xl font-extrabold mt-2 relative z-10 leading-tight text-blue-700 dark:text-blue-400">
//           {locale === "AR" ? "نهجي" : "My"}{" "}
//           <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
//             {locale === "AR" ? "النهج" : "approach"}
//           </span>
//         </h1>

//         <div className="mt-4 mx-auto w-32 h-1 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-cyan-400 dark:to-blue-500" />
//       </div>

//       <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 px-4">
//         {cards.map((card, idx) => (
//           <Card
//             key={idx}
//             title={locale === "AR" ? card.titleAR : card.titleEN}
//             des={locale === "AR" ? card.desAR : card.desEN}
//             animationSpeed={card.animationSpeed}
//             colors={card.colors}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Approach;

// const Card = ({
//   title,
//   des,
//   children,
//   animationSpeed,
//   colors,
// }: {
//   title: string;
//   des: string;
//   children?: React.ReactNode;
//   animationSpeed?: number;
//   colors?: { bg: string; darkBg: string };
// }) => {
//   const [hovered, setHovered] = React.useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl
//         bg-white text-black shadow-lg
//         dark:bg-[rgb(4,7,29)] dark:text-white
//         transition-all duration-300"
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
//         <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
//           {children}
//         </div>

//         <h2 className="text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 mt-4 font-bold text-black dark:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
//           {title}
//         </h2>

//         <p className="text-sm opacity-0 group-hover/canvas-card:opacity-100 mt-4 text-center transition duration-200 text-gray-600 dark:text-[#E4ECFF] group-hover/canvas-card:-translate-y-2">
//           {des}
//         </p>
//       </div>
//     </div>
//   );
// };

// "use client";

// import React from "react";
// import { AnimatePresence, motion } from "framer-motion";

// import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

// const Approach = () => {
//   return (
//     <section className="w-full py-20 bg-gray-50 dark:bg-transparent transition-colors duration-300">
//       <div className="text-center mb-16 relative">
//         {/* Glow Behind Title */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//           <div className="w-48 h-48 bg-white/70 dark:bg-blue-500/20 blur-3xl rounded-full animate-pulse transition-all" />
//         </div>

//         {/* Sub Title */}
//         <p className="text-sm tracking-widest font-semibold uppercase relative z-10 text-blue-700 dark:text-blue-400">
//           How We Work
//         </p>

//         {/* Main Title */}
//         <h1 className="text-4xl md:text-5xl font-extrabold mt-2 relative z-10 leading-tight text-blue-700 dark:text-blue-400">
//           My{" "}
//           <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
//             approach
//           </span>
//         </h1>

//         {/* Underline Decor */}
//         <div className="mt-4 mx-auto w-32 h-1 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-cyan-400 dark:to-blue-500" />
//       </div>

//       {/* Cards */}
//       <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 px-4">
//         <Card
//           title="Planning & Strategy"
//           icon={<AceternityIcon order="Planning" />}
//           des="Collaborate to define your website's objectives, target audience, and essential features. We'll finalize site structure, navigation flow, and content requirements to ensure a solid foundation."
//         >
//           <CanvasRevealEffect
//             animationSpeed={5.1}
//             containerClassName="bg-emerald-100 dark:bg-emerald-900 rounded-3xl overflow-hidden"
//           />
//         </Card>

//         <Card
//           title="Development & Progress Update"
//           icon={<AceternityIcon order="Development" />}
//           des="Transform designs into interactive and responsive code. We maintain clear communication and provide regular updates to ensure your vision is accurately implemented at every stage."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-pink-100 dark:bg-pink-900 rounded-3xl overflow-hidden"
//             colors={[
//               [255, 166, 158],
//               [221, 255, 247],
//             ]}
//             dotSize={2}
//           />
//         </Card>

//         <Card
//           title="Testing & Launch"
//           icon={<AceternityIcon order="Launch" />}
//           des="Conduct thorough testing, optimize performance, and deploy your website seamlessly. We ensure your site runs smoothly, is fully responsive, and provides an exceptional user experience from day one."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-sky-100 dark:bg-sky-600 rounded-3xl overflow-hidden"
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
//       className="group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl
//         bg-white text-black shadow-lg
//         dark:bg-[rgb(4,7,29)] dark:text-white
//         transition-all duration-300"
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
//           className="text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 mt-4 font-bold
//             text-black group-hover/canvas-card:text-black
//             dark:text-white dark:group-hover/canvas-card:text-white
//             group-hover/canvas-card:-translate-y-2 transition duration-200"
//         >
//           {title}
//         </h2>

//         <p
//           className="text-sm opacity-0 group-hover/canvas-card:opacity-100 mt-4 text-center transition duration-200
//             text-gray-600 group-hover/canvas-card:text-gray-700
//             dark:text-[#E4ECFF] dark:group-hover/canvas-card:text-white
//             group-hover/canvas-card:-translate-y-2"
//         >
//           {des}
//         </p>
//       </div>
//     </div>
//   );
// };

// const AceternityIcon = ({ order }: { order: string }) => {
//   return (
//     <div>
//       <button className="relative inline-flex overflow-hidden rounded-full p-[2px]">
//         <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1E3A8A_0%,#00C3FF_100%)]" />
//         <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-50 dark:bg-slate-950 px-5 py-2 text-blue-700 dark:text-blue-400 backdrop-blur-3xl font-bold text-2xl">
//           {order}
//         </span>
//       </button>
//     </div>
//   );
// };
