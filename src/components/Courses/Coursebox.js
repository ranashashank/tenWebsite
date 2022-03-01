import React from "react";

const Coursebox = ({ course }) => {
  return (
    <div className="coursebox">
      <a href={course.url}>
        <h1 className="text-center">{course.name}</h1>
      </a>
      <a href={course.url}>
        <button className="btn">Explore Here</button>
      </a>
    </div>
  );
};

export default Coursebox;
