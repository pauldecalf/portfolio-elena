"use client";

import { useEffect, useState } from "react";
import { useScopedI18n } from "@/locales/client";

const CustomCursor = () => {
  const project_T = useScopedI18n("project");

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setShowMessage(true);
    const handleMouseLeave = () => setShowMessage(false);

    window.addEventListener("mousemove", handleMouseMove);

    const elements = document.querySelectorAll(".cursor-tooltip");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className="fixed top-5 left-0 pointer-events-none z-[9999] transition-transform duration-30"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      {showMessage && <div className="px-2 py-1 text-xs font-medium bg-black text-white rounded shadow-lg">{project_T("cursor")}</div>}
    </div>
  );
};

export default CustomCursor;
