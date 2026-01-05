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
              <h2>Projects showcase</h2>
              <section id="section-showcase">
                <div>
                  <h4>Website For a Restaurant</h4>
                  <span>Topic: full stack web development</span>
                  <div className="mt-2">
                    <Image
                      src="/images/outside01.jpg"
                      width={256}
                      height={256}
                      alt="restaurant"
                    />
                  </div>
                  <p></p>
                  <Button>Read more</Button>
                </div>
                <div>
                  <h4>Job Offer Letter Creation App</h4>
                  <span>Topic: low-code development</span>
                  <div></div>
                  <Button>Read more</Button>
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
