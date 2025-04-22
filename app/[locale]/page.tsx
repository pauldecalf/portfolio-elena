"use client";

import React, { useEffect } from "react";
import NavBar from "@/components/navBar";
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
  LbfBox,
  UnityBox,
  WebpizzaBox,
  WaveChatBox,
  PeppersoftBox,
  EuresisBox,
  RePairBox,
} from "@/components/bento";

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
    <div className="min-h-screen flex flex-col w-full justify-start items-center">
      <NavBar />

      <main className="w-11/12 max-w-6xl py-6 grid grid-cols-12 gap-4">
        <ProfileBox />
        <BannerBox />
        <MapBox />
        <ResumeBox />
        <ThemeToggleBox />
        <LinkedinBox />
        <GithubBox />
        <InstaBox />
        <SkillsBox />
        <MailBox />
        <ExperienceBox />

        <LbfBox />
        <UnityBox />
        <PeppersoftBox />
        <WebpizzaBox />
        <WaveChatBox />
        <EuresisBox />
        <RePairBox />
      </main>
    </div>
  );
}
