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
                  <h4>Website For a Restaurant</h4>
                  <span>Topic: full stack web development</span>
                  <div className="wrapper-showcase-img mt-2">
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
                    <Button>Read more about this project</Button>
                  </div>
                </div>
                <div className="container-showcase-item">
                  <h4>Job Offer Letter Creation App</h4>
                  <span>Topic: low-code development</span>
                  <div className="wrapper-showcase-img mt-2">
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
                  <div className="wrapper-showcase-button">
                    <Button>Read more about this project</Button>
                  </div>
                </div>
                <div className="container-showcase-item">
                  <h4>KRJ Admin</h4>
                  <span>Topic: mobile development</span>
                  <div></div>
                  <div className="wrapper-showcase-button">
                    <Button>Read more about this project</Button>
                  </div>
                </div>
                <div className="container-showcase-item">
                  <h4>{"Full stack game: 'Meteorite destroyers'"}</h4>
                  <span>Topic: full stack development</span>
                  <div>
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
                  <div className="wrapper-showcase-button">
                    <Button>Read more about this project</Button>
                  </div>
                </div>
              </section>
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
