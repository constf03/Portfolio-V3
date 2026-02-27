import "bootstrap/dist/css/bootstrap.css";
import "@/styles/colors.css";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReactNode } from "react";
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
