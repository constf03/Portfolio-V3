"use client";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";
import Video from "next-video";
import Video01 from "/videos/krj_demo.mp4";
import Video02 from "/videos/krj_preview01.mp4";

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
              text="/ Projects / Website For a Restaurant (2024-2025)"
              href="/projects"
              linkText="Back to projects page."
            />
            <article style={{ padding: "14px" }}>
              <h2>Website For a Restaurant (2024-2025)</h2>
              <p>Last updated: Jan. 9, 2026</p>

              <p>
                In my 2024 internship under Tmi J.J.Wessman I began working on a
                full stack website project for restaurant Ravintola Johnny Hong
                Kong Hyvinkää. The supervisor of the internship is a co-owner of
                the restaurant.
              </p>

              <p>
                Link to the website:{" "}
                <a href="https://ravintolajohnny.fi" target="blank">
                  ravintolajohnny.fi
                </a>
              </p>

              <p>
                During my first internship (2024) I managed to implement the
                following features to the site:
              </p>
              <ul>
                <li>user authentication</li>
                <li>updating user information</li>
                <li>products to food menu (dynamically loaded JSON objects)</li>
                <li>admin user feature</li>
                <li>
                  ordering system with real-time order status update (no payment
                  integration yet)
                </li>
                <li>localization in Finnish and English</li>
                <li>responsive UI.</li>
              </ul>

              <p>
                Here is a demo showcase of what the website looked like in 2024.
                In the demo I also show the admin panel.
              </p>

              <div className="mt-4 mb-4">
                <Video src={Video01} />
              </div>

              <p>
                {`
                    A year later in my second internship (2025) under the same freelancing company,
                    I refreshed the whole website's look making it look more modern and user-friendly.
                    I also added a SMS confirmation feature to the order system using Twilio.
                    Below is another video showcasing the updated look of the site.
                  `}
              </p>

              <div className="mt-4 mb-4">
                <Video src={Video02} />
              </div>

              <p>
                The site was first hosted on AWS Elastic Container Service where
                frontend and backend Docker containers ran on https protocol,
                but it was later moved to Google Cloud and hosted using a
                reverse proxy on a Linux VM. When it was hosted on AWS, code was
                deployed through Codebuild.
              </p>

              <p>
                Main technologies used:{" "}
                <b>
                  Node.js, Express, React, TypeScript, RestAPI, PostgreSQL,
                  Docker
                </b>
              </p>

              <p>
                Other (frameworks, libraries etc.):{" "}
                <b>Sequelize ORM, TailwindCSS, Vite, Auth0</b>
              </p>

              <p>
                Service platforms:{" "}
                <b>
                  GitHub, Aiven, Amazon Web Services (Elastic Container Service,
                  Codebuild, Route 53)
                </b>
              </p>
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
