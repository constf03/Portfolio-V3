"use client";
import Banner from "@/components/Banner/Banner";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";
import Nav from "@/components/Nav/Nav";
import ContactForm from "@/components/ContactForm/ContactForm";
import Card from "react-bootstrap/Card";

export default function Home() {
  return (
    <>
      <div className="page">
        <div className="page-content">
          <Banner>
            <Nav currentLoc="contact" />
          </Banner>
          <UnderNavBar />
          <Content>
            <div style={{ display: "flex", marginBottom: "100px" }}>
              <ContactForm />
              <Card style={{ maxHeight: "200px" }}>
                <Card.Body>
                  <Card.Title>Contact Information</Card.Title>
                  <Card.Text>Email: stefano.confalone03@gmail.com</Card.Text>
                  <Card.Text>Phone: +358 45 324 3803</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <Footer />
          </Content>
        </div>
      </div>
      <div className="bg-one"></div>
      <div className="bg-fade"></div>
      <div className="bg-two"></div>
    </>
  );
}
