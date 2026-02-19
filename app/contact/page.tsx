"use client";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";
//import ContactForm from "@/components/ContactForm/ContactForm";

export default function ContactPage() {
  return (
    <>
      <div className="page">
        <div className="page-content">
          <Banner>
            <Nav currentLoc="contact" />
          </Banner>
          <UnderNavBar />
          <Content>
            <BreadcrumbBar text="/ Contact" />
            <section style={{ marginBottom: "100px", padding: "8px" }}>
              {/* <ContactForm /> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "8px",
                }}
              >
                <h3 className="h3">Contact Information</h3>
                <hr></hr>
                <span>Email: stefano.confalone03@gmail.com</span>
                <span>Phone: +358 45 324 3803</span>
                <span>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/stefano-confalone-a0ba352a7/"
                    target="blank"
                  >
                    https://www.linkedin.com/in/stefano-confalone-a0ba352a7/
                  </a>
                </span>
                <span>
                  GitHub:{" "}
                  <a href="https://github.com/constf03" target="blank">
                    https://github.com/constf03
                  </a>
                </span>
                <hr></hr>
              </div>
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
