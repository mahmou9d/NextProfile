"use client";

import React, { useState, useEffect, useContext } from "react";
import dynamic from "next/dynamic";
import { companies, testimonials } from "@/data";
import { useTheme } from "next-themes";
import { LocaleContext } from "./LocaleContext";
import Script from "next/script";
import Image from "next/image";

// Lazy Load Infinite Cards
const InfiniteMovingCards = dynamic(
  () => import("./ui/InfiniteCards").then((m) => m.InfiniteMovingCards),
  {
    ssr: false,
    loading: () => (
      <div className="h-60 w-full animate-pulse bg-gray-200 rounded-xl" />
    ),
  }
);

export const metadata = {
  title: "WebDouble | Testimonials & Clients",
  description:
    "See real reviews from satisfied WebDouble clients. High-quality modern website development and eCommerce solutions.",
  openGraph: {
    title: "WebDouble | Testimonials",
    description:
      "Real client feedback about WebDouble’s web development services.",
    images: [{ url: "/og-testimonials.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebDouble Testimonials",
    description: "Customer reviews and testimonials for WebDouble.",
    images: ["/og-testimonials.png"],
  },
};

const Clients = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { locale } = useContext(LocaleContext);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Lazy translation
  const TR = {
    subtitle: locale === "AR" ? "ماذا يقول عملاؤنا" : "What Our Clients Say",
    title:
      locale === "AR"
        ? "كلمات طيبة من عملائنا الراضين"
        : "Kind words from satisfied clients",
  };

  return (
    <section
      id="testimonials"
      aria-label={TR.subtitle}
      className="bg-gray-50 dark:bg-transparent transition-colors duration-300"
    >
      {/* JSON-LD SEO */}
      <Script
        id="review-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: TR.subtitle,
          itemListElement: testimonials.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Review",
              author: t.name,
              reviewBody: locale === "AR" ? t.quote.AR : t.quote.EN,
              reviewRating: {
                "@type": "Rating",
                ratingValue: 5,
                bestRating: 5,
              },
            },
          })),
        })}
      </Script>

      {/* Title */}
      <div className="text-center mb-16 relative">
        {/* Glow Behind Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-52 h-52 bg-white/80 dark:bg-blue-500/20 blur-[130px] rounded-full animate-pulse transition-all"></div>
        </div>

        {/* Sub Title */}
        <p className="text-sm tracking-widest font-semibold uppercase relative z-10 text-blue-700 dark:text-blue-400">
          {locale === "AR" ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
        </p>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mt-2 relative z-10 leading-tight text-blue-700">
          {locale === "AR" ? (
            <>
              كلمات طيبة من{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent drop-shadow-xl">
                عملائنا الراضين
              </span>
            </>
          ) : (
            <>
              Kind words from{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent drop-shadow-xl">
                satisfied clients
              </span>
            </>
          )}
        </h1>

        {/* Underline */}
        <div className="mt-4 mx-auto w-32 h-1 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-cyan-400 dark:from-cyan-400 dark:to-blue-500"></div>
      </div>

      {/* Testimonials Slider */}
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials.map((t) => ({
              ...t,
              quote: locale === "AR" ? t.quote.AR : t.quote.EN,
              title: locale === "AR" ? t.title.AR : t.title.EN,
            }))}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
          {companies.map((company) => {
            const src =
              theme !== "dark"
                ? [1, 2, 4].includes(company.id)
                  ? company.imgdark
                  : company.nameImg
                : company.nameImg;

            if (!src) return null;
            return (
              <Image
                key={company.id}
                src={src}
                alt={company.name || "Company Logo"}
                width={150}
                height={80}
                loading="lazy"
                decoding="async"
                className="opacity-90 hover:opacity-100 w-14 md:w-20 transition-all"
                unoptimized
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clients;
