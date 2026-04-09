import Link from "next/link";
import { useEffect, useState } from "react";
import { bebasNeue } from "@/utils/fonts";
import styles from "./BreadcrumbBar.module.css";

interface BreadcrumbBarProps {
  linkText?: string;
  href?: string;
}

export default function BreadcrumbBar({
  linkText = "Back to home page.",
  href = "/",
}: BreadcrumbBarProps) {
  const [pathName, setPathName] = useState<string>("");

  useEffect(() => {
    if (pathName !== window.location.pathname) {
      setPathName(window.location.pathname);
    }
  }, [pathName]);

  const formatPathName = (str: string): string => {
    const formatted = str
      .replaceAll("-", " ")
      .replaceAll("/", " / ")
      .replaceAll("/ portfolio v3 ", ""); // temp fix for github pages

    return formatted;
  };

  return (
    <div className={`${styles.breadcrumb_container} ${bebasNeue.className}`}>
      <span>{formatPathName(pathName)}</span>
      <Link href={href} legacyBehavior>
        <a className={styles.breadcrumb_link}>
          <span className={styles.link_text}>{linkText}</span>
        </a>
      </Link>
    </div>
  );
}
