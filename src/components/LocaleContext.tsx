"use client";

import { createContext, useContext } from "react";

type Locale = "ar" | "en";

export const LocaleContext = createContext<{
  locale: Locale;
}>({ locale: "ar" });

export const LocaleProvider = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) => {
  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
