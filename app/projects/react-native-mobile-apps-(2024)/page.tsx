"use client";
import Banner from "@/components/Banner/Banner";
import BreadcrumbBar from "@/components/BreadcrumbBar/BreadcrumbBar";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Image01 from "@/public/images/movies_app.png";
import Image02 from "@/public/images/myplaces_app.png";
import Image03 from "@/public/images/weather_app.png";
import Image04 from "@/public/images/shoppinglist_app.png";
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
              text="/ Projects / React Native Mobile Apps (2024)"
              href="/projects"
              linkText="Back to projects page."
            />
            <article style={{ padding: "14px" }}>
              <h2>React Native Mobile Apps (2024)</h2>
              <p>Last updated: Jan. 12, 2026</p>

              <div className="mt-4 mb-4">
                <h4>MoviesApp</h4>
                <p>
                  Source code available on GitHub:{" "}
                  <a
                    href="https://github.com/constf03/MoviesApp"
                    target="blank"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      padding: "2px",
                    }}
                  >
                    github.com/constf03/MoviesApp
                  </a>
                </p>
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

              <div className="mt-4 mb-4">
                <h4>MyPlacesApp</h4>
                <p>
                  Source code available on GitHub:{" "}
                  <a
                    href="https://github.com/constf03/MoviesApp"
                    target="blank"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      padding: "2px",
                    }}
                  >
                    github.com/constf03/MyPlacesApp
                  </a>
                </p>
                <Image
                  width={1}
                  height={1}
                  src={Image02}
                  layout="responsive"
                  alt="krj admin preview"
                  loading="lazy"
                  placeholder="blur"
                />
              </div>

              <div className="mt-4 mb-4">
                <h4>WeatherApp</h4>
                <Image
                  width={1}
                  height={1}
                  src={Image03}
                  layout="responsive"
                  alt="krj admin preview"
                  loading="lazy"
                  placeholder="blur"
                />
              </div>

              <div className="mt-4 mb-4">
                <h4>ShoppingListApp</h4>
                <p>This is a React PWA.</p>
                <Image
                  width={1}
                  height={1}
                  src={Image04}
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
