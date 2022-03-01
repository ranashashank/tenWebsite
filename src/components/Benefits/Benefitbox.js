import React from "react";

const Benefitbox = ({ title, about, path }) => {
  return (
    <div className="benefitbox col-md-4 text-center">
      <img src={path} alt="" />
      <div className="benefitbox-title">
        <h3>{title}</h3>
        <div className="underline"></div>
      </div>
      <p>{about}</p>
    </div>
  );
};

export default Benefitbox;
