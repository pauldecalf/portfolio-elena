import { Providers } from "@/providers/providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elena Ferreira - Portfolio",
  description: "Elena Ferreira - Portfolio",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;

  return (
    <html lang="en-EN" dir="ltr">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Solibad" />
      </head>

      <body>
        <Providers locale={resolvedParams.locale}>{children}</Providers>
      </body>
    </html>
  );
}
