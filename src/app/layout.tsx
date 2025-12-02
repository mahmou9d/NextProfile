// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { LocaleProvider } from "@/components/LocaleContext";

const inter = Inter({ subsets: ["latin"] });

// اختر اللغة هنا مباشرة
const locale: "ar" | "en" = "ar"; // غيرها إلى "en" للإنجليزي

// فصل الـ metadata لكل لغة
const METADATA: Record<"ar" | "en", Metadata> = {
  ar: {
    title: "ويب دابل | مواقع إلكترونية وتجارة إلكترونية حديثة",
    description:
      "نحن نبني مواقع حديثة وسريعة وصديقة لمحركات البحث ومنصات التجارة الإلكترونية.",
    icons: "/logo.png",
    openGraph: {
      title: "ويب دابل | مواقع إلكترونية حديثة",
      description:
        "نحن نبني مواقع حديثة وسريعة وصديقة لمحركات البحث ومنصات التجارة الإلكترونية.",
      url: "https://webdouble.com",
      siteName: "ويب دابل",
      images: ["/logo.png"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "ويب دابل | مواقع إلكترونية حديثة",
      description:
        "نحن نبني مواقع حديثة وسريعة وصديقة لمحركات البحث ومنصات التجارة الإلكترونية.",
      images: ["/logo.png"],
    },
  },
  en: {
    title: "webdouble | Modern Website & Ecommerce",
    description:
      "We build modern, fast, SEO-friendly websites and e-commerce platforms crafted for growth and conversions.",
    icons: "/logo.png",
    openGraph: {
      title: "webdouble | Modern Website & Ecommerce",
      description:
        "We build modern, fast, SEO-friendly websites and e-commerce platforms crafted for growth and conversions.",
      url: "https://webdouble.com",
      siteName: "webdouble",
      images: ["/logo.png"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "webdouble | Modern Website & Ecommerce",
      description:
        "We build modern, fast, SEO-friendly websites and e-commerce platforms crafted for growth and conversions.",
      images: ["/logo.png"],
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
