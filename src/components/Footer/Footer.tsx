import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import logo_linkedin from "../../public/images/LinkedIn_logo_initials.png";
import logo_github from "../../public/images/github.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_links}>
        <Link
          href="https://www.linkedin.com/in/stefano-confalone-a0ba352a7/"
          target="blank"
        >
          <Image src={logo_linkedin} width={38} height={38} alt="" />
        </Link>
        <Link href="https://github.com/constf03" target="blank">
          <Image src={logo_github} width={38} height={38} alt="" />
        </Link>
      </div>
      <small className={styles.copyright_tag}>
        Copyright (c) 2025 Stefano Confalone
      </small>
    </div>
  );
}
