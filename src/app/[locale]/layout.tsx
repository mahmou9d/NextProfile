import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://webvitas.com"),

  title: {
    default:
      "Webvitas | نقوم ببناء منصات من مستوى جديد - Modern Web & Mobile Solutions",
    template: "%s | Webvitas",
  },

  description:
    "حلول ويب وموبايل وسحابة حديثة مصممة للتوسع. مواقع احترافية مصممة لزيادة ظهورك ومبيعاتك وثقة العملاء بنسبة 180%. Professional web, mobile, and cloud solutions designed to scale. Build your online presence and grow your business.",

  keywords: [
    // عربي
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
    // English
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
    siteName: "Webvitas",
    title: "Webvitas | نقوم ببناء منصات من مستوى جديد",
    description:
      "حلول ويب وموبايل وسحابة حديثة مصممة للتوسع. مواقع احترافية مصممة لزيادة ظهورك ومبيعاتك وثقة العملاء. Professional web, mobile, and cloud solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webvitas - حلول ويب احترافية - Professional Web Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Webvitas | نقوم ببناء منصات من مستوى جديد",
    description:
      "حلول ويب وموبايل وسحابة حديثة مصممة للتوسع. Professional web, mobile, and cloud solutions designed to scale.",
    images: ["/twitter-image.jpg"],
    creator: "@webvitas",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    languages: {
      en: "https://webvitas.com/en",
      ar: "https://webvitas.com/ar",
    },
  },

  verification: {
    google: "your-google-verification-code",
  },

  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Webvitas",
      description:
        "حلول ويب وموبايل وسحابة حديثة مصممة للتوسع. Professional web, mobile, and cloud solutions designed to scale.",
      url: "https://webvitas.com",
      inLanguage: ["ar", "en"],
      areaServed: [
        { "@type": "Country", name: "Egypt" },
        { "@type": "Country", name: "مصر" },
      ],
      serviceType: [
        "تصميم مواقع",
        "تطوير تطبيقات ويب",
        "متاجر إلكترونية",
        "حلول سحابية",
        "Web Design",
        "Web Development",
        "E-commerce",
        "Cloud Solutions",
      ],
      knowsAbout: [
        "التخطيط والاستراتيجية",
        "التطوير والتحديث المستمر",
        "الاختبار والإطلاق",
        "Planning & Strategy",
        "Development",
        "Testing & Launch",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "50",
      },
    }),
  },
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
