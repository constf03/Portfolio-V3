import React, { ReactNode } from "react";
import styles from "./Banner.module.css";
import Image from "next/image";

type BannerProps = {
  children: ReactNode;
};

export default function Banner({ children }: BannerProps) {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_head}>
        <Image
          src="/images/con-stefano.jpg"
          className={styles.portrait}
          width={128}
          height={128}
          alt="..."
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 className={styles.name_tag}>
            <b>Stefano Confalone</b>
          </h2>
          <span>
            <i>My Software Development Portfolio</i>
          </span>
          <small>Bachelor of Engineering (JAMK 2025)</small>
        </div>
      </div>
      <div className={styles.nav_wrapper}>{children}</div>
    </div>
  );
}
