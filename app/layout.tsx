import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/colors.css";
import "@/styles/globals.css";
import { lato } from "@/utils/fonts";
import "@/styles/typography.css";

export const metadata: Metadata = {
  title: "Home - Stefano Confalone Sofware Development Portfolio",
  description: "Software development portfolio home page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body>{children}</body>
    </html>
  );
}
