import React from "react";
import Image from "next/image";
import BentoBox from "../bentoBox";

export const ProfileBox = () => {
  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2 h-full">
      <div className="flex items-center mb-4">
        <div className="relative size-24 flex items-center justify-center mr-6">
          <Image src="/images/me.jpeg" alt="Elena Ferreira" className="aspect-square rounded-full object-cover" width={110} height={110} />
          <div className="absolute bottom-1.5 right-1.5 size-4 bg-[#00cb0e] rounded-full flex justify-center items-center animation-pulser"></div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-1 text-title">Elena Ferreira</h2>
          <p className="text-lg text-subtitle">Développeuse Front-End</p>
        </div>
      </div>

      <p className="text-base leading-relaxed">
        Passionné par le développement web et la création d'interfaces utilisateur modernes. Toujours à la recherche de nouveaux défis techniques.
      </p>
    </BentoBox>
  );
};
