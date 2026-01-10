"use client";
import React, { useEffect } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";

type props = {
  currentLoc: string;
};

export default function Nav({ currentLoc }: props) {
  const activeLink: string = styles.linkbox_current;

  useEffect(() => {
    const home: HTMLElement | null = document.getElementById("linkbox_home");
    const showcase: HTMLElement | null =
      document.getElementById("linkbox_showcase");
    const about: HTMLElement | null = document.getElementById("linkbox_about");
    const contact: HTMLElement | null =
      document.getElementById("linkbox_contact");

    switch (currentLoc) {
      case "home":
        home?.classList.add(activeLink);
        break;
      case "showcase":
        showcase?.classList.add(activeLink);
        break;
      case "about":
        about?.classList.add(activeLink);
        break;
      case "contact":
        contact?.classList.add(activeLink);
        break;
      default:
        break;
    }
  }, [currentLoc, activeLink]);

  return (
    <div className={styles.nav}>
      <div className={styles.links_wrapper}>
        <div id="linkbox_home" className={styles.linkbox}>
          <Link href="/">Home</Link>
        </div>
        <div id="linkbox_showcase" className={styles.linkbox}>
          <Link href="/projects">Projects</Link>
        </div>
        <div id="linkbox_about" className={styles.linkbox}>
          <Link href="/about">About Me</Link>
        </div>
        <div id="linkbox_contact" className={styles.linkbox}>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
