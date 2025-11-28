// src/context/LocaleContext.tsx
"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

type Locale = "EN" | "AR";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext<LocaleContextType>({
  locale: "EN",
  setLocale: () => {},
});

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("EN");

  useEffect(() => {
    const savedLang = localStorage.getItem("locale") as Locale;
    if (savedLang === "AR" || savedLang === "EN") setLocale(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
