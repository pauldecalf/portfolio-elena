import { useTheme } from "@/providers/theme-provider";
import BentoBox from "../bentoBox";

export const MapBox = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  return (
    <BentoBox className="h-full min-h-[200px] relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={isLightMode ? "/images/mapLight.png" : "/images/mapDark.png"} alt="Map" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 p-3 bg-background/80 rounded-tr-lg">
        <p className="text-sm font-medium">Paris, France</p>
      </div>
    </BentoBox>
  );
};
