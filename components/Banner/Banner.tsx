import Image from "next/image";
import { ReactNode } from "react";
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 className={styles.name_tag}>
              <b>Stefano Confalone</b>
            </h2>
            <span>
              <i>My Software Development Portfolio</i>
            </span>
            <span className={styles.education_tag} style={{ fontSize: "10px" }}>
              Bachelor of Engineering, Information and Communication Technology
              (Jamk 2025) &#127891;
            </span>
          </div>
        </div>
        <div className={styles.nav_wrapper}>{children}</div>
      </div>
    </div>
  );
}
