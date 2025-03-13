import React from "react";

const BentoBox = ({ children, className = "", colSpan = 1, rowSpan = 1, onClick = null }) => {
  return (
    <div
      className={`
        bg-white/60 dark:bg-gray-800
        hover:bg-white 
        rounded-3xl shadow-md 
        p-4 
        transition-all duration-300 ease-in-out
        ${onClick ? "hover:shadow-lg hover:scale-[1.01] cursor-pointer" : ""}
        ${className}
        ${colSpan > 1 ? `md:col-span-${colSpan}` : ""}
        ${rowSpan > 1 ? `md:row-span-${rowSpan}` : ""}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BentoBox;
