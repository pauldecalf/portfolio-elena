import React from "react";
import BentoBox from "../bentoBox";

import { InboxArrowDownIcon, EyeIcon } from "@heroicons/react/24/outline";

export const ResumeBox = () => {
  const cvUrl = "images/CV_Elena_FERREIRA.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_Elena_FERREIRA.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2">
      <div className="mb-4">
        <p className="text-sm text-subtitle">2025 CV</p>
        <h2 className="text-2xl font-bold mb-1 text-title">RESUME</h2>
      </div>

      <div className="flex justify-center items-center gap-8">
        <InboxArrowDownIcon
          className="size-8 text-icon-color hover:text-icon-hover cursor-pointer duration-400 transition-all"
          onClick={handleDownload}
        />
        <a href={cvUrl} target="_blank">
          <EyeIcon className="size-8 text-icon-color hover:text-icon-hover duration-400 transition-all" />
        </a>
      </div>
    </BentoBox>
  );
};
