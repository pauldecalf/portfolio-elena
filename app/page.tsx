"use client";

import React, { useEffect } from "react";
import NavBar from "../components/navBar";
import {
  ProfileBox,
  MapBox,
  ThemeToggleBox,
  ResumeBox,
  BannerBox,
  LinkedinBox,
  GithubBox,
  MailBox,
  SkillsBox,
  InstaBox,
  ExperienceBox,
} from "../components/bento";

export default function Home() {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full justify-start items-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300">
      <NavBar />

      <main className="w-11/12 max-w-6xl py-6">
        {/* Première section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          <ProfileBox />

          <div className="lg:col-span-2 md:col-span-2 flex flex-col gap-4">
            <BannerBox />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MapBox />

              <div className="flex flex-col h-full justify-between gap-4">
                <ResumeBox />
                <ThemeToggleBox />
              </div>
            </div>
          </div>
        </div>

        {/* Deuxième section */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          <MapBox />

          <BentoBox className="flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1">Disponible</h3>
              <p className="text-sm">pour de nouveaux projets</p>
            </div>
          </BentoBox>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6-4">
          <div className="flex flex-col h-full justify-between gap-4">
            <LinkedinBox />
            <GithubBox />
            <InstaBox />
          </div>

          <div className="flex flex-col h-full justify-between gap-4 md:col-span-2 lg:col-span-2">
            <SkillsBox />
            <MailBox />
          </div>

          <div className="flex flex-col h-full justify-between gap-4 md:col-span-3 lg:col-span-3">
            <ExperienceBox />
          </div>
        </div>
      </main>
    </div>
  );
}
