import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slideshow() {
  return (
    <Carousel slide={true} interval={4000}>
      <Carousel.Item>
        <img
          src="https://picsum.photos/seed/a/1600/900"
          style={{ width: "100%", height: "400px" }}
          alt="..."
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://picsum.photos/seed/b/1920/1080"
          style={{ width: "100%", height: "400px" }}
          alt="..."
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://picsum.photos/seed/c/1366/768"
          style={{ width: "100%", height: "400px" }}
          alt="..."
        />
      </Carousel.Item>
    </Carousel>
  );
}
