import React from "react";
import BentoBox from "../bentoBox";
import { useScopedI18n } from "@/locales/client";

export const ExperienceBox = () => {
  const experience_T = useScopedI18n("experience");

  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2 h-full">
      <div className="mb-4">
        <p className="text-sm text-subtitle">{experience_T("years")}</p>
        <h2 className="text-2xl font-bold mb-1 text-title">{experience_T("experience")}</h2>
      </div>

      <div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 gap-1 md:gap-2">
          <h2 className="text-3xl font-bold text-title">{experience_T("exp1")}</h2>
          <div className="text-left md:text-right w-full md:w-auto">
            <p className="font-bold text-sm text-title">Grafikmente</p>
            <p className="text-xs text-title">{experience_T("date1")}</p>
          </div>
        </div>

        {[
          { title: experience_T("exp2"), company: "Marquetis & Co", years: experience_T("date2") },
          { title: experience_T("exp3"), company: "Grafikmente", years: experience_T("date3") },
          { title: experience_T("exp4"), company: "University", years: "2019 - 2024" },
        ].map((job, index) => (
          <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-center py-4 gap-1 md:gap-2">
            <p className="text-3xl text-subtitle line-through font-bold">{job.title}</p>
            <div className="text-left md:text-right w-full md:w-auto">
              <p className="font-bold text-sm text-subtitle">{job.company}</p>
              <p className="text-xs text-subtitle">{job.years}</p>
            </div>
          </div>
        ))}
      </div>
    </BentoBox>
  );
};
