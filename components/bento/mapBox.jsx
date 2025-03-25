// import BentoBox from "../bentoBox";

// export const MapBox = () => {
//   return (
//     <BentoBox className="h-full min-h-[200px] relative overflow-hidden">
//       <div className="absolute inset-0">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.4607291899983!2d2.3665818761809314!3d48.868492899995864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3b07a45603%3A0x76ebccf5f697f6fa!2sDigital%20Campus%20Paris!5e0!3m2!1sfr!2sfr!4v1741871929549!5m2!1sfr!2sfr"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//       <div className="absolute bottom-0 left-0 p-3 bg-background/80 rounded-tr-lg">
//         <p className="text-sm font-medium">Paris, France</p>
//       </div>
//     </BentoBox>
//   );
// };

import { useTheme } from "@/app/providers";
import BentoBox from "../bentoBox";

export const MapBox = () => {
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  return (
    <BentoBox className="h-full min-h-[200px] relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={isLightMode ? "/images/mapLight.png" : "/images/mapDark.png"} alt="Map" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 p-3 bg-background/80 rounded-tr-lg">
        <p className="text-sm font-medium">Paris, France</p>
      </div>
    </BentoBox>
  );
};
