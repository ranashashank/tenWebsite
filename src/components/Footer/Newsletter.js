import React, { Component } from "react";

class Newsletter extends Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.mobileRef = React.createRef();
    this.collegeRef = React.createRef();
    this.emailRef = React.createRef();
    this.checkboxRef = React.createRef();
    this.regexFormat = {
      mobileformat: /^\d{10}$/,
      emailformat: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    };
    this.state = {
      errors: {},
    };
  }

  componentDidMount() {
    this.nameRef.current.addEventListener("blur", () => {
      this.handleBlurValidation(this.nameRef.current);
    });
    this.mobileRef.current.addEventListener("blur", () => {
      this.handleBlurValidation(this.mobileRef.current);
    });
    this.collegeRef.current.addEventListener("blur", () => {
      this.handleBlurValidation(this.collegeRef.current);
    });
    this.emailRef.current.addEventListener("blur", () => {
      this.handleBlurValidation(this.emailRef.current);
    });
  }

  handleBlurValidation(input) {
    let errors = {};
    const { mobileformat, emailformat } = this.regexFormat;
    switch (input.id) {
      case "name":
        if (input.value.length === 0) errors.name = true;
        else errors.name = false;
        break;

      case "college":
        if (input.value.length === 0) errors.college = true;
        else errors.college = false;
        break;

      case "mobile":
        if (!input.value.match(mobileformat)) errors.mobile = true;
        else errors.mobile = false;
        break;

      case "email":
        if (!input.value.match(emailformat)) errors.email = true;
        else errors.email = false;
        break;

      default:
        console.log("case not matched!");
        break;
    }
    if (Object.keys(errors).length > 0) {
      errors = Object.assign(this.state.errors, errors);
      this.setState({ errors });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const name = this.nameRef.current.value;
    const mobile = this.mobileRef.current.value;
    const college = this.collegeRef.current.value;
    const email = this.emailRef.current.value;
    const errors = this.handleValidation(name, mobile, college, email);

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      console.log(errors);
      console.log(this.nameRef.current);
    } else {
      window.location.href = "https://discord.com/invite/A8zBusy";
    }
  };

  handleValidation = (name, mobile, college, email) => {
    const errors = {};
    const { mobileformat, emailformat } = this.regexFormat;
    if (name.length === 0) {
      errors.name = true;
    }
    if (!mobile.match(mobileformat)) {
      errors.mobile = true;
    }
    if (college.length === 0) {
      errors.college = true;
    }
    if (!email.match(emailformat)) {
      errors.email = true;
    }
    return errors;
  };

  render() {
    const { nameRef, mobileRef, collegeRef, emailRef, checkboxRef } = this;
    const { errors } = this.state;
    return (
      <form className="newsletter" onSubmit={this.handleSubmit}>
        <h5 className="newsletter-title text-center">
          Subscribe to our newsletter
        </h5>
        <div className="newsletter-inputs d-flex flex-wrap">
          <input
            className={errors.name ? "error" : null}
            id="name"
            type="text"
            placeholder="Full Name"
            maxLength="100"
            ref={nameRef}
          />
          <input
            className={errors.mobile ? "error" : null}
            id="mobile"
            type="text"
            placeholder="Mobile No."
            maxLength="50"
            ref={mobileRef}
          />
          <input
            className={errors.college ? "error" : null}
            id="college"
            type="text"
            placeholder="College Name"
            maxLength="100"
            ref={collegeRef}
          />
          <input
            className={errors.email ? "error" : null}
            id="email"
            type="text"
            placeholder="Email"
            maxLength="250"
            pattern="^.+@.+\.[a-zA-Z]{2,63}$"
            ref={emailRef}
          />
        </div>

        <div className="join-discord">
          <input type="checkbox" name="discord-checkbox" ref={checkboxRef} />
          <label htmlFor="discord-checkbox">Join TEN's Discord Community</label>
        </div>
        <button type="submit" className="btn d-block mx-auto">
          Submit
        </button>
      </form>
    );
  }
}

export default Newsletter;
