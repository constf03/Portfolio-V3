import Marquee from "react-fast-marquee";
import styles from "./MarqueeBanner.module.css";

export default function MarqueeBanner() {
  return (
    <div className={styles.marquee_container}>
      <Marquee speed={80}>
        <span>
          <i>Welcome to my portfolio!</i>
        </span>
        {/* prettier-ignore */ "     "}
        <span>Full stack web and mobile development</span>
        {/* prettier-ignore */ "     "}
        <span>+358 45 324 3803 | stefano.confalone03@gmail.com</span>
        {/* prettier-ignore */ "                                             "}
      </Marquee>
    </div>
  );
}
