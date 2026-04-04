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
              {/*WHOAMI SECTION START*/}
              <article>
                <h2 style={{ marginBottom: "6px" }}>
                  What Kind of Developer Am I?
                </h2>
                <p>
                  {`
                      I am a software developer who is passionate about everything
                      technology-related.
                      While my core expertise lies within full stack web development,
                      I am also proficient in mobile development, low-code development
                      and many other things.
                      I'm always looking to learn more to expand and improve my coding and
                      developer thinking skills.
                      I am focused to write clean, consistent and understandable code for
                      better project management.
                      Practice, working on various projects and receiving constructive
                      feedback in Git pull request reviews have been important factors in my
                      software development learning progress.
                      My scope is to continue to grow in my field and possibly share my
                      knowledge and skills with others in the future!
                    `}
                </p>
              </article>
              {/*WHOAMI SECTION END*/}

              {/*LANGUAGES SECTION START*/}
              <section>
                <h2 style={{ marginBottom: "6px" }}>Languages</h2>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <span>Finnish - native</span>
                  <span>English - professional working profiency</span>
                  <span>Italian - native</span>
                </div>
              </section>
              {/*LANGUAGES SECTION END*/}

              {/*IT WORK EXPERIENCE SECTION START*/}
              <section>
                <h2 style={{ marginTop: "46px" }}>IT Work Experience</h2>
                <div className="container-work-expr">
                  <h3>
                    <b>Thesis work (Riihisoft Oy)</b>
                  </h3>
                  <span>June-December 2025</span>
                  <span>{"Bachelor's thesis work: Low-code development"}</span>
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
              {/*IT WORK EXPERIENCE SECTION END*/}

              {/*EDUCATION SECTION START*/}
              <section>
                <h2 style={{ marginTop: "46px" }}>Education</h2>
                <div className="container-edu">
                  <h3>
                    <b>
                      Bachelor of Engineering, Information and Communication
                      Technology
                    </b>
                  </h3>
                  <span>Jyväskylä University of Applied Sciences</span>
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
