import React from "react";
import BentoBox from "../bentoBox";
import { StarIcon } from "@heroicons/react/24/outline";
import { useScopedI18n } from "@/locales/client";

export const BannerBox = () => {
  const banner_T = useScopedI18n("banner");

  return (
    <BentoBox className="relative overflow-hidden py-5 group">
      <div className="relative after:w-[calc(100%+32px)] after:h-full after:absolute after:top-0 after:-left-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              <p>
                {banner_T("portfolio_1")} <strong>{banner_T("portfolio_2")}</strong>
              </p>
              <StarIcon className="size-5 text-primary   mx-3" />
            </div>
          ))}
        </div>
      </div>
    </BentoBox>
  );
};
