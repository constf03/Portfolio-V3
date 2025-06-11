import React from "react";
import styles from "./MarqueeBanner.module.css";

export default function MarqueeBanner() {
  return (
    <div className={styles.banner_container}>
      <span className={styles.sliding_text}>
        <b>
          <i>Welcome To My Portfolio!</i>
        </b>
      </span>
    </div>
  );
}
