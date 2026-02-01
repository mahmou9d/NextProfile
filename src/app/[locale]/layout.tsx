// app/[locale]/layout.tsx
import type { Metadata } from "next";

const locales = ["en", "ar"] as const;
type Locale = (typeof locales)[number];

const translations = {
  en: {
    title:
      "Webvitas | Building Next-Level Platforms - Modern Web & Mobile Solutions",
    description:
      "Modern web, mobile, and cloud solutions designed to scale. Professional platforms built to increase your visibility, sales, and customer trust by 180%.",
  },
  ar: {
    title:
      "Webvitas | Building Next-Level Platforms - Modern Web & Mobile Solutions",
    description:
      "حلول ويب وموبايل وسحابة حديثة مصممة للتوسع. مواقع احترافية مصممة لزيادة ظهورك ومبيعاتك وثقة العملاء بنسبة 180%.",
  },
};

// 👇 هنا التغيير المهم - ضفنا async و await
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>; // 👈 غيرنا النوع
}): Promise<Metadata> {
  const { locale } = await params; // 👈 await params
  const resolvedLocale = locale as Locale;
  const t = translations[resolvedLocale] || translations.en;
  const isArabic = resolvedLocale === "ar";

  return {
    title: {
      default: t.title,
      template: isArabic ? "%s | ويب فيتاس" : "%s | Webvitas",
    },

    description: t.description,
    icons: {
      icon: [
        { url: "/Webvitas.png" },
        { url: "/Webvitas.png", sizes: "32x32", type: "image/png" },
        { url: "/Webvitas.png", sizes: "192x192", type: "image/png" },
        { url: "/Webvitas.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/Webvitas.png", sizes: "180x180", type: "image/png" }],
      shortcut: "/Webvitas.png",
    },
    keywords: isArabic
      ? [
          "تصميم مواقع احترافية",
          "تطوير تطبيقات ويب",
          "متاجر إلكترونية",
          "حلول سحابية",
          "تطبيقات موبايل",
          "تحسين محركات البحث",
          "واجهات مستخدم",
          "تجربة مستخدم",
          "تطوير ويب حديث",
          "حلول رقمية",
          "منصات احترافية",
          "مواقع تجارة إلكترونية",
          "تصميم UI/UX",
          "معرض أعمال",
          "مواقع شركات",
        ]
      : [
          "web development",
          "mobile app development",
          "e-commerce solutions",
          "cloud solutions",
          "SEO optimization",
          "UI/UX design",
          "modern web platforms",
          "digital solutions",
          "professional web design",
          "scalable platforms",
          "responsive websites",
          "corporate websites",
          "portfolio websites",
          "web applications",
        ],

    authors: [{ name: "Webvitas" }],
    creator: "Webvitas",
    publisher: "Webvitas",

    openGraph: {
      type: "website",
      locale: isArabic ? "ar_EG" : "en_US",
      url: `https://webvitas.com/${resolvedLocale}`,
      siteName: isArabic ? "ويب فيتاس" : "Webvitas",
      title: t.title,
      description: t.description,
      images: [
        {
          url: `/Webvitas.png`,
          width: 1200,
          height: 630,
          alt: isArabic
            ? "ويب فيتاس - حلول ويب احترافية"
            : "Webvitas - Professional Web Solutions",
          type: "image/jpeg",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: [`/og-image-${resolvedLocale}.jpg`],
      creator: "@webvitas",
      site: "@webvitas",
    },

    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: `https://webvitas.com/${resolvedLocale}`,
      languages: {
        en: "https://webvitas.com/en",
        ar: "https://webvitas.com/ar",
        "x-default": "https://webvitas.com/en",
      },
    },

    verification: {
      google: "your-google-verification-code",
    },

    category: "technology",

    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: isArabic ? "ويب فيتاس" : "Webvitas",
        description: t.description,
        url: `https://webvitas.com/${resolvedLocale}`,
        image: `https://webvitas.com/og-image-${resolvedLocale}.jpg`,
        logo: "https://webvitas.com/logo.png",
        inLanguage: resolvedLocale,

        areaServed: {
          "@type": "Country",
          name: isArabic ? "مصر" : "Egypt",
        },

        address: {
          "@type": "PostalAddress",
          addressCountry: "EG",
        },

        serviceType: isArabic
          ? [
              "تصميم مواقع",
              "تطوير تطبيقات ويب",
              "متاجر إلكترونية",
              "حلول سحابية",
            ]
          : ["Web Design", "Web Development", "E-commerce", "Cloud Solutions"],

        knowsAbout: isArabic
          ? [
              "التخطيط والاستراتيجية",
              "التطوير والتحديث المستمر",
              "الاختبار والإطلاق",
            ]
          : ["Planning & Strategy", "Development", "Testing & Launch"],

        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "50",
          bestRating: "5",
          worstRating: "1",
        },

        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "500",
          highPrice: "10000",
        },

        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          availableLanguage: ["English", "Arabic"],
        },

        sameAs: [
          "https://facebook.com/webvitas",
          "https://twitter.com/webvitas",
          "https://linkedin.com/company/webvitas",
          "https://instagram.com/webvitas",
        ],
      }),
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
