"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { Locale } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const options: { value: Locale; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "ar", label: "عربي" },
  ];

  return (
    <div className="flex items-center gap-1 rounded-full border border-zinc-200/70 bg-zinc-100/50 p-1 backdrop-blur-sm">
      {options.map((opt) => {
        const isActive = locale === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => setLocale(opt.value)}
            className={`relative flex h-7 items-center justify-center px-3 text-[0.7rem] font-bold tracking-wider transition-colors duration-200 ${
              isActive ? "text-orange-600" : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="active-lang"
                className="absolute inset-0 rounded-full bg-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.05)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
