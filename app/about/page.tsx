"use client";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Image01 from "@/public/images/certificate_aws01.png";
import Image02 from "@/public/images/certificate_tietosuoja_ABC.jpg";
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
              <section>
                <h3 className="h3">What Kind of Developer Am I?</h3>
                <hr></hr>
                <hr></hr>
              </section>
              {/*WHOAMI SECTION END*/}

              {/*LANGUAGES SECTION START*/}
              <section>
                <h3 className="h3">Languages</h3>
                <hr></hr>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <span>Finnish - native</span>
                  <span>English - professional working profiency</span>
                  <span>Italian - native</span>
                </div>
                <hr></hr>
              </section>
              {/*LANGUAGES SECTION END*/}

              {/*IT WORK EXPERIENCE SECTION START*/}
              <section>
                <h3 className="h3" style={{ marginTop: "46px" }}>
                  IT Work Experience
                </h3>
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
              </section>
              {/*IT WORK EXPERIENCE SECTION END*/}

              {/*EDUCATION SECTION START*/}
              <section>
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
              {/*EDUCATION SECTION END*/}

              {/*CERTIFICATIONS SECTION START*/}
              <section>
                <h3 className="h3" style={{ marginTop: "46px" }}>
                  Certifications
                </h3>
                <hr></hr>
                <div className="list-certifications">
                  <div className={"container-cert"}>
                    <div className="container-cert-img">
                      <Image
                        src={Image02}
                        width={1}
                        height={1}
                        layout="responsive"
                        alt="certificate preview"
                        loading="lazy"
                      />
                    </div>
                    <div className="container-cert-label">
                      <span>Tietosuojan ABC julkishallinnon henkilöstölle</span>
                      <span>eOppiva, January 2024</span>
                    </div>
                  </div>

                  <div className={"container-cert"}>
                    <div className="container-cert-img">
                      <Image
                        src={Image01}
                        width={1}
                        height={1}
                        layout="responsive"
                        alt="certificate preview"
                        loading="lazy"
                      />
                    </div>
                    <div className="container-cert-label">
                      <span>AWS Educate Getting Started with Storage</span>
                      <span>Amazon Web Services (AWS), October 2023</span>
                    </div>
                  </div>
                </div>
                <hr></hr>
              </section>
              {/*CERTIFICATIONS SECTION END*/}
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
