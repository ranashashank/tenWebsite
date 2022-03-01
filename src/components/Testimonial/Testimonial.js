import React, { Component } from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import Arrow from "./Arrow";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonialdata: [],
    };
  }

  componentDidMount() {
    fetch("/api/testimonial.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ testimonialdata: data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: <Arrow />,
      nextArrow: <Arrow />,
    };

    return (
      <div className="testimonial-container">
        <div className="testimonial-container-title">
          <h1 className="text-center">Testimonials</h1>
          <div className="underline"></div>
        </div>

        <Slider {...settings}>
          {this.state.testimonialdata.map((data, index) => (
            <Slide key={index} data={data} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default Testimonial;
