"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, translations } from "./i18n";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations.en;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Try URL path first for static routing (/ar)
    const pathname = window.location.pathname;
    
    if (pathname.startsWith('/ar')) {
      setLocaleState('ar');
      localStorage.setItem("kawn-locale", 'ar');
    } else if (pathname === '/') {
      // 2. Fall back to localStorage if on root
      const saved = localStorage.getItem("kawn-locale") as Locale;
      if (saved && (saved === "en" || saved === "ar")) {
        setLocaleState(saved);
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("kawn-locale", locale);
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
      
      // Update font based on language
      if (locale === "ar") {
        document.documentElement.classList.add("font-arabic");
      } else {
        document.documentElement.classList.remove("font-arabic");
      }
      
      // Update URL path so copied links point to the static HTML file
      if (locale === 'ar' && window.location.pathname !== '/ar') {
        window.history.replaceState({}, "", "/ar");
      } else if (locale === 'en' && window.location.pathname === '/ar') {
        window.history.replaceState({}, "", "/");
      }
    }
  }, [locale, mounted]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const value = {
    locale,
    setLocale,
    t: translations[locale],
    isRTL: locale === "ar",
  };

  // Prevent flash of un-translated content by only rendering children after mount
  // or providing a default if preferred. Here we render but the effect handles dir.
  return (
    <LanguageContext.Provider value={value}>
      <div className={locale === "ar" ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
