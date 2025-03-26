import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Elena Ferreira - Portfolio",
  description: "Elena Ferreira - Portfolio",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={params.locale || "en"}>
      <body>
        <Providers locale={params.locale || "en"}>
          <ThemeProvider>{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
