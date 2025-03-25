import React from "react";
import BentoBox from "../bentoBox";

// import { EyeIcon } from "@heroicons/react/24/outline";
import DownloadIcon from "../lottie/downloadIcon";
import EyeIcon from "../lottie/eyeIcon";

export const ResumeBox = () => {
  const cvUrl = "images/CV_Elena_FERREIRA.pdf";

  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2">
      <div className="mb-4">
        <p className="text-sm text-subtitle">2025 CV</p>
        <h2 className="text-2xl font-bold mb-1 text-title">RESUME</h2>
      </div>

      <div className="flex justify-center items-center gap-8">
        <DownloadIcon />
        <EyeIcon />
        {/* <a href={cvUrl} target="_blank">
          <EyeIcon className="size-8 text-icon-color hover:text-icon-hover duration-400 transition-all" />
        </a> */}
      </div>
    </BentoBox>
  );
};
