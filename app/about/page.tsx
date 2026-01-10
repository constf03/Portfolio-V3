"use client";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";

export default function AboutPage() {
  return (
    <>
      <div className="page">
        <div className="page-content">
          <Banner>
            <Nav currentLoc="about" />
          </Banner>
          <UnderNavBar />
          <Content>
            <BreadcrumbBar text="/ About" />
            <section style={{ marginBottom: "100px", padding: "8px" }}>
              <section style={{ margin: "8px" }}>
                <h3 className="h3">IT Work Experience</h3>
                <hr></hr>
                <div className="container-work-expr">
                  <h5>
                    <b>Thesis work (Riihisoft Oy)</b>
                  </h5>
                  <span>June-December 2025</span>
                  <span>{"Bachelor's thesis work: Low-code development"}</span>
                </div>
                <div className="container-work-expr">
                  <h5>
                    <b>Internship (Tmi J.J.Wessman)</b>
                  </h5>
                  <span>April-August 2025</span>
                  <span>Full stack web and mobile development</span>
                </div>
                <div className="container-work-expr">
                  <h5>
                    <b>Internship (Tmi J.J.Wessman)</b>
                  </h5>
                  <span>May-August 2024</span>
                  <span>Full stack web development</span>
                </div>
                <hr></hr>
                <h3 className="h3" style={{ marginTop: "46px" }}>
                  Education
                </h3>
                <hr></hr>
                <div className="container-edu">
                  <h5>
                    Bachelor of Engineering, Information and Communication
                    Technology
                  </h5>
                  <span>Jyväskylä University of Applied Sciences</span>
                  <span>August 2022 - December 2025</span>
                </div>
                <div className="container-edu">
                  <h5>Matriculation Examination / High School</h5>
                  <span>Riihimäen lukio</span>
                  <span>August 2019 - June 2022</span>
                </div>
                <hr></hr>
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
