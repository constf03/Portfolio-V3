import Link from "next/link";
import { bebasNeue } from "@/utils/fonts";
import styles from "./BreadcrumbBar.module.css";

interface BreadcrumbBarProps {
  linkText?: string;
  href?: string;
  text?: string;
}

export default function BreadcrumbBar({
  linkText = "Back to home page.",
  href = "/",
  text,
}: BreadcrumbBarProps) {
  return (
    <div className={`${styles.breadcrumb_container} ${bebasNeue.className}`}>
      <span>{text}</span>
      <Link href={href} legacyBehavior>
        <a className={styles.breadcrumb_link}>
          <span className={styles.link_text}>{linkText}</span>
        </a>
      </Link>
    </div>
  );
}
