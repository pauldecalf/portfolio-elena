import { useState, useEffect } from "react";
import BentoBox from "../bentoBox";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const getStoredValue = (key, defaultValue) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key) || defaultValue;
  }
  return defaultValue;
};

export const ThemeToggleBox = () => {
  const [theme, setTheme] = useState("light");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTheme(getStoredValue("theme", "light"));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isLoaded]);

  return (
    <BentoBox className="h-full flex items-center justify-between p-1">
      <button
        onClick={() => setTheme("light")}
        className={`flex items-center justify-center w-full h-15 rounded-3xl cursor-pointer ${
          theme === "light" ? "bg-navbar shadow-md" : "bg-transparent"
        }`}
      >
        <SunIcon className={`size-6 ${theme === "light" ? "text-black" : "text-gray-400"}`} />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center justify-center w-full h-15 rounded-3xl cursor-pointer ${
          theme === "dark" ? "bg-navbar shadow-md" : "bg-transparent"
        }`}
      >
        <MoonIcon className={`size-6 ${theme === "dark" ? "text-white" : "text-gray-400"}`} />
      </button>
    </BentoBox>
  );
};
