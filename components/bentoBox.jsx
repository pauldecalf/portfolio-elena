import React from "react";

const BentoBox = ({ children, className = "", colSpan = 1, rowSpan = 1, onClick = null }) => {
  return (
    <div
      className={`
        bg-background
        hover:bg-background-hover
        border-bento-border
        border-2
        rounded-3xl shadow-md 
        transition-all duration-300 ease-in-out
        z-10
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
