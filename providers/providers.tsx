"use client";
import { I18nProviderClient } from "@/locales/client";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";

export const Providers = (props: PropsWithChildren<{ locale: string }>) => {
  return (
    <ThemeProvider>
      <I18nProviderClient locale={props.locale}>{props.children}</I18nProviderClient>
    </ThemeProvider>
  );
};
