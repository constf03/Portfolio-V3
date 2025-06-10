import React from "react";
import styles from "./MarqueeBanner.module.css";

export default function MarqueeBanner() {
  return (
    <div className={styles.banner_container}>
      <span className={styles.sliding_text}>Welcome To My Portfolio!</span>
    </div>
  );
}
