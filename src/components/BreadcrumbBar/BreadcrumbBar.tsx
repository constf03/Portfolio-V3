import Link from "next/link";
import styles from "./BreadcrumbBar.module.css";

interface BreadcrumbBarProps {
  text?: string;
  href?: string;
}

export default function BreadcrumbBar({
  text = "Back to home page.",
  href = "/",
}: BreadcrumbBarProps) {
  return (
    <div className={styles.breadcrumb_container}>
      <Link href={href} legacyBehavior>
        <a className={styles.breadcrumb_link}>
          <span>{text}</span>
        </a>
      </Link>
    </div>
  );
}
