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
      <h3>{title}</h3>

      <span>Topic: {topic}</span>

      <div>
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

      <p>{description}</p>

      <div className={styles.wrapper_project_card_button}>
        <Link href={href} style={{ width: "100%" }}>
          <button style={{ width: "100%" }}>
            <span style={{ color: "white" }}>{buttonText}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
