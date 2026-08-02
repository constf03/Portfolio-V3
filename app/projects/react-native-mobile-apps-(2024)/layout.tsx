import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "React Native Mobile Apps (2024) - Stefano Confalone Sofware Development Portfolio",
  description: "Software development portfolio projects showcase page.",
  robots: {
    index: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div>{children}</div>;
}
