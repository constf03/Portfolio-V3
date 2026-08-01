import { ReactNode } from "react";
import { bebasNeue } from "@/utils/fonts";
import styles from "./Banner.module.css";

interface BannerProps {
  children: ReactNode;
}

export default function Banner({ children }: BannerProps) {
  return (
    <div className={styles.banner_overlay}>
      <div className={styles.banner}>
        <div className={styles.banner_head}>
          <header style={{ display: "flex", flexDirection: "column" }}>
            <h1 className={`${styles.name_tag} ${bebasNeue.className}`}>
              <strong>Stefano Confalone</strong>
            </h1>

            <i>Software Developer Portfolio</i>

            <small className={styles.education_tag} style={{ fontSize: "10px" }}>
              Bachelor of Engineering, Information and Communication Technology
              (Jamk 2025) &#127891;
            </small>
          </header>
        </div>

        <nav className={styles.nav_wrapper}>{children}</nav>
      </div>
    </div>
  );
}
