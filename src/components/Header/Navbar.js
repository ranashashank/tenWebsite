import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  toggleNavbar = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    console.log(this.state.show);
    return (
      <nav className="header-navbar">
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.toggleNavbar}
        >
          <div className={`navbar-icon ${this.state.show ? "animate" : ""}`}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </button>
        <div
          className={`navbar${
            this.state.show ? " show" : ""
          } d-flex justify-content-center flex-row align-items-center w-100`}
        >
          <div className="close-icon">
            <button type="button" className="btn-close text-reset"></button>
          </div>
          <div className="navbar-container">
            <ul className="navbar-nav text-center d-flex">
              <li className="header-navbar-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="header-navbar-item nav-item">
                <Link className="nav-link" to="/courses">
                  Online Courses
                </Link>
              </li>

              <li className="header-navbar-item nav-item">
                <a className="nav-link" href="##">
                  We're Hiring
                </a>
              </li>

              <li className="header-navbar-item nav-item">
                <a className="nav-link" href="##">
                  More
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
