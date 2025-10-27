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
            <div
              style={{ width: "100%", height: 24, backgroundColor: "black" }}
            ></div>
            <Slideshow />
            <div
              style={{ width: "100%", height: 24, backgroundColor: "black" }}
            ></div>
            <div></div>
            <section>
              <h2>Header</h2>
              <p>fbaubfuaebfaeufaiwefaewbfaibabefabiefibeaeifn</p>
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
