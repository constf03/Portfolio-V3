import Image from "next/image";
import Link from "next/link";
import { bebasNeue } from "@/utils/fonts";
import Image01 from "../../public/images/LinkedIn_logo_initials.png";
import Image02 from "../../public/images/github.png";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small className={bebasNeue.className}>
        Stefano Confalone | Personal Website
      </small>
      <div className={styles.footer_links}>
        <Link
          href="https://www.linkedin.com/in/stefano-confalone-a0ba352a7/"
          target="blank"
        >
          <Image src={Image01} width={34} height={34} alt="LinkedIn logo" />
        </Link>
        <Link href="https://github.com/constf03" target="blank">
          <Image src={Image02} width={34} height={34} alt="GitHub logo" />
        </Link>
      </div>
    </footer>
  );
}
