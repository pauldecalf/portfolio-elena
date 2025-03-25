import React from "react";
import BentoBox from "../bentoBox";
import DownloadIcon from "../lottie/downloadIcon";
import EyeIcon from "../lottie/eyeIcon";

export const ResumeBox = () => {
  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2">
      <div className="mb-4">
        <p className="text-sm text-subtitle">2025 CV</p>
        <h2 className="text-2xl font-bold mb-1 text-title">RESUME</h2>
      </div>

      <div className="flex justify-center items-center gap-8">
        <DownloadIcon />
        <EyeIcon />
      </div>
    </BentoBox>
  );
};
