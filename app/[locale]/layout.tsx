import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Elena Ferreira - Portfolio",
  description: "Elena Ferreira - Portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html>
      <body>
        <Providers locale={params.locale}>
          <ThemeProvider>{children}</ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
