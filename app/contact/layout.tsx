import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact - Stefano Confalone Sofware Development Portfolio",
  description:
    "Want to contact me? Find my contact info and links on this page.",
};

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
