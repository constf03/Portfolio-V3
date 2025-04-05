import React from "react";
import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.linkbox}>
        <Link href="/">Home</Link>
      </div>
      <div className={styles.linkbox}>
        <Link href="/showcase">Showcase</Link>
      </div>
      <div className={styles.linkbox}>
        <Link href="/about">About Me</Link>
      </div>
      <div className={styles.linkbox}>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
