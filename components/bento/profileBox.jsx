import React from "react";
import Image from "next/image";
import BentoBox from "../bentoBox";

export const ProfileBox = () => {
  return (
    <BentoBox className="flex flex-col justify-center p-5 md:col-span-2 h-full">
      <div className="flex items-center mb-4">
        <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex items-center justify-center mr-6">
          <Image src="/./images/me.jpeg" alt="Votre nom" width={110} height={110} />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-1">Elena Ferreira</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Développeuse Front-End</p>
        </div>
      </div>

      <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
        Passionné par le développement web et la création d'interfaces utilisateur modernes. Toujours à la recherche de nouveaux défis techniques.
      </p>
    </BentoBox>
  );
};
