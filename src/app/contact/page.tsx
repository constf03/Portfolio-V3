"use client";
import Banner from "../Components/Banner/Banner";
import Content from "../Components/Content/Content";
import Footer from "../Components/Footer/Footer";
import UnderNavBar from "../Components/UnderNavBar/UnderNavBar";
import Nav from "../Components/Nav/Nav";
import ContactForm from "../Components/ContactForm/ContactForm";

export default function Home() {
  return (
    <div className="page">
      <Banner>
        <Nav currentLoc="contact" />
      </Banner>
      <UnderNavBar />
      <Content>
        <ContactForm />
      </Content>
      <Footer />
    </div>
  );
}
