// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { LocaleProvider } from "@/components/LocaleContext";

const inter = Inter({ subsets: ["latin"] });

const locale: "ar" | "en" = "ar"; 

const METADATA: Record<"ar" | "en", Metadata> = {
  ar: {
    title: "ويب دابل | مواقع إلكترونية وتجارة إلكترونية حديثة",
    description:
      "نحن نبني مواقع حديثة وسريعة وصديقة لمحركات البحث ومنصات التجارة الإلكترونية.",
    icons: "/logo.svg",
    openGraph: {
      title: "ويب دابل | مواقع إلكترونية حديثة",
      description:
        "نحن نبني مواقع حديثة وسريعة وصديقة لمحركات البحث ومنصات التجارة الإلكترونية.",
      url: "https://ebvitas.com",
      siteName: "ويب دابل",
      images: ["/logo.svg"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "ويب دابل | مواقع إلكترونية حديثة",
      description:
        "نحن نبني مواقع حديثة وسريعة وصديقة لمحركات البحث ومنصات التجارة الإلكترونية.",
      images: ["/logo.svg"],
    },
  },
  en: {
    title: "ebvitas | Modern Website & Ecommerce",
    description:
      "We build modern, fast, SEO-friendly websites and e-commerce platforms crafted for growth and conversions.",
    icons: "/logo.svg",
    openGraph: {
      title: "ebvitas | Modern Website & Ecommerce",
      description:
        "We build modern, fast, SEO-friendly websites and e-commerce platforms crafted for growth and conversions.",
      url: "https://ebvitas.com",
      siteName: "ebvitas",
      images: ["/logo.svg"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "ebvitas | Modern Website & Ecommerce",
      description:
        "We build modern, fast, SEO-friendly websites and e-commerce platforms crafted for growth and conversions.",
      images: ["/logo.svg"],
    },
  },
};

const metadata = METADATA[locale];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Meta أساسية */}
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.title)} />
        <link rel="icon" href={metadata.icons?.toString()} />

        {/* OpenGraph */}
        <meta property="og:title" content={String(metadata.title)} />
        <meta
          property="og:description"
          content={metadata.openGraph?.description}
        />
        <meta property="og:type" content={String(metadata.title)} />
        <meta property="og:url" content={String(metadata.title)} />
        <meta property="og:site_name" content={metadata.openGraph?.siteName} />
        <meta property="og:image" content={String(metadata.title)} />

        {/* Twitter */}
        <meta name="twitter:card" content={String(metadata.title)} />
        <meta name="twitter:title" content={String(metadata.title)} />
        <meta
          name="twitter:description"
          content={metadata.twitter?.description}
        />
        <meta name="twitter:image" content={String(metadata.title)} />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
