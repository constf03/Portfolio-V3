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
          <h2 className="h2">
            <b>Stefano Confalone</b>
          </h2>
          <h2 className="h6">
            Software Development <br /> Student Portfolio
          </h2>
        </div>
      </div>
      <div className={styles.nav_wrapper}>{children}</div>
    </div>
  );
}
