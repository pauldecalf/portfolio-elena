import React from "react";
import BentoBox from "../../bentoBox";
import { LinkIcon } from "@heroicons/react/24/outline";
import { useScopedI18n } from "@/locales/client";
import { useTab } from "@/providers/tabContext";
import NewBadge from "@/components/NewBadge";

export const EuresisBox = () => {
  const project_T = useScopedI18n("project");
  const { activeTabIndex } = useTab();

  return (
    <BentoBox
      className={`relative flex flex-col justify-center p-5 h-full
        ${activeTabIndex === 1 ? "opacity-40 pointer-events-none" : activeTabIndex === 2 ? "" : ""}
      `}
    >
      <div className="mb-4">
        <a href="https://euresis-website.vercel.app/" target="_blank">
          <img
            src="/images/project/project6.png"
            alt="Project image"
            className="w-full h-auto mb-4 object-cover object-top aspect-video rounded-lg hover:shadow-lg hover:scale-[1.01] cursor-pointer transition-all duration-300 ease-in-out"
          />
        </a>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="text-sm text-subtitle uppercase">{project_T("project_for")}</p>
            <img src="/images/project/Euresis.svg" alt="Euresis Logo" className="size-5 mx-1" />
            <p className="text-sm text-subtitle uppercase">EURESIS</p>
          </div>

          <NewBadge />
        </div>

        <div className="flex items-center">
          <h2 className="text-2xl font-bold mb-1 text-title">{project_T("project6")}</h2>
          <a href="https://euresis-website.vercel.app/" target="_blank" className="ml-2">
            <LinkIcon className="size-6 text-icon-color hover:text-icon-hover duration-400 transition-all" />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["React", "Next.js", "Tailwind CSS", "Responsive", "Framer Motion"].map((label, index) => (
          <span key={index} className="px-3 py-1 text-xs text-white bg-label rounded-full">
            {label}
          </span>
        ))}
      </div>
    </BentoBox>
  );
};
