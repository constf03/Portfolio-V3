"use client";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Image01 from "@/public/images/offerletterapp01.png";
import Nav from "@/components/Nav/Nav";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";

export default function Page() {
  return (
    <>
      <div className="page">
        <div className="page-content">
          <Banner>
            <Nav currentLoc="showcase" />
          </Banner>
          <UnderNavBar />
          <Content>
            <BreadcrumbBar
              text="/ Projects / Job Offer Letter Creation App (2025)"
              href="/projects"
              linkText="Back to projects page."
            />
            <article style={{ padding: "14px" }}>
              <h2>Job Offer Letter Creation App (2025)</h2>
              <p>Last updated: Jan. 10, 2026</p>

              <p>
                This app was made in Microsoft Power Apps. Riihisoft Oy gave me
                this project as a thesis opportunity. The goal was to develop a
                low-code business app that small companies can use for
                streamlining recruitment-related processes such as job offer
                letter creation.
              </p>

              <p>
                {`
                    This project was featured in my bachelor's thesis
                    "Mobile application development using a low-code platform" (2025).
                    It is publicly available on Theseus:
                  `}
                <a
                  href="https://www.theseus.fi/handle/10024/905064"
                  target="blank"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    padding: "2px",
                  }}
                >
                  www.theseus.fi/handle/10024/905064
                </a>
                .
              </p>
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
            </article>
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
