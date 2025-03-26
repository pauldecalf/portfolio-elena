import React from "react";
import BentoBox from "../bentoBox";
import DownloadIcon from "../lottie-ui/downloadIcon";
import EyeIcon from "../lottie-ui/eyeIcon";
import { useScopedI18n } from "@/locales/client";

export const ResumeBox = () => {
  const resume_T = useScopedI18n("resume");

  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2">
      <div className="mb-4">
        <p className="text-sm text-subtitle uppercase">{resume_T("date")}</p>
        <h2 className="text-2xl font-bold mb-1 text-title uppercase">{resume_T("resume")}</h2>
      </div>

      <div className="flex justify-center items-center gap-8">
        <DownloadIcon />
        <EyeIcon />
      </div>
    </BentoBox>
  );
};
