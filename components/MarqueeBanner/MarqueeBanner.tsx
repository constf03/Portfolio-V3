import Marquee from "react-fast-marquee";
import styles from "./MarqueeBanner.module.css";

export default function MarqueeBanner() {
  return (
    <div className={styles.container_marquee}>
      <Marquee speed={100}>
        <span>&#128203;Skills: </span>
        {/* prettier-ignore */ "     "}
        <span>&#127760;Full stack web and mobile development</span>
        {/* prettier-ignore */ "     "}
        <span>✅Typescript, React, Next.js, React Native & Expo</span>
        {/* prettier-ignore */ "     "}
        <span>&#127912;Web Styles</span>
        {/* prettier-ignore */ "     "}
        <span>✅CSS, SCSS, Bootstrap, Tailwinds, MUI</span>
        {/* prettier-ignore */ "     "}
        <span>🔍SEO</span>
        {/* prettier-ignore */ "     "}
        <span>&#128187;Server Programming</span>
        {/* prettier-ignore */ "     "}
        <span>✅Node.js, Express, Sequelize</span>
        {/* prettier-ignore */ "     "}
        <span>&#128196;Data modelling, request handling, middleware</span>
        {/* prettier-ignore */ "     "}
        <span>🗃SQL & No-SQL databases</span>
        {/* prettier-ignore */ "     "}
        <span>✅PostgreSQL, MongoDB</span>
        {/* prettier-ignore */ "     "}
        <span>☁Cloud Deployment & CI</span>
        {/* prettier-ignore */ "     "}
        <span>✅Azure, AWS, Aiven</span>
        {/* prettier-ignore */ "     "}
        <span>🚢Docker Containerizing</span>
        {/* prettier-ignore */ "     "}
        <span>⚡Power Platform Low-Code Apps</span>
        {/* prettier-ignore */ "     "}
        <span>And More!👌</span>
        {/* prettier-ignore */ "                                             "}
      </Marquee>
    </div>
  );
}
