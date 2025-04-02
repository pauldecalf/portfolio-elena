import React from "react";

const BentoBox = ({ children, className = "", onClick = null }) => {
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
        col-span-12
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BentoBox;
