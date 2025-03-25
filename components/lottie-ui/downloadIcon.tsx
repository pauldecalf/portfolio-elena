"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/app/providers";
import InboxDownAnimation from "../../public/lottie/inbox-down/InboxDown.json";
import InboxDownLightAnimation from "../../public/lottie/inbox-down/InboxDownLight.json";

const DownloadIcon = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const downloadContainer = useRef<HTMLDivElement | null>(null);

  async function getLottie() {
    const lot = await import("lottie-web");

    if (!downloadContainer.current) return;
    lot.default.loadAnimation({
      name: "DownloadIcon",
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: isLightMode ? InboxDownAnimation : InboxDownLightAnimation,
      container: downloadContainer.current,
      rendererSettings: {
        preserveAspectRatio: "xMinYMin slice",
      },
    });
  }

  async function destroyLottie() {
    const lot = await import("lottie-web");
    lot.default.destroy("DownloadIcon");
  }

  useEffect(() => {
    getLottie();

    return () => {
      destroyLottie();
    };
  }, [isLightMode]);

  const lottieHover = async () => {
    const lot = await import("lottie-web");
    lot.default.play("DownloadIcon");
  };

  const lottieLeave = async () => {
    const lot = await import("lottie-web");
    lot.default.stop("DownloadIcon");
  };

  return (
    <a href="images/CV_Elena_FERREIRA.pdf" download className="relative z-10">
      <div
        ref={downloadContainer}
        onMouseEnter={lottieHover}
        onMouseLeave={lottieLeave}
        className="size-10 opacity-50 hover:opacity-100 transition-opacity"
      />
    </a>
  );
};

export default DownloadIcon;
