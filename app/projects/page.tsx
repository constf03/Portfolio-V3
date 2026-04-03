"use client";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import Image00 from "@/public/images/placeholder.png";
import Image01 from "@/public/images/krj_website_preview.jpg";
import Image02 from "@/public/images/offerletterapp_preview.png";
import Image03 from "@/public/images/game_preview.png";
import Image04 from "@/public/images/krj-admin-preview.png";
import Image05 from "@/public/images/iptv_preview.png";
import Image06 from "@/public/images/mobile_apps_preview.png";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";

export default function ProjectsPage() {
  return (
    <>
      <div className="page">
        <div className="page-content">
          <Banner>
            <Nav currentLoc="showcase" />
          </Banner>
          <UnderNavBar />
          <Content>
            <BreadcrumbBar text="/ Projects" />
            <section style={{ marginBottom: "100px", padding: "8px" }}>
              <article>
                <h1>Projects Showcase</h1>
                <p>
                  Here you can find my showcased projects. Each have a link to
                  an article showcasing the respective project. Not all of them
                  are open source.
                </p>
              </article>

              <section className="container-showcase">
                <ProjectCard
                  title="Website For a Restaurant (2024-2025)"
                  topic="full stack web development"
                  imgSrc={Image01}
                  imgAltText="restaurant website project thumbnail"
                  description="I created and updated the website of oriental restaurant
                    Ravintola Johnny Hong Kong Hyvinkää in my 2024 and 2025
                    internship."
                  href="projects/website-for-a-restaurant-(2024-2025)"
                />

                <ProjectCard
                  title="Job Offer Letter Creation App (2025)"
                  topic="low-code app development"
                  imgSrc={Image02}
                  imgAltText="low-code offer letter app thumbnail"
                  description="Developed in Power Apps Studio, this business application facilitates the creation of job offer letters.
                        This project was part of my 2025 Bachelor's thesis."
                  href="projects/job-offer-letter-creation-app-(2025)"
                />

                <ProjectCard
                  title="KRJ Admin (2025)"
                  topic="mobile application development"
                  imgSrc={Image04}
                  imgAltText="KRJ Admin mobile app project thumbnail"
                  description="With React Native & Expo I created a mobile application for handling customer orders.
                        This project was part of my 2025 internship, and the software is meant to be
                        private property of oriental restaurant Ravintola Johnny Hong Kong Hyvinkää."
                  href="projects/krj-admin-(2025)"
                />

                <ProjectCard
                  title="Fictional IPTV Website (2024)"
                  topic="frontend web development"
                  imgSrc={Image05}
                  imgAltText="Fictional IPTV website project thumbnail"
                  description="A fictional IPTV service website that I made on a web
                    visualization course in Fall 2024. It is a frontend-only implementation.
                    The main focus of the site is its visual outlook and
                    responsiveness. Used Bootstrap and SCSS pre-processor."
                  href="projects/fictional-iptv-website-(2024)"
                />

                <ProjectCard
                  title="React Native Mobile Apps (2024)"
                  topic="mobile application development"
                  imgSrc={Image06}
                  imgAltText="Mobile apps collection thumbnail"
                  description="A collection of simple React Native mobile applications that
                    I made on a mobile app development course in 2024."
                  href="projects/react-native-mobile-apps-(2024)"
                />

                <ProjectCard
                  title={`Full stack game: "Meteorite destroyers" (2023)`}
                  topic="full stack web development"
                  imgSrc={Image03}
                  imgAltText="Meteorite Destroyers project thumbnail"
                  description="A game made using Phaser.js framework and it includes some CRUD functionality. This was my first
                    full stack implementation."
                  href="projects/full-stack-game-meteorite-destroyers-(2023)"
                />

                <ProjectCard
                  title="Figma Software Design Projects"
                  topic="software design"
                  imgSrc={Image00}
                  imgAltText="Figma Software Design projects thumbnail"
                  description="These are some of my software design projects that I have
                    done with Figma."
                  href="projects/software-design-projects"
                />
              </section>
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
