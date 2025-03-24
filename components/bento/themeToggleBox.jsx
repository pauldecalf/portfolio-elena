import BentoBox from "../bentoBox";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/app/providers";

export const ThemeToggleBox = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <BentoBox className="h-full flex items-center justify-between p-1">
      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center w-full h-15 rounded-3xl cursor-pointer ${
          theme === "light" ? "bg-navbar shadow-md" : "bg-transparent"
        }`}
      >
        <SunIcon className={`size-6 ${theme === "light" ? "text-black" : "text-gray-400"}`} />
      </button>

      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center w-full h-15 rounded-3xl cursor-pointer ${
          theme === "dark" ? "bg-navbar shadow-md" : "bg-transparent"
        }`}
      >
        <MoonIcon className={`size-6 ${theme === "dark" ? "text-white" : "text-gray-400"}`} />
      </button>
    </BentoBox>
  );
};
