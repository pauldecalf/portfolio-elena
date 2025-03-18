import React from "react";
import BentoBox from "../bentoBox";
import { LinkIcon } from "@heroicons/react/24/outline";

export const Project1Box = () => {
  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2 h-full">
      <div className="mb-4">
        <img src="/images/project1.png" alt="Project image" className="w-full h-auto mb-4 object-cover rounded-lg" />

        <div className="flex items-center mb-2">
          <p className="text-sm text-gray-600 dark:text-gray-300">PROJECT AT</p>
          <img src="/images/Grafikmente.svg" alt="Grafikmente Logo" className="size-5 mx-1" />
          <p className="text-sm text-gray-600 dark:text-gray-300">GRAFIKMENTE</p>
        </div>

        <div className="flex items-center">
          <h2 className="text-2xl font-bold mb-1">Website Boulangers du Grand Paris</h2>
          <a
            href="https://boulangersdugrandparis.com/accueil/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 ml-2"
          >
            <LinkIcon className="w-6 h-6 text-gray-500 hover:text-black duration-400 transition-all" />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["Wordpress", "Divi", "CSS", "Responsive"].map((label, index) => (
          <span key={index} className="px-3 py-1 text-xs text-white bg-gray-500 rounded-full dark:bg-gray-700">
            {label}
          </span>
        ))}
      </div>
    </BentoBox>
  );
};
