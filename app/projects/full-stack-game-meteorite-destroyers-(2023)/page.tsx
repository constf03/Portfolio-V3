"use client";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Image01 from "@/public/images/game_preview02.png";
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
              text={`/ Projects / Full Stack Game: "Meteorite Destroyers" (2023)`}
              href="/projects"
              linkText="Back to projects page."
            />
            <article style={{ padding: "14px" }}>
              <h2>{`Full Stack Game: "Meteorite Destroyers" (2023)`}</h2>
              <p>Last updated: Mar. 24, 2026</p>

              <p>
                I developed this small browser game as a final project on a full
                stack programming course in Fall 2023. In the game you play as a
                ship and the objective is to destroy as many falling meteorites
                as possible by shooting rockets. The player has 5 lives and once
                they run out the game ends. If the player has reached a personal
                record highscore it is saved to a database.
              </p>

              <p>
                {`
                    To be fair this full stack Phaser.js game project wasn't anything
                    extraordinary because it was just a beginner project with some CRUD features.😅
                  `}
              </p>

              <p>
                Technologies used:{" "}
                <b>
                  JavaScript, Phaser.js, Node.js, Express, RestAPI, MongoDB,
                  Mongoose
                </b>
              </p>

              <p>
                Source code available on GitHub:{" "}
                <a
                  href="https://github.com/constf03/Meteorite-Destroyers-Game"
                  target="blank"
                >
                  github.com/constf03/Meteorite-Destroyers-Game
                </a>
              </p>

              <div className="mt-4 mb-4">
                <Image
                  width={1}
                  height={1}
                  src={Image01}
                  layout="responsive"
                  alt="Meteorite Destroyers preview"
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
