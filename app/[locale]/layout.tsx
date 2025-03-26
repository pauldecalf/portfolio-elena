import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers/providers";

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
    <html lang="en-EN" dir="ltr">
      <body>
        <Providers locale={params.locale}>{children}</Providers>
      </body>
    </html>
  );
}
