import React from "react";
import BentoBox from "../bentoBox";

export const ExperienceBox = () => {
  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2 h-full">
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">2 YEARS OF</p>
        <h2 className="text-2xl font-bold mb-1">EXPERIENCE</h2>
      </div>

      <div>
        <div className="flex justify-between flex-col items-stretch md:flex-row md:items-center py-4 gap-3 md:gap-2">
          <h2 className="text-3xl font-bold">Web Developer</h2>
          <div className="text-right">
            <p className="font-bold text-sm">Grafikmente</p>
            <p className="text-xs text-gray-700">2024 - Present</p>
          </div>
        </div>

        {[
          { title: "Full-Stack Developer", company: "Marquetis & Co", years: "Jan - May 2024" },
          { title: "Wordpress Development", company: "Grafikmente", years: "Apr - Jul 2023" },
          { title: "Academic Projects", company: "University", years: "2019 - 2024" },
        ].map((job, index) => (
          <div key={index} className="flex justify-between flex-col items-stretch md:flex-row md:items-center py-4 gap-3 md:gap-2">
            <p className="text-3xl text-gray-400 dark:text-gray-500 line-through font-bold">{job.title}</p>
            <div className="text-right">
              <p className="font-bold text-sm text-gray-400 dark:text-gray-500">{job.company}</p>
              <p className="text-xs text-gray-500">{job.years}</p>
            </div>
          </div>
        ))}
      </div>
    </BentoBox>
  );
};
