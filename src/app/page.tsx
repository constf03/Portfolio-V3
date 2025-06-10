"use client";
import Banner from "./Components/Banner/Banner";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import UnderNavBar from "./Components/UnderNavBar/UnderNavBar";
import Nav from "./Components/Nav/Nav";
import Slideshow from "./Components/Slideshow/Slideshow";
import MarqueeBanner from "./Components/MarqueeBanner/MarqueeBanner";

export default function Home() {
  return (
    <div className="page">
      <Banner>
        <Nav currentLoc="home" />
      </Banner>
      <UnderNavBar />
      <MarqueeBanner />
      <Content>
        <div
          style={{ width: "100%", height: 24, backgroundColor: "black" }}
        ></div>
        <Slideshow />
        <div
          style={{ width: "100%", height: 24, backgroundColor: "black" }}
        ></div>
        <div></div>
      </Content>
      <Footer />
    </div>
  );
}
