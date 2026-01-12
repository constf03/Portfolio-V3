"use client";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Image01 from "@/public/images/krj-admin-previews.png";
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
              text="/ Projects / KRJ Admin (2025)"
              href="/projects"
              linkText="Back to projects page."
            />
            <article style={{ padding: "14px" }}>
              <h2>KRJ Admin (2025)</h2>
              <p>Last updated: Jan. 10, 2026</p>

              <p>
                This is a private React Native Expo application that uses the
                API of the restaurant website implementation for handling
                customer orders. This app provides a notification system with
                sound that alerts if new orders are awaiting and a UI for
                viewing all orders, accepting or rejecting them and setting a
                time estimate for orders.
              </p>

              <div>
                <Image
                  width={1}
                  height={1}
                  src={Image01}
                  layout="responsive"
                  alt="krj admin preview"
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
