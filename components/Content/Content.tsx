import { ReactNode } from "react";
import styles from "./Content.module.css";

interface ContentProps {
  children: ReactNode;
}

export default function Content({ children }: ContentProps) {
  return <main className={`${styles.container_content}`}>{children}</main>;
}
