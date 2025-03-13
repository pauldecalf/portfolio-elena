import { useState, useEffect } from "react";
import BentoBox from "../bentoBox";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export const ThemeToggleBox = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkMode(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  return (
    <BentoBox onClick={toggleTheme} className="flex items-center justify-center">
      {darkMode ? (
        <div className="flex items-center">
          <SunIcon className="h-6 w-6 mr-2" />
          <span>Light Mode</span>
        </div>
      ) : (
        <div className="flex items-center">
          <MoonIcon className="h-6 w-6 mr-2" />
          <span>Dark Mode</span>
        </div>
      )}
    </BentoBox>
  );
};
