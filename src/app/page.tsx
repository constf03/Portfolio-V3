import Banner from "./Components/Banner/Banner";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import UnderNavBar from "./Components/UnderNavBar/UnderNavBar";
import Nav from "./Components/Nav/Nav";

export default function Home() {
  return (
    <div className="page">
      <Banner>
        {" "}
        <Nav currentLoc="home" />
      </Banner>
      <UnderNavBar />
      <Content>
        <div></div>
      </Content>
      <Footer />
    </div>
  );
}
