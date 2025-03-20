import React from "react";
import BentoBox from "../bentoBox";
import { StarIcon } from "@heroicons/react/24/outline";

export const BannerBox = () => {
  return (
    <BentoBox className="relative overflow-hidden py-5 group">
      <div className="relative after:w-[calc(100%+32px)] after:h-full after:absolute after:top-0 after:-left-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              <p>
                PERSONAL <strong>PORTFOLIO</strong>
              </p>
              <StarIcon className="size-5 text-primary   mx-3" />
            </div>
          ))}
        </div>
      </div>
    </BentoBox>
  );
};
