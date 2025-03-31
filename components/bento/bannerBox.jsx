import React from "react";
import BentoBox from "../bentoBox";
import { StarIcon } from "@heroicons/react/24/outline";
import { useScopedI18n } from "@/locales/client";
import Marquee from "react-fast-marquee";

export const BannerBox = () => {
  const banner_T = useScopedI18n("banner");

  return (
    <BentoBox className="relative overflow-hidden py-5 group">
      <div className="relative after:w-[calc(100%+32px)] after:h-full after:absolute after:top-0 after:-left-4">
        <Marquee
          speed={30}
          style={{
            maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              <p>
                {banner_T("portfolio_1")} <strong>{banner_T("portfolio_2")}</strong>
              </p>
              <StarIcon className="size-5 text-primary mx-3" />
            </div>
          ))}
        </Marquee>
      </div>
    </BentoBox>
  );
};
