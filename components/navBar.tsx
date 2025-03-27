"use client";

import React, { useState } from "react";
import { LanguageSelect } from "./languageSelect";

export default function NavBar() {
  const [activeTab, setActiveTab] = useState("All");

  // Espace commentaire pour Loris esclave qui m'aide
  //

  return (
    <div className="w-fit bg-navbar-background rounded-full p-2 my-6 flex space-x-4 z-20">
      {["All", "About", "Work"].map((item) => (
        <div
          key={item}
          className={`w-24 sm:w-32 cursor-pointer text-center border-2 border-transparent rounded-full px-4 py-2 ${
            activeTab === item ? "bg-navbar" : "text-subtitle"
          }`}
          onClick={() => setActiveTab(item)}
        >
          {item}
        </div>
      ))}
      <LanguageSelect />
    </div>
  );
}
