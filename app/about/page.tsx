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
            <Nav location="about" />
          </Banner>
          <UnderNavBar />
          <BreadcrumbBar />
          <Content>
            <section style={{ marginBottom: "100px", padding: "8px" }}>
              {/*LANGUAGES SECTION START*/}
              <div
                className="content-box-wrapper"
                style={{ marginBottom: "24px" }}
              >
                <section className="container-content-box">
                  <h2 style={{ marginBottom: "8px" }}>Languages</h2>
                  <ul>
                    <li>Finnish - native</li>
                    <li>English - professional working profiency</li>
                    <li>Italian - native</li>
                  </ul>
                </section>
              </div>
              {/*LANGUAGES SECTION END*/}

              {/*IT WORK EXPERIENCE SECTION START*/}
              <div
                className="content-box-wrapper"
                style={{ marginBottom: "24px" }}
              >
                <section className="container-content-box">
                  <h2>IT Work Experience</h2>
                  <div className="container-work-expr">
                    <h3>
                      <b>{`
                      Backend Developer (Psyche's Royale Gaming ry) *Non-Profit*
                    `}</b>
                    </h3>
                    <span>April 2026-</span>
                    <span>
                      {
                        "Volunteer NestJS Backend developer for Alt Zone project."
                      }
                    </span>
                    <span>
                      Repo:{" "}
                      <a href="https://github.com/Alt-Org/Altzone-Server">
                        https://github.com/Alt-Org/Altzone-Server
                      </a>
                    </span>
                  </div>

                  <div className="container-work-expr">
                    <h3>
                      <b>Thesis work (Riihisoft Oy)</b>
                    </h3>
                    <span>June-December 2025</span>
                    <span>{"Bachelor's thesis: Low-code development"}</span>
                    <span>
                      Thesis:{" "}
                      <a href="https://www.theseus.fi/handle/10024/905064">
                        https://www.theseus.fi/handle/10024/905064
                      </a>
                    </span>
                  </div>

                  <div className="container-work-expr">
                    <h3>
                      <b>Internship (Tmi J.J.Wessman)</b>
                    </h3>
                    <span>April-August 2025</span>
                    <span>Full stack web and mobile development</span>
                  </div>

                  <div className="container-work-expr">
                    <h3>
                      <b>Internship (Tmi J.J.Wessman)</b>
                    </h3>
                    <span>May-August 2024</span>
                    <span>Full stack web development</span>
                  </div>
                </section>
              </div>
              {/*IT WORK EXPERIENCE SECTION END*/}

              {/*EDUCATION SECTION START*/}
              <div className="content-box-wrapper">
                <section className="container-content-box">
                  <h2>Education</h2>
                  <div className="container-edu">
                    <h3>
                      <b>
                        Bachelor of Engineering, Information and Communication
                        Technology
                      </b>
                    </h3>
                    <span>JAMK University of Applied Sciences</span>
                    <span>August 2022 - December 2025</span>
                  </div>

                  <div className="container-edu">
                    <h3>
                      <b>Matriculation Examination / High School</b>
                    </h3>
                    <span>Riihimäen lukio</span>
                    <span>August 2019 - June 2022</span>
                  </div>
                </section>
              </div>
              {/*EDUCATION SECTION END*/}
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
