import React from "react";
import BentoBox from "../bentoBox";

export const ExperienceBox = () => {
  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2 h-full">
      <div className="mb-4">
        <p className="text-sm text-subtitle">2 YEARS OF</p>
        <h2 className="text-2xl font-bold mb-1 text-title">EXPERIENCE</h2>
      </div>

      <div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 gap-1 md:gap-2">
          <h2 className="text-3xl font-bold text-title">Web Developer</h2>
          <div className="text-left md:text-right w-full md:w-auto">
            <p className="font-bold text-sm text-title">Grafikmente</p>
            <p className="text-xs text-title">2024 - Present</p>
          </div>
        </div>

        {[
          { title: "Full-Stack Developer", company: "Marquetis & Co", years: "Jan - May 2024" },
          { title: "Wordpress Development", company: "Grafikmente", years: "Apr - Jul 2023" },
          { title: "Academic Projects", company: "University", years: "2019 - 2024" },
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
