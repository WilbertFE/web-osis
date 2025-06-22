"use client";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/app/components/Navigation";
import { SessionProvider } from "next-auth/react";
import Footer from "./Footer";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
