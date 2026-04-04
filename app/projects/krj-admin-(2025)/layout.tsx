import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "KRJ Admin (2025) - Stefano Confalone Sofware Development Portfolio",
  description: "Software development portfolio projects showcase page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div>{children}</div>;
}
