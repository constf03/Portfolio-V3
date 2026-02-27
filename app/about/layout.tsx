import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Me - Stefano Confalone Sofware Development Portfolio",
  description: "Software development portfolio about page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div>{children}</div>;
}
