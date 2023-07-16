"use client";
import { Experimental_CssVarsProvider } from "@mui/material";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import ClientOnly from "./components/client-only";
import ThemeHandler from "./components/theme-handler.component";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cody's Portfolio",
  description: "Mathematician, Developer, Traveler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Experimental_CssVarsProvider>
            <ThemeHandler />
            {children}
          </Experimental_CssVarsProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
