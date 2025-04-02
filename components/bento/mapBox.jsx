import { useTheme } from "@/providers/theme-provider";
import BentoBox from "../bentoBox";
import { useTab } from "@/providers/tabContext";

export const MapBox = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const { activeTabIndex } = useTab();

  return (
    <BentoBox
      className={`h-full min-h-[200px] relative overflow-hidden md:col-span-3 row-span-2 md:col-start-7 row-start-5 md:row-span-2
          ${activeTabIndex === 1 ? "" : activeTabIndex === 2 ? "opacity-50" : ""}
`}
    >
      <div className="absolute inset-0">
        <img src={isLightMode ? "/images/mapLight.png" : "/images/mapDark.png"} alt="Map" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 p-3 bg-background/80 rounded-tr-lg">
        <p className="text-sm font-medium">Paris, France</p>
      </div>
    </BentoBox>
  );
};
