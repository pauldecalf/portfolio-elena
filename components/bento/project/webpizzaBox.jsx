import React from "react";
import BentoBox from "../../bentoBox";
import { FolderIcon } from "@heroicons/react/24/outline";
import { useScopedI18n } from "@/locales/client";
import { useTab } from "@/providers/tabContext";

export const WebpizzaBox = () => {
  const project_T = useScopedI18n("project");
  const { activeTabIndex } = useTab();

  return (
    <BentoBox
      className={`flex flex-col justify-center p-5 h-full
        ${activeTabIndex === 1 ? "opacity-40 pointer-events-none" : activeTabIndex === 2 ? "" : ""}
      `}
    >
      <div className="mb-4">
        <a href="https://github.com/ElenaFerreira/Webpizza" target="_blank">
          <img
            src="/images/project/project3.png"
            alt="Project image"
            className="w-full h-auto mb-4 object-cover object-top aspect-video rounded-lg hover:shadow-lg hover:scale-[1.01] cursor-pointer transition-all duration-300 ease-in-out"
          />
        </a>

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
