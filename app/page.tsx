"use client";
import Banner from "@/components/Banner/Banner";
import Content from "@/components/Content/Content";
import FeaturedCard from "@/components/FeaturedCard/FeaturedCard";
import Footer from "@/components/Footer/Footer";
import Image01 from "@/public/images/krj_website_preview.jpg";
import Image02 from "@/public/images/offerletterapp_preview.png";
import MarqueeBanner from "@/components/MarqueeBanner/MarqueeBanner";
import Nav from "@/components/Nav/Nav";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";
//import Slideshow from "@/components/Slideshow/Slideshow";

export default function HomePage() {
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
            <section style={{ padding: "8px" }} id="content-home">
              <article>
                <h2 style={{ marginBottom: "12px" }}>
                  Welcome! Tervetuloa! &#128075;
                </h2>

                <p>
                  This is my personal portfolio website I created using Next.js.
                </p>

                <p>
                  I graduated Jyväskylä University of Applied Sciences (Jamk) in
                  Finland in December 2025 with a Bachelor of Engineering degree
                  in information and communication technology.
                </p>

                <p>
                  On this website you can find showcases of my software
                  development projects and information about my competences.{" "}
                  <b>Check out the Projects tab!</b>
                </p>

                <p>
                  {`
                      📌If you're interested about seeing how I write Typescript/JSX code, structure a Next.js project etc.
                      you can find the source code of this website here: 
                    `}
                  <a
                    href="https://github.com/constf03/Portfolio-V3/tree/main"
                    target="blank"
                  >
                    https://github.com/constf03/Portfolio-V3/tree/main
                  </a>
                  .
                </p>
              </article>
              <aside>
                <h3>Featured Projects</h3>

                <br></br>

                <FeaturedCard
                  title="Website For a Restaurant (2024-2025)"
                  imgSrc={Image01}
                  imgAltText="Website For a Restaurant Preview"
                  href="projects/website-for-a-restaurant-(2024-2025)"
                />

                <FeaturedCard
                  title="Job Offer Letter Creation App (2025)"
                  imgSrc={Image02}
                  imgAltText="Job Offer Letter Creation App Preview"
                  href="projects/job-offer-letter-creation-app-(2025)"
                />
              </aside>
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
