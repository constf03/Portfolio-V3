import React, { ReactNode } from "react";
import styles from "./Banner.module.css";

type BannerProps = {
  children: ReactNode;
};

export default function Banner({ children }: BannerProps) {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_head}>
        <div className={styles.portrait}></div>
        <div>
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
