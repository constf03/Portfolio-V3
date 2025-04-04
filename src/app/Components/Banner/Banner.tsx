import React from "react";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
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
  );
}
