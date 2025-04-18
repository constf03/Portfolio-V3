import Banner from "./Components/Banner/Banner";
import Content from "./Components/Content/Content";
import LocationBar from "./Components/LocationBar/LocationBar";
import Nav from "./Components/Nav/Nav";

export default function Home() {
  return (
    <div className="page">
      <Banner />
      <Nav currentLoc="home" />
      <LocationBar />
      <Content>
        <div></div>
      </Content>
    </div>
  );
}
