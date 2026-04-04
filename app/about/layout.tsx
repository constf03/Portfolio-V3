import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Me - Stefano Confalone Sofware Development Portfolio",
  description:
    "Who am I as a developer? What experience and competences do I have? Find information about me on this page.",
};

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
