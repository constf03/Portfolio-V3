import React, { FC, ReactNode } from "react";
import styles from "./Content.module.css";

interface ContentProps {
  children: ReactNode;
}

const Content: FC<ContentProps> = ({ children }: ContentProps) => {
  return <div className={styles.container_content}>{children}</div>;
};

export default Content;
