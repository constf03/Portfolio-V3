"use client";
import Banner from "@/components/Banner/Banner";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";
import Nav from "@/components/Nav/Nav";
import Slideshow from "@/components/Slideshow/Slideshow";
import MarqueeBanner from "@/components/MarqueeBanner/MarqueeBanner";

export default function Home() {
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
            {/*
            <div
              style={{ width: "100%", height: 24, backgroundColor: "black" }}
            ></div>
            <Slideshow />
            <div
              style={{ width: "100%", height: 24, backgroundColor: "black" }}
            ></div>
            <div></div>
            */}
            <section style={{ marginBottom: "100px", padding: "8px" }}>
              <h2>Welcome! Tervetuloa! &#128075;</h2>
              <p>
                This is my personal portfolio website I created using NextJS.
              </p>
              <p>
                I graduated Jyväskylä University of Applied Sciences (Jamk) in
                December 2025 with a Bachelor of Engineering degree in
                information and communication technology.
              </p>
              <p>
                On this website you can find showcases of my software
                development-related projects and information about my
                competences.
              </p>
              <p></p>
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
