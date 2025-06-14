import Banner from "@/components/Banner/Banner";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";
import UnderNavBar from "@/components/UnderNavBar/UnderNavBar";
import Nav from "@/components/Nav/Nav";
import ContactForm from "@/components/ContactForm/ContactForm";

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
