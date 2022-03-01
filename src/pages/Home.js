import Container from "../components/Layout/Container";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Welcome from "../components/Welcome/Welcome";
import Courses from "../components/Courses/Courses";
import Coursebenefit from "../components/Benefits/Coursebenefit";
import Testimonial from "../components/Testimonial/Testimonial";
import Consult from "../components/Consult/Consult";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="homepage">
      <Container>
        <Header />
        <Banner />
        <About />
        <Welcome />
        <Courses />
      </Container>
      <Coursebenefit />
      <Testimonial />
      <Consult />
      <Footer />
    </div>
  );
};

export default Home;
