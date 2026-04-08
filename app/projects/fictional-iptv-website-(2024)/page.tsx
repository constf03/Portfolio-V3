"use client";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Image01 from "@/public/images/77_01.png";
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
            <BreadcrumbBar href="/projects" linkText="Back to projects page." />
            <article style={{ padding: "14px" }}>
              <header>
                <h2>Fictional IPTV Website (2024)</h2>
                <small>Written by Stefano Confalone</small>
                <br></br>
                <small>Last updated: Apr. 9, 2026</small>
              </header>

              <p>
                I made this fictional IPTV service website as a final work
                assignment on a web visualization course in Fall 2024. It is a
                simple HTML & CSS implementation along with the use of Bootstrap
                and SCSS pre-processor. The site is responsive too.
              </p>

              <p>
                Website is hosted on GitHub pages:{" "}
                <a
                  href="https://constf03.github.io/Fictional-IPTV-Service-Website/"
                  target="blank"
                >
                  constf03.github.io/Fictional-IPTV-Service-Website/
                </a>
              </p>

              <div className="mt-4 mb-4">
                <Image
                  width={1}
                  height={1}
                  src={Image01}
                  layout="responsive"
                  alt="IPTV Website preview"
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
