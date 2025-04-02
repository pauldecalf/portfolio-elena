"use client";
import { I18nProviderClient } from "@/locales/client";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { TabProvider } from "./tabContext";

export const Providers = (props: PropsWithChildren<{ locale: string }>) => {
  return (
    <TabProvider>
      <ThemeProvider>
        <I18nProviderClient locale={props.locale}>{props.children}</I18nProviderClient>
      </ThemeProvider>
    </TabProvider>
  );
};
