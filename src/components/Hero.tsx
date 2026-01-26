"use client";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Title from "./Title";
import { useTranslation } from "./Usetranslation";
import { Metadata } from "next";


export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isArabic = params.locale === "ar";

  const t = isArabic
    ? (await import("@/locales/ar.json")).default
    : (await import("@/locales/en.json")).default;

  const hero = t.hero;

  // JSON-LD Schema للـ stats
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${hero.title1} | ${hero.title2} ${hero.title3}`,
    description: hero.description,

  };

  return {
    title: `${hero.title1} | ${hero.title2} ${hero.title3}`,
    description: hero.description,
    keywords: isArabic
      ? ["تصميم مواقع", "تطوير ويب", "متاجر إلكترونية", "SEO"]
      : ["Web Development", "Website Design", "Ecommerce", "SEO"],
    alternates: {
      canonical: `https://webvitas.com/${params.locale}`,
      languages: {
        en: "https://webvitas.com/en",
        ar: "https://webvitas.com/ar",
      },
    },
    openGraph: {
      title: `${hero.title1} | ${hero.title2} ${hero.title3}`,
      description: hero.description,
      url: `https://webvitas.com/${params.locale}`,
      siteName: "Webvitas",
      locale: isArabic ? "ar_EG" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${hero.title1} | ${hero.title2} ${hero.title3}`,
      description: hero.description,
    },
    robots: { index: true, follow: true },
    // JSON-LD structured data
    metadataBase: new URL("https://webvitas.com/"),
    
    other: {
      "application/ld+json": JSON.stringify(structuredData),
    },
  };
}

const Hero = () => {
  const { t, isArabic, dir } = useTranslation();
  const pathname = usePathname();
  const localePrefix = isArabic ? "/ar" : "/en";

  const stats = [
    { value: "500+", label: t.hero.stats.projects },
    { value: "98%", label: t.hero.stats.satisfaction },
    { value: "24/7", label: t.hero.stats.support },
  ];

  const buttons = [
    {
      href: `${localePrefix}#services`,
      title: t.hero.buttons.exploreServices,
      icon: <FaLocationArrow className="w-5 h-5" />,
      variant: "primary" as const,
    },
    {
      href: `${localePrefix}#contact`,
      title: t.hero.buttons.buildWebsite,
      icon: <FaEnvelope className="w-5 h-5" />,
      variant: "secondary" as const,
    },
  ];

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-32 pb-20 overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black"
      dir={dir}
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title Section */}
        <Title
          subtitle={t.hero.subtitle}
          title1={t.hero.title1}
          title2={t.hero.title2}
          title3={t.hero.title3}
          description={t.hero.description}
        />

        {/* Stats - Grid Style */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 min-w-[100px] px-6 py-4 rounded-2xl bg-gradient-to-br from-gray-900/80 via-gray-800/50 to-gray-900/80 border border-gray-700/50 hover:border-blue-500/60 transition-all duration-300"
            >
              <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons - Grid Style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          {buttons.map((btn, idx) => (
            <Link
              key={idx}
              href={btn.href}
              className={`group relative inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 w-full sm:w-auto ${
                btn.variant === "primary"
                  ? "bg-gradient-to-r from-blue-600 to-pink-600 text-white shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
                  : "bg-gray-800/50 border border-gray-700/50 text-white hover:border-blue-500/50 hover:bg-gray-800 transform hover:scale-105"
              }`}
            >
              {btn.variant === "primary" && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl " />
              )}
              <span className="relative z-10">{btn.title}</span>
              <span
                className={`relative z-10 transition-transform duration-300 ${
                  isArabic
                    ? "group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              >
                {btn.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </section>
  );
};

export default Hero;
