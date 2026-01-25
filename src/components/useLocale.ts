"use client";

import { useContext } from "react";
import { LocaleContext } from "@/components/LocaleContext";

export function useLocale() {
    const { locale } = useContext(LocaleContext);
    const isAr = locale === "AR";

    return { locale, isAr };
}
