"use client";
import Banner from "@/components/Banner/Banner";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import MarqueeBanner from "@/components/MarqueeBanner/MarqueeBanner";
import Nav from "@/components/Nav/Nav";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";
//import Slideshow from "@/components/Slideshow/Slideshow";

export default function HomePage() {
  return (
    <>
      <div className="page">
        <div className="page-content">
          <Banner>
            <Nav currentLoc="home" />
          </Banner>
          <UnderNavBar />
          <MarqueeBanner />
          <Content>
            <section style={{ padding: "8px" }}>
              <article>
                <h2>Welcome! Tervetuloa! &#128075;</h2>
                <p>
                  This is my personal portfolio website I created using NextJS.
                </p>
                <p>
                  I graduated Jyväskylä University of Applied Sciences (Jamk) in
                  Finland in December 2025 with a Bachelor of Engineering degree
                  in information and communication technology.
                </p>
                <p>
                  On this website you can find showcases of my software
                  development-related projects and information about my
                  competences.
                </p>
              </article>
              {/*
              <div>
                <div
                  style={{
                    width: "100%",
                    height: 24,
                    marginTop: "50px",
                    backgroundColor: "black",
                  }}
                ></div>
                <Slideshow />
                <div
                  style={{
                    width: "100%",
                    height: 24,
                    backgroundColor: "black",
                  }}
                ></div>
              </div>
              */}
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
