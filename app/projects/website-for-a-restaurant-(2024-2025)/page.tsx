"use client";
import Video from "next-video";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";
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
            <BreadcrumbBar href="/projects" linkText="Back to projects page." />
            <article style={{ padding: "14px" }}>
              <header>
                <h2>Website For a Restaurant (2024-2025)</h2>
                <small>Written by Stefano Confalone</small>
                <br></br>
                <small>Last updated: Apr. 4, 2026</small>
              </header>

              <p>
                {`
                  In my Summer 2024 internship I began working on a
                  full stack website project for restaurant Ravintola Johnny Hong
                  Kong Hyvinkää with PERN stack (Postgres, Express, React, Node.js). My internship was hosted under the name of my supervisor's toiminimi and he is the co-owner of the restaurant.
                `}
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
                <li>responsive UI</li>
                <li>user authentication with Auth0</li>
                <li>updating user information</li>
                <li>products to food menu (dynamically loaded JSON objects)</li>
                <li>shopping cart system</li>
                <li>admin user feature and admin panel</li>
                <li>
                  ordering system with real-time order status update (no payment
                  integration yet)
                </li>
                <li>translations in Finnish and English (i18n).</li>
              </ul>

              <p>
                Below is a demo showcase of what the website looked like in
                2024. In the demo I also show the admin panel.
              </p>

              <div className="mt-4 mb-4">
                <Video src={Video01} />
              </div>

              <p>
                {`
                    A year later in my second Summer internship (2025) under the same toiminimi
                    I updated the whole website's look making it look more modern and user-friendly.
                    I improved the site's SEO with React Helmet Async.
                    I also added a SMS confirmation feature to the order system using Twilio.
                    Below is another video showing the updated look of the site.
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
                deployed from the main branch using Codebuild.
              </p>

              <p>
                Main technologies used:{" "}
                <b>
                  Node.js, Express, React, TypeScript, RestAPI, PostgreSQL,
                  Docker
                </b>
              </p>

              <p>
                Frameworks & Libraries:{" "}
                <b>Sequelize, Tailwinds, Vite, Auth0, MUI</b>
              </p>

              <p>
                Platforms:{" "}
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
