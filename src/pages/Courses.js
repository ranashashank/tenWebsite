import React from "react";
import Filter from "../components/Filter/Filter";
import Products from "../components/Products/Products";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Container from "../components/Layout/Container";
const Courses = () => {
  return (
    <div className="courses-page">
      <Container>
        <Header />
      </Container>
      <div className="courses-page-row">
        <Filter />
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
