"use client";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import { Button } from "react-bootstrap";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import Image from "next/image";
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
                      src="/images/outside01.jpg"
                      width={1}
                      height={1}
                      layout="responsive"
                      alt="restaurant"
                      loading="lazy"
                    />
                  </div>
                  <p>
                    I created and updated the website of oriental restaurant
                    Ravintola Johnny Hong Kong Hyvinkää in my 2024 and 2025
                    internship.
                  </p>
                  <Button>Read more about this project</Button>
                </div>
                <div className="container-showcase-item">
                  <h4>Job Offer Letter Creation App</h4>
                  <span>Topic: low-code development</span>
                  <div></div>
                  <Button>Read more about this project</Button>
                </div>
                <div className="container-showcase-item">
                  <h4>KRJ Admin</h4>
                  <span>Topic: mobile development</span>
                  <div></div>
                  <Button>Read more about this project</Button>
                </div>
                <div className="container-showcase-item">
                  <h4>{"Full stack game: 'Meteorite destroyers'"}</h4>
                  <span>Topic: full stack development</span>
                  <div>
                    <Image
                      src="/images/game_preview.png"
                      width={1}
                      height={1}
                      layout="responsive"
                      alt="meteorite destroyers preview"
                      loading="lazy"
                    />
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
