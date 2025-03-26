import BentoBox from "../bentoBox";
import MoonIcon from "../lottie-ui/moonIcon";
import SunIcon from "../lottie-ui/sunIcon";
import { useTheme } from "@/app/[locale]/providers";

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
        <SunIcon />
      </button>

      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center w-full h-15 rounded-3xl cursor-pointer ${
          theme === "dark" ? "bg-navbar shadow-md" : "bg-transparent"
        }`}
      >
        <MoonIcon />
      </button>
    </BentoBox>
  );
};
