import Marquee from "react-fast-marquee";
import { bebasNeue } from "@/utils/fonts";
import styles from "./MarqueeBanner.module.css";

export default function MarqueeBanner() {
  return (
    <div className={`${styles.container_marquee} ${bebasNeue.className}`}>
      <Marquee speed={100}>
        <span>&#128203;Skills: </span>
        {/* prettier-ignore */ "     "}
        <span>✅🌐Full Stack Web & Mobile Development</span>
        {/* prettier-ignore */ "     "}
        <span>✅🔍Search Engine Optimization</span>
        {/* prettier-ignore */ "     "}
        <span>✅🏢Backend Services & RestAPIs</span>
        {/* prettier-ignore */ "     "}
        <span>✅🗃️SQL & NoSQL Databases</span>
        {/* prettier-ignore */ "     "}
        <span>✅☁️Cloud Services & App Deployment</span>
        {/* prettier-ignore */ "     "}
        <span>✅🚢Docker, CI/CD pipelines</span>
        {/* prettier-ignore */ "     "}
        <span>✅🔧Unit Testing</span>
        {/* prettier-ignore */ "     "}
        <span>✅⚡Power Platform Low Code Development</span>
        {/* prettier-ignore */ "     "}
        <span>✅🖼️Software UI Design & Prototyping</span>
        {/* prettier-ignore */ "     "}
        <span>And More!👌</span>
        {/* prettier-ignore */ "                                             "}
      </Marquee>
    </div>
  );
}
