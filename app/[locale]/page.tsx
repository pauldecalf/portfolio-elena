"use client";

import React, { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import NavBar from "@/components/navBar";

// Chargement dynamique des composants
const ProfileBox = dynamic(() => import("@/components/bento").then((mod) => mod.ProfileBox));
const MapBox = dynamic(() => import("@/components/bento").then((mod) => mod.MapBox));
const ThemeToggleBox = dynamic(() => import("@/components/bento").then((mod) => mod.ThemeToggleBox));
const ResumeBox = dynamic(() => import("@/components/bento").then((mod) => mod.ResumeBox));
const BannerBox = dynamic(() => import("@/components/bento").then((mod) => mod.BannerBox));
const LinkedinBox = dynamic(() => import("@/components/bento").then((mod) => mod.LinkedinBox));
const GithubBox = dynamic(() => import("@/components/bento").then((mod) => mod.GithubBox));
const MailBox = dynamic(() => import("@/components/bento").then((mod) => mod.MailBox));
const SkillsBox = dynamic(() => import("@/components/bento").then((mod) => mod.SkillsBox));
const MaltBox = dynamic(() => import("@/components/bento").then((mod) => mod.MaltBox));
const ExperienceBox = dynamic(() => import("@/components/bento").then((mod) => mod.ExperienceBox));

const projects = [
  dynamic(() => import("@/components/bento").then((mod) => mod.EuresisBox)),
  dynamic(() => import("@/components/bento").then((mod) => mod.RePairBox)),
  dynamic(() => import("@/components/bento").then((mod) => mod.LbfBox)),
  dynamic(() => import("@/components/bento").then((mod) => mod.UnityBox)),
  dynamic(() => import("@/components/bento").then((mod) => mod.PeppersoftBox)),
  dynamic(() => import("@/components/bento").then((mod) => mod.WaveChatBox)),
  dynamic(() => import("@/components/bento").then((mod) => mod.WebpizzaBox)),
];

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
    <div className="relative z-10 min-h-screen flex flex-col w-full justify-start items-center">
      <NavBar />

      <main className="w-11/12 max-w-6xl py-6 grid grid-cols-12 gap-4">
        <Suspense fallback={<div className="col-span-12 h-32 bg-gray-200 animate-pulse rounded-lg" />}>
          <ProfileBox />
          <BannerBox />
          <MapBox />
          <ResumeBox />
          <ThemeToggleBox />
          <LinkedinBox />
          <GithubBox />
          <MaltBox />
          <SkillsBox />
          <MailBox />
          <ExperienceBox />
        </Suspense>

        <div className="col-span-12 grid grid-cols-12 gap-4 row-start-[28] md:row-start-auto">
          {projects.map((Project, i) => (
            <div key={i} className="col-span-12 md:col-span-6">
              <Suspense fallback={<div className="h-64 bg-gray-200 animate-pulse rounded-lg" />}>
                <Project />
              </Suspense>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
