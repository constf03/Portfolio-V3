import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./MarqueeBanner.module.css";

export default function MarqueeBanner() {
  return (
    <div className={styles.banner_container}>
      <Marquee speed={80}>
        <span>Welcome to my portfolio!</span>
        {/* prettier-ignore */ "     "}
        <span>Full stack web and mobile development</span>
        {/* prettier-ignore */ "     "}
        <span>+358 45 324 3803 | stefano.confalone03@gmail.com</span>
        {/* prettier-ignore */ "     "}
      </Marquee>
    </div>
  );
}
