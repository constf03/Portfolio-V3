"use client";
import { useState, useEffect } from "react";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";

export default function ContactPage() {
  const EMAIL_USER = ["stefano", "confalone03"].join(".");
  const EMAIL_DOMAIN = ["gmail", "com"].join(".");

  const Email = () => {
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
      setEmail(EMAIL_USER + "@" + EMAIL_DOMAIN);
    }, []);

    if (!email) return null;

    return <a href={`mailto:${email}`}>{email}</a>;
  };

  const Phone = () => {
    const [phone, setPhone] = useState<string>("");

    useEffect(() => {
      setPhone("+358 45 324 3803");
    }, []);

    if (!phone) return null;

    return <span>{phone}</span>;
  };

  return (
    <>
      <div className="page">
        <div className="page-content">
          <Banner>
            <Nav location="contact" />
          </Banner>
          <UnderNavBar />
          <BreadcrumbBar />
          <Content>
            <div className="content-box-wrapper">
              <section>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "8px",
                  }}
                  className="container-content-box"
                >
                  <h2 style={{ marginBottom: "6px" }}>Contact Info & Links</h2>
                  <ul
                    style={{
                      listStyle: "none",
                      marginLeft: "0px",
                    }}
                  >
                    <li>
                      Email: <Email />
                    </li>
                    <li>
                      Phone: <Phone />
                    </li>
                    <li>
                      LinkedIn:{" "}
                      <a
                        href="https://www.linkedin.com/in/stefano-confalone-a0ba352a7/"
                        target="blank"
                      >
                        https://www.linkedin.com/in/stefano-confalone-a0ba352a7/
                      </a>
                    </li>
                    <li>
                      GitHub:{" "}
                      <a href="https://github.com/constf03" target="blank">
                        https://github.com/constf03
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
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
