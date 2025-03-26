"use client";

import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "@/providers/theme-provider";
import EyeAnimation from "../../public/lottie/eye/Eye.json";
import EyeLightAnimation from "../../public/lottie/eye/EyeLight.json";

const EyeIcon = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const sendIconContainer = useRef<HTMLDivElement | null>(null);

  const getLottie = useCallback(async () => {
    const lot = await import("lottie-web");

    if (!sendIconContainer.current) return;
    lot.default.loadAnimation({
      name: "SendIcon",
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: isLightMode ? EyeLightAnimation : EyeAnimation,
      container: sendIconContainer.current,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      },
    });
  }, [isLightMode]);

  const destroyLottie = useCallback(async () => {
    const lot = await import("lottie-web");
    lot.default.destroy("SendIcon");
  }, []);

  useEffect(() => {
    getLottie();
    return () => {
      destroyLottie();
    };
  }, [getLottie, destroyLottie]);

  const lottieHover = async () => {
    const lot = await import("lottie-web");
    lot.default.play("SendIcon");
  };

  const lottieLeave = async () => {
    const lot = await import("lottie-web");
    lot.default.stop("SendIcon");
  };

  return (
    <a href="images/CV_Elena_FERREIRA.pdf" target="_blank" className="relative z-10">
      <div
        ref={sendIconContainer}
        onMouseEnter={lottieHover}
        onMouseLeave={lottieLeave}
        className="size-10 opacity-50 hover:opacity-100 transition-opacity"
      />
    </a>
  );
};

export default EyeIcon;
