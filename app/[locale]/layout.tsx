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
        <link rel="icon" type="image/png" href="/images/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Elena Ferreira" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </head>

      <body className="relative w-full h-full min-h-screen bg-grid">
        <Providers locale={resolvedParams.locale}>{children}</Providers>
      </body>
    </html>
  );
}
