"use client";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Image01 from "@/public/images/theagentpp_preview.gif";
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
              text="/ Projects / Software Design Projects"
              href="/projects"
              linkText="Back to projects page."
            />
            <article style={{ padding: "14px" }}>
              <h2>Software Design Projects</h2>
              <p>Last updated: Feb. 11, 2026</p>

              <p>
                {`
                  On this page I've compiled small showcases of some of my software design projects.
                  All of these were created using Figma.
                  `}
              </p>

              <h4>TheAgent++ software prototype</h4>
              <p>
                {`
                  This is a software prototype of a fictional VPN desktop application
                  for Windows I called TheAgent++. I created this on an advanced software project course
                  in Spring 2025 and presented it to others students.
                  This might be too detailed for what was meant to be a prototype, but it was fun to do nonetheless and
                  it taught me how to use Figma's more advanced features.
                  `}
              </p>
              <div className="mt-2">
                <Image
                  src={Image01}
                  width={1}
                  height={1}
                  layout="responsive"
                  alt="the agent++ preview"
                  loading="lazy"
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
