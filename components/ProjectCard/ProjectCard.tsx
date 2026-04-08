import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  topic: string;
  imgSrc: string | StaticImageData;
  imgAltText: string;
  description: string;
  buttonText?: string;
  href: string;
}

export default function ProjectCard({
  title,
  topic,
  imgSrc,
  imgAltText,
  description,
  buttonText = "Read more about this project",
  href,
}: ProjectCardProps) {
  return (
    <div className={styles.container_project_card}>
      <div className={styles.wrapper_project_card_image}>
        <Image
          src={imgSrc}
          width={1}
          height={1}
          layout="responsive"
          alt={imgAltText}
          loading="lazy"
          placeholder="blur"
        />
      </div>

      <div className={styles.wrapper_project_card_body}>
        <div className={styles.wrapper_project_card_info}>
          <h3>
            <b>{title}</b>
          </h3>

          <span>Topic: {topic}</span>

          <p className={styles.wrapper_project_card_info_desc}>{description}</p>
        </div>

        <div className={styles.wrapper_project_card_button}>
          <Link href={href} style={{ width: "100%" }}>
            <button style={{ width: "100%" }}>
              <span style={{ color: "white" }}>{buttonText}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
