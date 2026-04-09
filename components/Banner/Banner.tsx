import Image from "next/image";
import { ReactNode } from "react";
import { bebasNeue } from "@/utils/fonts";
import Image01 from "@/public/images/con-stefano.jpg";
import styles from "./Banner.module.css";

interface BannerProps {
  children: ReactNode;
}

export default function Banner({ children }: BannerProps) {
  return (
    <div className={styles.banner_overlay}>
      <div className={styles.banner}>
        <div className={styles.banner_head}>
          <Image
            src={Image01}
            className={styles.portrait}
            width={128}
            height={128}
            alt="Stefano Confalone"
            loading="lazy"
          />
          <header style={{ display: "flex", flexDirection: "column" }}>
            <h1 className={`${styles.name_tag} ${bebasNeue.className}`}>
              <strong>Stefano Confalone</strong>
            </h1>

            <span>
              <i>My Software Development Portfolio</i>
            </span>

            <span className={styles.education_tag} style={{ fontSize: "10px" }}>
              Bachelor of Engineering, Information and Communication Technology
              (Jamk 2025) &#127891;
            </span>
          </header>
        </div>

        <nav className={styles.nav_wrapper}>{children}</nav>
      </div>
    </div>
  );
}
