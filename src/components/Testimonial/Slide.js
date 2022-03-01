import React from "react";

const Slide = (props) => {
  return (
    <div className="slide-container">
      <img
        src="https://static.wixstatic.com/media/11062b_558f00357585424e894fb7c595fc38fd~mv2.jpg/v1/fill/w_1824,h_744,al_c,q_85,usm_0.66_1.00_0.01/11062b_558f00357585424e894fb7c595fc38fd~mv2.webp"
        alt=""
        className="img-fluid"
      />
      <div className="testimonial-text">
        <h3 className="testimonial-text-feedback">{props.data.feedback}</h3>
        <h3 className="testimonial-text-name">
          -{props.data.name}, {props.data.position}
        </h3>
      </div>
    </div>
  );
};

export default Slide;
