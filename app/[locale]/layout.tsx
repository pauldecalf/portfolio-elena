import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Elena Ferreira - Portfolio",
  description: "Elena Ferreira - Portfolio",
};

type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

// Ensure that params is passed as an object, not a Promise
export default function RootLayout({ children, params }: LayoutProps) {
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
