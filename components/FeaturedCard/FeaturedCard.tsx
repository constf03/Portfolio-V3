import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./FeaturedCard.module.css";

interface FeatureCardProps {
  title: string;
  imgSrc: string | StaticImageData;
  imgAltText: string;
  href: string;
}

export default function FeaturedCard({
  title,
  imgSrc,
  imgAltText,
  href,
}: FeatureCardProps) {
  return (
    <div className={styles.container_featured_card}>
      <div className={styles.featured_image_wrapper}>
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
      <div>
        <span>
          <strong>{title}</strong>
        </span>
        <br></br>
        <Link href={href}>Read More</Link>
      </div>
    </div>
  );
}
