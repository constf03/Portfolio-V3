import Image from "next/image";
import React from "react";
import portrait from "@/app/_images/con-stefano.jpg";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image className={styles.portait} src={portrait} alt="" width={128} />
      <div>
        <h1 className="h1">
          <b>Stefano Confalone</b>
        </h1>
        <p className="h5">
          Software Development <br /> Student Portfolio
        </p>
      </div>
    </div>
  );
}
