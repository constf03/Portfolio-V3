import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./Slideshow.module.css";

export default function Slideshow() {
  return (
    <Carousel slide={true} interval={4000}>
      <Carousel.Item>
        <img
          src="/images/display_websites.png"
          className={styles.slideshow_image}
          alt="..."
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/display_websites.png"
          className={styles.slideshow_image}
          alt="..."
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/images/display_websites.png"
          className={styles.slideshow_image}
          alt="..."
        />
      </Carousel.Item>
    </Carousel>
  );
}
