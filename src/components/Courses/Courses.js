import React from "react";
import Coursebox from "./Coursebox";
const Courses = () => {
  return (
    <div className="courses">
      <div className="course row w-100 mx-auto">
        <div className="col-md-8 p-0">
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://static.wixstatic.com/media/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.jpg/v1/fill/w_1109,h_708,al_c,q_85,usm_0.66_1.00_0.01/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.webp"
              alt=""
            />
            <div className="course-text">
              <h3>Our Courses</h3>
              <h1>
                Your New
                <br />
                Journey Begins Here, Today
              </h1>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-0">
          <Coursebox
            course={{
              name: "Entrepreneurship made fun",
              url: "https://www.entrepreneurshipnetwork.net/product-page/entrepreneurship",
            }}
          />
        </div>
      </div>
      <div className="course row w-100 mx-auto">
        <div className="col-md-6 p-0">
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://static.wixstatic.com/media/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.jpg/v1/fill/w_828,h_675,al_c,q_85,usm_0.66_1.00_0.01/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.webp"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-3 p-0">
          <Coursebox
            course={{
              name: "Digital Marketing",
              url: "https://www.entrepreneurshipnetwork.net/product-page/digital-marketing-1",
            }}
          />
        </div>
        <div className="col-md-3 p-0">
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://static.wixstatic.com/media/11062b_557462ab123440368447ab18a66043e5~mv2.jpg/v1/fill/w_414,h_675,al_c,q_80,usm_0.66_1.00_0.01/11062b_557462ab123440368447ab18a66043e5~mv2.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="course row w-100 mx-auto">
        <div className="col-md-6 p-0">
          <Coursebox
            course={{
              name: "Product Management like a pro",
              url: "https://www.entrepreneurshipnetwork.net/product-page/product-management-1",
            }}
          />
        </div>
        <div className="col-md-6 p-0">
          <div className="img-container">
            <img
              className="img-fluid"
              src="https://static.wixstatic.com/media/a3ac449c86364dd8999922949876d09e.jpg/v1/fill/w_828,h_666,al_c,q_85,usm_0.66_1.00_0.01/a3ac449c86364dd8999922949876d09e.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
