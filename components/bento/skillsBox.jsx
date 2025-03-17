import React from "react";
import BentoBox from "../bentoBox";

export const SkillsBox = () => {
  const techLogos = [
    "/images/tech/Bootstrap.png",
    "/images/tech/css.png",
    "/images/tech/django.svg",
    "/images/tech/github.svg",
    "/images/tech/gitlab.png",
    "/images/tech/html.png",
    "/images/tech/php.png",
    "/images/tech/python.png",
    "/images/tech/sql.png",
    "/images/tech/symfony.svg",
    "/images/tech/Tailwind.png",
    "/images/tech/typescript.png",
    "/images/tech/wordpress.png",
  ];

  return (
    <BentoBox className="relative overflow-hidden py-5 md:col-span-2 h-full flex flex-col justify-between">
      <div className="relative my-10 after:bg-[linear-gradient(90deg,rgba(255,0,0,1)0%,rgba(9,9,121,0)10%,rgba(4,112,189,0)90%,rgba(255,0,0,1)100%)] after:w-[calc(100%+32px)] after:h-full after:absolute after:top-0 after:-left-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {techLogos.concat(techLogos).map((logo, i) => (
            <div key={i} className="flex items-center mx-2 bg-gray-200 p-4 rounded-xl">
              <img src={logo} alt="Tech logo" className="size-10" />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">CURRENTLY USING</p>
        <h2 className="text-2xl font-bold mb-1">TECH I ❤️</h2>
      </div>
    </BentoBox>
  );
};
