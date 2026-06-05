"use client";
import { useState, useEffect, useRef, MouseEvent } from "react";
import { useTranslation } from "@/components/Usetranslation";
import Title from "./Title";

const Approach = () => {
  const { t, isArabic, dir } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 overflow-hidden bg-[#080810]"
      dir={dir}
    >
      {/* Background Glows - Matching Hero */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#7c3aed]/10 blur-[120px] rounded-full pointer-events-none animate-[pulse_12s_infinite]" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-[#db2777]/10 blur-[100px] rounded-full pointer-events-none animate-[pulse_10s_infinite_1s]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <Title
          subtitle={t.approach.subtitle}
          title1={t.approach.title1}
          title2={t.approach.title2}
          description={
            isArabic
              ? "خطوات مدروسة لتحويل رؤيتك إلى واقع رقمي ملموس"
              : "Strategic steps to turn your vision into a tangible digital reality"
          }
          title3={null}
        />

        {/* Approach Steps Grid - Glass Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.approach.cards.map((card, index) => (
            <div
              key={index}
              onMouseMove={handleMouseMove}
              className={`group relative p-[1px] rounded-[2.5rem] overflow-hidden transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-24"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Animated Border Shine */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 group-hover:from-[#a78bfa]/50 group-hover:to-[#f472b6]/50 transition-colors duration-500" />

              {/* Card Body */}
              <div className="relative h-full min-h-[420px] p-10 rounded-[2.5rem] bg-[#0c0c14]/90 backdrop-blur-3xl flex flex-col border border-white/5">
                {/* Spotlight Overlay */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(167, 139, 250, 0.1), transparent 40%)`,
                  }}
                />

                {/* Noise Effect */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    {/* Step Number Badge */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#a78bfa] to-[#f472b6] shadow-[0_0_30px_-5px_rgba(167,139,250,0.5)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <span className="font-syne text-2xl font-black text-white">
                        {card.number}
                      </span>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                        {card.iconText}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`space-y-6 ${isArabic ? "text-right" : "text-left"}`}
                  >
                    <h3 className="font-syne text-3xl font-extrabold text-white tracking-tight group-hover:text-[#a78bfa] transition-colors duration-500">
                      {card.title}
                    </h3>

                    <div className="w-12 h-[2px] bg-gradient-to-r from-[#a78bfa] to-transparent group-hover:w-20 transition-all duration-500" />

                    <p
                      className={`text-gray-400 text-lg leading-relaxed ${isArabic ? "font-cairo" : "font-medium"}`}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider matching other sections */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Approach;
