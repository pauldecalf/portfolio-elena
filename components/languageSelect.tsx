"use client";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export const LanguageSelect = () => {
  const locale = useCurrentLocale() || "en";
  const changelocale = useChangeLocale();

  const nextLocale = locale === "en" ? "fr" : "en";
  const flag = locale === "en" ? "\uD83C\uDDEC\uD83C\uDDE7" : "	\ud83c\uddeb\ud83c\uddf7"; // Drapeaux en 🇬🇧 et 🇫🇷

  return (
    <button
      onClick={() => changelocale(nextLocale)}
      className="text-lg p-2 size-11 rounded-full bg-background hover:scale-110 cursor-pointer"
      aria-label={`Switch language to ${nextLocale}`}
    >
      {flag}
    </button>
  );
};
