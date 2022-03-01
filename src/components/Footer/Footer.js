import React from "react";
import Socialbox from "./Socialbox";
import Pageslink from "./Pageslink";
import Newsletter from "./Newsletter";
import Copyright from "./Copyright";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row mx-auto justify-content-center align-items-center">
        <div className="col-md-3 col-social">
          <Socialbox />
        </div>
        <div className="col-md-4 col-newsletter">
          <Newsletter />
        </div>
        <div className="col-md-3 col-pageslink">
          <Pageslink />
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
