import React, { useEffect, useState } from "react";
import Image from "next/image";
import BentoBox from "../bentoBox";
import { useScopedI18n } from "@/locales/client";
import { useTab } from "@/providers/tabContext";

export const ProfileBox = () => {
  const profile_T = useScopedI18n("profile");
  const { activeTabIndex } = useTab();

  return (
    <BentoBox
      className={`flex flex-col justify-center p-5 md:col-span-6 row-span-3 md:col-start-1 row-start-1 h-full 
        ${activeTabIndex === 1 ? "" : activeTabIndex === 2 ? "opacity-40 pointer-events-none" : ""}`}
    >
      <div className="flex items-center mb-4">
        <div className="relative size-24 flex items-center justify-center mr-6">
          <Image
            src="/images/me.jpeg"
            alt="Elena Ferreira"
            className="aspect-square rounded-full object-cover drop-shadow-lg"
            width={110}
            height={110}
          />
          <div className="absolute bottom-1.5 right-1.5 size-4 bg-badge rounded-full flex justify-center items-center animation-pulser"></div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-1 text-title">Elena Ferreira</h2>
          <p className="text-lg text-subtitle">{profile_T("job")}</p>
        </div>
      </div>

      <p className="text-base leading-relaxed">{profile_T("about")} </p>
    </BentoBox>
  );
};
