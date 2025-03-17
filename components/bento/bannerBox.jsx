import React from "react";
import BentoBox from "../bentoBox";
import { StarIcon } from "@heroicons/react/24/outline";

export const BannerBox = () => {
  return (
    <BentoBox className="relative overflow-hidden py-5">
      <div className="relative after:bg-[linear-gradient(90deg,rgb(247,246,255)0%,rgba(9,9,121,0)20%,rgba(4,112,189,0)80%,rgb(247,246,255)100%)] after:w-[calc(100%+32px)] after:h-full after:absolute after:top-0 after:-left-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              <p>
                PERSONAL <strong>PORTFOLIO</strong>
              </p>
              <StarIcon className="size-5 text-red-200 mx-3" />
            </div>
          ))}
        </div>
      </div>
    </BentoBox>
  );
};
