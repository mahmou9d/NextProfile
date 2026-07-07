"use client";
import { useState, useEffect, useRef, MouseEvent } from "react";
import { testimonials } from "@/data";
import Image from "next/image";
import Title from "./Title";
import { useTranslation } from "./Usetranslation";

const Clients = () => {
  const { t, isArabic } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll Reveal Logic
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

  // Interactive Spotlight Logic
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
      id="testimonials"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 overflow-hidden bg-[#080810]"
    >
      {/* Background Orbs - Using exact colors from Hero (#7c3aed = Violet 600) */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#7c3aed]/10 blur-[120px] rounded-full pointer-events-none animate-[pulse_10s_infinite]" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#db2777]/5 blur-[100px] rounded-full pointer-events-none animate-[pulse_15s_infinite_1s]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Title
          subtitle={t.clients.subtitle}
          title1={t.clients.title1}
          title2={t.clients.title2}
          description={
            isArabic
              ? "شهادات حقيقية من شركاء النجاح الذين وضعوا ثقتهم في حلولنا الرقمية"
              : "Real testimonials from partners who trusted our digital solutions"
          }
          title3={null}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.slice(0, 2).map((testimonial, index) => (
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
              {/* Animated Border Gradient - #a78bfa = Violet 400 (The Purple color you requested) */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 via-transparent to-gray-400/5 group-hover:from-[#a78bfa]/50 group-hover:to-[#f472b6]/50 transition-colors duration-500" />

              {/* Main Card Content */}
              <div className="relative h-full p-10 md:p-14 rounded-[2.5rem] bg-[#0c0c14]/90 backdrop-blur-3xl flex flex-col">
                {/* Spotlight Overlay */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(167, 139, 250, 0.15), transparent 40%)`,
                  }}
                />

                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#a78bfa]/10 border border-[#a78bfa]/20 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-3xl font-serif text-[#a78bfa] -none mt-2">
                        "
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#22d98a]/10 border border-[#22d98a]/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#22d98a] animate-pulse" />
                      <span className="text-[10px] font-bold text-[#22d98a] uppercase -widest">
                        {isArabic ? "موثق" : "Verified"}
                      </span>
                    </div>
                  </div>

                  <blockquote
                    className={`relative ${isArabic ? "text-right" : "text-left"}`}
                  >
                    <p
                      className={`text-gray-400/90 text-xl md:text-2xl font-medium -relaxed mb-14 italic ${isArabic ? "font-cairo" : "font-syne"}`}
                    >
                      "{isArabic ? testimonial.quote.AR : testimonial.quote.EN}"
                    </p>
                  </blockquote>

                  <div
                    className={`mt-auto flex items-center gap-5 pt-8 border-t border-gray-400/10 ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#a78bfa]/30 group-hover:border-[#a78bfa] transition-all duration-500">
                      <Image
                        src={testimonial.img || "/default-avatar.png"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className={isArabic ? "text-right" : "text-left"}>
                      <h4 className="font-syne text-base font-bold text-white -tight group-hover:text-[#a78bfa] transition-colors duration-500">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-base font-semibold uppercase -widest">
                        {isArabic ? testimonial.title.AR : testimonial.title.EN}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creative Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400/10 to-transparent" />
    </section>
  );
};

export default Clients;
