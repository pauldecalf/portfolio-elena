import React from "react";
import BentoBox from "../bentoBox";
import { FolderIcon } from "@heroicons/react/24/outline";
import { useScopedI18n } from "@/locales/client";

export const Project3Box = () => {
  const project_T = useScopedI18n("project");

  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2 h-full">
      <div className="mb-4">
        <img src="/images/project3.png" alt="Project image" className="w-full h-auto mb-4 object-cover rounded-lg" />

        <div className="flex items-center mb-2">
          <p className="text-sm text-subtitle uppercase">{project_T("university_project")}</p>
        </div>

        <div className="flex items-center">
          <h2 className="text-2xl font-bold mb-1 text-title">WebPizza</h2>
          <a href="https://github.com/ElenaFerreira/Webpizza" target="_blank" className="ml-2">
            <FolderIcon className="size-6 text-icon-color hover:text-icon-hover duration-400 transition-all" />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["Python", "Django", "HTML", "CSS"].map((label, index) => (
          <span key={index} className="px-3 py-1 text-xs text-white bg-label rounded-full">
            {label}
          </span>
        ))}
      </div>
    </BentoBox>
  );
};
