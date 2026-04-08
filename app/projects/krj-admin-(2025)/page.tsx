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
              <header>
                <h2>KRJ Admin (2025)</h2>
                <small>Written by Stefano Confalone</small>
                <br></br>
                <small>Last updated: Apr. 5, 2026</small>
              </header>

              <p>
                {`
                  This private React Native Expo application utilizes the API of
                  the restaurant website implementation for handling customer
                  orders. This app provides a notification system with sound that
                  alerts if new orders are awaiting and a UI for viewing all
                  orders, accepting or rejecting them and setting a time estimate
                  for orders.
                `}
              </p>

              <p>
                {`
                  I worked on this mobile application project during my Summer 2025 internship
                  and it was one of 3 bigger projects I completed in the internship.
                  I delivered the solution within a month.
                `}
              </p>

              <p>
                {`
                  Below there are screenshots of the app running on iOS.
                  When the app launches it first shows a loading screen
                  while in the background it preloads all resources of the app
                  such as images and fonts.
                  Once they're loaded it navigates to the dashboard which is the
                  main screen of the app.
                `}
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
