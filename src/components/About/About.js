import React from "react";

const About = () => {
  return (
    <section className="aboutus-section text-center pb-5">
      <h4 className="py-2">About Us</h4>
      <div className="row py-5">
        <div className="col-md-4 aboutus-text">
          <h1>Learning Together From the Comfort of Your Home</h1>
          <a href="https://www.entrepreneurshipnetwork.net/about">
            <button className="btn btn-light">Learn More</button>
          </a>
        </div>
        <div className="col-md-5 aboutus-img">
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_662,h_444,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp"
              alt=""
              
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
