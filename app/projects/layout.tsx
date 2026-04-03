import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/styles/colors.css";
import "@/styles/globals.css";
import { lato } from "@/utils/fonts";
import "@/styles/typography.css";

export const metadata: Metadata = {
  title: "Projects - Stefano Confalone Sofware Development Portfolio",
  description: "View a list of my projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className={lato.className}>{children}</div>;
}
