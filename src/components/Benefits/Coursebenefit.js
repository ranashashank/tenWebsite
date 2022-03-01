import React from "react";
import Benefitbox from "./Benefitbox";
const Coursebenefit = () => {
  const benefitdata = [
    {
      path: "assets/box1.svg",
      title: "Expert Teachers",
      about:
        "Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.",
    },
    {
      path: "assets/box2.svg",
      title: "Online Community",
      about: 'Feel like home, with a "family of invisible friends".',
    },
    {
      path: "assets/box3.svg",
      title: "Flexible Curriculum",
      about:
        "Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.",
    },
  ];
  return (
    <div className="coursebenefits">
      <div className="clip-background">
        <h1 className="text-center">Our Course Benefits</h1>
      </div>
      <div className="benefitboxs row mx-auto">
        {benefitdata.map((data, index) => (
          <Benefitbox
            key={index}
            path={data.path}
            title={data.title}
            about={data.about}
          />
        ))}
      </div>
    </div>
  );
};

export default Coursebenefit;
