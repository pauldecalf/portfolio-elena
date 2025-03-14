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
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2" colSpan={2}>
      <div className="mb-4">
        <p className="text-lg text-gray-600 dark:text-gray-300">2025 CV</p>
        <h2 className="text-3xl font-bold mb-1">RESUME</h2>
      </div>

      <div className="flex justify-center items-center gap-8">
        <InboxArrowDownIcon className="size-8 text-gray-500 hover:text-black cursor-pointer" onClick={handleDownload} />
        <a href={cvUrl} target="_blank" rel="noopener noreferrer">
          <EyeIcon className="size-8 text-gray-500 hover:text-black" />
        </a>
      </div>
    </BentoBox>
  );
};
