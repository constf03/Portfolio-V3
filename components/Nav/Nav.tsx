import Link from "next/link";
import { useEffect } from "react";
import { bebasNeue } from "@/utils/fonts";
import styles from "./Nav.module.css";

interface NavProps {
  location?: "home" | "about" | "projects" | "contact" | undefined;
}

export default function Nav({ location }: NavProps) {
  const activeLink: string = styles.linkbox_current;

  useEffect(() => {
    const home: HTMLElement | null = document.getElementById("linkbox_home");
    const showcase: HTMLElement | null =
      document.getElementById("linkbox_showcase");
    const about: HTMLElement | null = document.getElementById("linkbox_about");
    const contact: HTMLElement | null =
      document.getElementById("linkbox_contact");

    switch (location) {
      case "home":
        home?.classList.add(activeLink);
        break;
      case "projects":
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
  }, [location, activeLink]);

  return (
    <div className={`${styles.nav} ${bebasNeue.className}`}>
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
