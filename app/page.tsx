"use client";
import Banner from "@/components/Banner/Banner";
import Content from "@/components/Content/Content";
import FeaturedCard from "@/components/FeaturedCard/FeaturedCard";
import Footer from "@/components/Footer/Footer";
import Image01 from "@/public/images/krj_website_preview.jpg";
import Image02 from "@/public/images/offerletterapp_preview.png";
import MarqueeBanner from "@/components/MarqueeBanner/MarqueeBanner";
import Nav from "@/components/Nav/Nav";
import Search from "@/components/Search/Search";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";

function WebSiteList() {
  const sites = [
    {
      name: "Wayback Machine",
      url: "https://web.archive.org/",
    },
    {
      name: "Frutiger Aero Archive",
      url: "https://frutigeraeroarchive.org/",
    },
    {
      name: "Wikipedia",
      url: "https://www.wikipedia.org/",
    },
    {
      name: "Alt Zone",
      url: "https://altzone.fi/en",
    },
    {
      name: "Johnny Hong Kong",
      url: "https://ravintolajohnny.fi/",
    },
    {
      name: "Punainen Risti",
      url: "https://www.punainenristi.fi/",
    },
    {
      name: "ebay.com",
      url: "https://www.ebay.com/",
    },
    {
      name: "Amazon.com",
      url: "https://www.amazon.com/",
    },
    {
      name: "Jyväskylän kirjasto",
      url: "https://www.jyvaskyla.fi/kirjasto",
    },
    {
      name: "Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/",
    },
    {
      name: "www.newgrounds.com",
      url: "https://www.newgrounds.com/",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/",
    },
    {
      name: "leetcode.com",
      url: "https://leetcode.com/",
    },
    {
      name: "DrawIO",
      url: "https://app.diagrams.net/",
    },
    {
      name: "betsson sport",
      url: "https://www.betsson.com/fi",
    },
  ];

  return (
    <div className="content-box-wrapper-md">
      <section className="container-content-box">
        <div style={{ display: "flex", flexWrap: "wrap", columnGap: 6 }}>
          {sites.map((site, index) => {
            return (
              <a href={site.url} key={index} style={{}}>
                {site.name}
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="page">
        <div className="page-content">
          <Banner>
            <Nav location="home" />
          </Banner>
          <UnderNavBar />
          <MarqueeBanner />
          <Content>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Search />
            </div>
            <section
              style={{ marginBottom: "24px", marginTop: "12px" }}
              id="content-home"
            >
              <div className="content-box-wrapper" id="container-welcome">
                <article className="container-content-box">
                  <h2>Welcome! Tervetuloa! &#128075;</h2>

                  <p>
                    Welcome to my web portfolio, powered with Next.js.
                  </p>

                  <p>
                    I graduated Jyväskylä University of Applied Sciences (Jamk)
                    in Finland in December 2025 with a Bachelor of Engineering
                    degree in information and communication technology.
                  </p>

                  <p>
                    On this website you can find showcases of my software
                    development projects and information about my competences.{" "}
                    <b>Check out the Projects tab!</b>
                  </p>
                </article>
              </div>
              <div className="content-box-wrapper">
                <aside className="container-content-box">
                  <h3 style={{ marginBottom: "8px" }}>Featured Projects</h3>

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
              </div>
            </section>
            <WebSiteList />
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
