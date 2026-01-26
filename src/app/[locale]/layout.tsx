import type { Metadata } from "next";
import enTranslations from "@/locales/en.json";
import arTranslations from "@/locales/ar.json";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "ويب فيتاس | حلول ويب مميزة"
      : "Webvitas | Modern Website & Ecommerce",
    description: isAr
      ? "نحن نبني مواقع حديثة وسريعة"
      : "We build modern, fast websites",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = locale === "ar" ? arTranslations : enTranslations;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div lang={locale} dir={dir}>
      {children}
    </div>
  );
}
