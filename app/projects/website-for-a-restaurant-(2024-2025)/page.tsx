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
import Video03 from "/videos/krj_preview03.mp4";

export default function Page() {
  return (
    <>
      <div className="page">
        <div className="page-content">
          <Banner>
            <Nav />
          </Banner>
          <UnderNavBar />
          <BreadcrumbBar href="/projects" linkText="Back to projects page." />
          <Content>
            <div className="content-box-wrapper-nobg">
              <article className="container-content-box">
                <header>
                  <h2>Website For a Restaurant (2024-2025)</h2>
                  <small>Written by Stefano Confalone</small>
                  <br></br>
                  <small>Last updated: Aug. 3, 2026</small>
                </header>

                <br></br>

                <p>
                  In May 2024 I started developing a new website for restaurant
                  Johnny Hong Kong Hyvinkää (
                  <a href="https://ravintolajohnny.fi">ravintolajohnny.fi</a>)
                  and I was the main web developer during May-August 2024 and
                  April-August 2025. Our base technology stack was React,
                  Express, Node.js and PostgreSQL.
                </p>

                <br></br>

                <p>
                  I implemented many core functionalities and business logic
                  across the website and API that are still in use including:
                </p>

                <ul>
                  <li>{`the website's responsive layout & customer-friendly structure`}</li>
                  <li>menu system, shopping cart & checkout</li>
                  <li>
                    ordering System with Twilio SMS verification and real-time
                    status update (pending, accepted, rejected etc.)
                  </li>
                  <li>
                    user authentication (originally with Auth0 but later only
                    JWT)
                  </li>
                  <li>user data update form (later cut)</li>
                  <li>
                    admin user functionality (CRUD operations for customer sent
                    orders)
                  </li>
                  <li>search engine optimization</li>
                  <li>translations Finnish & English with i18n</li>
                  <li>and many more details.</li>
                </ul>

                <br></br>

                <p>
                  Many of the listed features were improved and polished by my
                  friend (co-owner of the restaurant and supervisor of my
                  2024-25 internships) when the website was finally pushed into
                  production for customers in May 2026. Many new features were
                  added in the website and API too.
                </p>

                <br></br>

                <p>
                  Originally the website and API were hosted on AWS Elastic
                  Container Service (Docker Containers), with SSL domain, load
                  balancers and Codebuild CI/CD configured. But due to economic
                  reasons we moved to Google Cloud as it was cheaper and hosted
                  the website and API on VMs via reverse proxy with Caddy.
                </p>

                <br></br>

                <p>
                  Below are some of the demo showcase videos from development
                  phase (2024-25).
                </p>

                <br></br>

                <h2 style={{ marginBottom: "2px" }}>
                  2024 Website showcase and Admin panel (old layout)
                </h2>
                <div>
                  <Video src={Video01} />
                </div>

                <br></br>

                <h2 style={{ marginBottom: "2px" }}>2025 New updated layout</h2>
                <div>
                  <Video src={Video03} />
                </div>

                <br></br>

                <h2 style={{ marginBottom: "2px" }}>
                  2025 Twilio SMS verification feature for ordering system
                </h2>
                <div>
                  <Video src={Video02} />
                </div>

                <br></br>

                <p>
                  Overall this was very important project for learning how to
                  build dynamic web applications and deploy them into
                  production. It taught me so much about full stack web
                  development, cloud platforms, DevOps and many other areas as I
                  was a beginner when I started working on this project in 2024.
                </p>

                <br></br>

                <h3>Technologies, Frameworks & Libraries</h3>
                <p>
                  Frontend: Typescript, React, Vite, shadcn/ui, MUI, Tailwinds,
                  Docker
                </p>
                <p>Backend: Typescript, Node.js, Express, Sequelize, Docker</p>
                <p>Database: PostgreSQL (Aiven)</p>
                <p>
                  Platforms & Cloud services: GitHub, Auth0, Amazon Web
                  Services, Aiven, Google Cloud
                </p>
                <p>CI/CD: Codebuild (AWS)</p>
              </article>
            </div>
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
