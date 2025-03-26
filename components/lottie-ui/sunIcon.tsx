"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "@/app/[locale]/providers/theme-provider";
import SunAnimation from "../../public/lottie/sun/Sun.json";
import SunLightAnimation from "../../public/lottie/sun/SunLight.json";

const SunIcon = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const sunIconContainer = useRef<HTMLDivElement | null>(null);

  const getLottie = useCallback(async () => {
    const lot = await import("lottie-web");

    if (!sunIconContainer.current) return;
    lot.default.loadAnimation({
      name: "SunIcon",
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: isLightMode ? SunAnimation : SunLightAnimation,
      container: sunIconContainer.current,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      },
    });
  }, [isLightMode]);

  const destroyLottie = useCallback(async () => {
    const lot = await import("lottie-web");
    lot.default.destroy("SunIcon");
  }, []);

  useEffect(() => {
    getLottie();
    return () => {
      destroyLottie();
    };
  }, [getLottie, destroyLottie]);

  const lottieHover = async () => {
    const lot = await import("lottie-web");
    lot.default.play("SunIcon");
  };

  const lottieLeave = async () => {
    const lot = await import("lottie-web");
    lot.default.stop("SunIcon");
  };

  return (
    <div onMouseEnter={lottieHover} onMouseLeave={lottieLeave} className="group/sun h-full w-full flex items-center justify-center">
      <div ref={sunIconContainer} className={`size-8 ${isLightMode ? "" : "opacity-50"} group-hover/sun:opacity-100 transition-opacity`} />
    </div>
  );
};

export default SunIcon;
