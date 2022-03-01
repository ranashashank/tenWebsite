import React from "react";
import Searchbar from "./Searchbar";
import Cartbtn from "../Buttons/Cartbtn";
import Loginbtn from "../Buttons/Loginbtn";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="header-logo-text-container">
          <div className="text">
            <span className="text-black">T</span>
            <span className="text-red">he</span>
            <br />
            <span className="text-black">E</span>
            <span className="text-red">ntrepreneurship</span>
            <br />
            <span className="text-black">N</span>
            <span className="text-red">etwork</span>
          </div>
        </div>
        <div className="header-logo-img">
          <a href="https://www.entrepreneurshipnetwork.net">
            <img
              src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_150,h_120,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="right-box">
        <div className="btn-container">
          <Cartbtn />
          <Loginbtn />
        </div>
        <Searchbar />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
