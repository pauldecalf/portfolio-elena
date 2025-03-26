"use client";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export const LanguageSelect = () => {
  const locale = useCurrentLocale() || "en";
  const changelocale = useChangeLocale();

  const nextLocale = locale === "en" ? "fr" : "en";
  const flag = locale === "en" ? "🇬🇧" : "🇫🇷";

  return (
    <button
      onClick={() => changelocale(nextLocale)}
      className="text-lg p-2 rounded-lg transition hover:scale-110 cursor-pointer"
      aria-label={`Switch language to ${nextLocale}`}
    >
      {flag}
    </button>
  );
};
