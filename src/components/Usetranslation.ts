import { usePathname } from "next/navigation";
import enTranslations from "@/locales/en.json";
import arTranslations from "@/locales/ar.json";

export function useTranslation() {
    const pathname = usePathname();
    const isArabic = pathname.startsWith("/ar");
    const locale: "EN" | "AR" = isArabic ? "AR" : "EN";
    const t = isArabic ? arTranslations : enTranslations;

    return {
        t,
        locale,
        isArabic,
        dir: isArabic ? "rtl" : "ltr",
    };
}

export type TranslationType = typeof enTranslations;