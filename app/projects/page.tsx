"use client";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import { Button } from "react-bootstrap";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import Image from "next/image";
import Image01 from "@/public/images/krj_website_preview.jpg";
import Image02 from "@/public/images/offerletterapp_preview.png";
import Image03 from "@/public/images/game_preview.png";
import Image04 from "@/public/images/krj-admin-preview.png";
import Image05 from "@/public/images/iptv_preview.png";
import Image06 from "@/public/images/mobile_apps_preview.png";
import Link from "next/link";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";

export default function ProjectsPage() {
  return (
    <>
      <div className="page">
        <div className="page-content">
          <Banner>
            <Nav currentLoc="showcase" />
          </Banner>
          <UnderNavBar />
          <Content>
            <BreadcrumbBar text="/ Projects" />
            <section style={{ marginBottom: "100px", padding: "8px" }}>
              <h1 className="h1">Projects Showcase</h1>
              <hr></hr>
              <section className="container-showcase">
                <div className="container-showcase-item">
                  <h4 className="h5">Website For a Restaurant (2024-2025)</h4>
                  <span>Topic: full stack web development</span>
                  <div className="mt-2">
                    <Image
                      src={Image01}
                      width={1}
                      height={1}
                      layout="responsive"
                      alt="restaurant website project preview"
                      loading="lazy"
                      placeholder="blur"
                    />
                  </div>
                  <p>
                    I created and updated the website of oriental restaurant
                    Ravintola Johnny Hong Kong Hyvinkää in my 2024 and 2025
                    internship.
                  </p>
                  <div className="wrapper-showcase-button">
                    <Button>
                      <Link
                        href="projects/website-for-a-restaurant-(2024-2025)"
                        style={{ color: "white" }}
                      >
                        Read more about this project
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="container-showcase-item">
                  <h4 className="h5">Job Offer Letter Creation App (2025)</h4>
                  <span>Topic: low-code development</span>
                  <div className="mt-2">
                    <Image
                      src={Image02}
                      width={1}
                      height={1}
                      layout="responsive"
                      alt="offer letter app preview"
                      loading="lazy"
                      placeholder="blur"
                    />
                  </div>
                  <p>
                    {`
                        Developed in Power Apps Studio, this business application facilitates the creation of job offer letters.
                        This project was part of my 2025 Bachelor's thesis.
                      `}
                  </p>
                  <div className="wrapper-showcase-button">
                    <Button>
                      <Link
                        href="projects/job-offer-letter-creation-app-(2025)"
                        style={{ color: "white" }}
                      >
                        Read more about this project
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="container-showcase-item">
                  <h4 className="h5">KRJ Admin (2025)</h4>
                  <span>Topic: mobile development</span>
                  <div className="mt-2">
                    <Image
                      src={Image04}
                      width={1}
                      height={1}
                      layout="responsive"
                      alt="KRJ ADMIN preview"
                      loading="lazy"
                      placeholder="blur"
                    />
                  </div>
                  <p>
                    {`
                        With React Native & Expo I created a mobile application for handling customer orders.
                        This project was part of my 2025 internship, and the software is meant to be
                        private property of oriental restaurant Ravintola Johnny Hong Kong Hyvinkää.
                      `}
                  </p>
                  <div className="wrapper-showcase-button">
                    <Button>
                      <Link
                        href="projects/krj-admin-(2025)"
                        style={{ color: "white" }}
                      >
                        Read more about this project
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="container-showcase-item">
                  <h4 className="h5">Fictional IPTV Website (2024)</h4>
                  <span>Topic: web development & design</span>
                  <div className="mt-2">
                    <Image
                      src={Image05}
                      width={1}
                      height={1}
                      layout="responsive"
                      alt="IPTV website preview"
                      loading="lazy"
                      placeholder="blur"
                    />
                  </div>
                  <p>
                    A fictional IPTV service website that I made on a web
                    visualization course. It is a frontend-only implementation.
                    The main focus of the site is its visual outlook and
                    responsiveness. Used Bootstrap and SCSS pre-processor.
                  </p>
                  <div className="wrapper-showcase-button">
                    <Button disabled>
                      <Link
                        href="projects/krj-admin-(2025)"
                        style={{ color: "white" }}
                      >
                        Read more about this project
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="container-showcase-item">
                  <h4 className="h5">React Native Mobile Apps (2024)</h4>
                  <span>Topic: mobile development</span>
                  <div className="mt-2">
                    <Image
                      src={Image06}
                      width={1}
                      height={1}
                      layout="responsive"
                      alt="mobile apps preview"
                      loading="lazy"
                      placeholder="blur"
                    />
                  </div>
                  <p>
                    A collection of simple React Native mobile applications that
                    I made on a mobile app development course in 2024.
                  </p>
                  <div className="wrapper-showcase-button">
                    <Button disabled>
                      <Link
                        href="projects/krj-admin-(2025)"
                        style={{ color: "white" }}
                      >
                        Read more about this project
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="container-showcase-item">
                  <h4 className="h5">
                    {`Full stack game: "Meteorite destroyers" (2023)`}
                  </h4>
                  <span>Topic: full stack web development</span>
                  <div className="mt-2">
                    <Image
                      src={Image03}
                      width={1}
                      height={1}
                      layout="responsive"
                      alt="meteorite destroyers preview"
                      loading="lazy"
                      placeholder="blur"
                    />
                  </div>
                  <p>
                    A game made using Phaser.js framework. This was my first
                    full stack implementation.
                  </p>
                  <div className="wrapper-showcase-button">
                    <Button disabled>
                      <Link
                        href="projects/krj-admin-(2025)"
                        style={{ color: "white" }}
                      >
                        Read more about this project
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
              <hr></hr>
            </section>
          </Content>
          <Footer />
        </div>
      </div>
      <div className="bg-one"></div>
      <div className="bg-fade"></div>
      <div className="bg-two"></div>
    </>
  );
}
