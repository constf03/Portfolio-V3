import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Projects - Stefano Confalone Sofware Development Portfolio",
  description: "Find information about all my showcased projects on this page.",
};

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
