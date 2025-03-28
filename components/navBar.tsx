"use client";

import React, { useState } from "react";
import { LanguageSelect } from "./languageSelect";
import { useScopedI18n } from "@/locales/client";

export default function NavBar() {
  const menu_T = useScopedI18n("menu");
  const [activeTab, setActiveTab] = useState(menu_T("all"));

  // Espace commentaire pour Loris esclave qui m'aide
  //

  return (
    <div className="w-fit bg-navbar-background rounded-full p-2 my-6 flex space-x-4 z-20">
      {[menu_T("all"), menu_T("about"), menu_T("work")].map((item) => (
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
